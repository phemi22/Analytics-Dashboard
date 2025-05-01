import { useState, useEffect } from 'react';
import { generateData, filterData, sortData } from '../utils/dataUtils';

const useDashboardData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter options
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Clothing', value: 'Clothing' },
    { label: 'Food', value: 'Food' },
    { label: 'Home Goods', value: 'Home Goods' },
  ];
  
  // Load initial data
  useEffect(() => {
    fetchData();
  }, []);
  
  // Apply filters when filter or data changes
  useEffect(() => {
    const filtered = filterData(data, activeFilter);
    
    // Apply sorting if sortConfig has a key
    if (sortConfig.key) {
      setFilteredData(sortData(filtered, sortConfig.key, sortConfig.direction));
    } else {
      setFilteredData(filtered);
    }
  }, [activeFilter, data, sortConfig]);
  
  // Simulate API call to fetch data
  const fetchData = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const newData = generateData();
      setData(newData);
      setSortConfig({ key: null, direction: 'ascending' }); // Reset sorting
      setIsLoading(false);
    }, 1000);
  };
  
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  return {
    data,
    filteredData,
    isLoading,
    activeFilter,
    filterOptions,
    sortConfig,
    fetchData,
    handleFilterChange,
    requestSort
  };
};

export default useDashboardData;