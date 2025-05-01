// Generate sample data for the dashboard
export const generateData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((month, index) => ({
      name: month,
      sales: Math.floor(Math.random() * 5000) + 1000,
      revenue: Math.floor(Math.random() * 10000) + 5000,
      profit: Math.floor(Math.random() * 3000) + 500,
      category: ['Electronics', 'Clothing', 'Food', 'Home Goods'][Math.floor(Math.random() * 4)]
    }));
  };
  
  // Sort data based on key and direction
  export const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };
  
  // Filter data based on category
  export const filterData = (data, filter) => {
    if (filter === 'all') {
      return data;
    }
    return data.filter(item => item.category === filter);
  };