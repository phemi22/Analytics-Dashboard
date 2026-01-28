import Header from "../components/layout/Header";
import MetricCard from "../components/dashboard/MetricCard";
import FilterOptions from "../components/dashboard/FilterOptions";
import DataTable from "../components/dashboard/DataTable";
import LineChartComponent from "../components/charts/LineChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import { exportToCSV } from "../utils/exportUtils";
import useDashboardData from "../hooks/useDashboardData";
import { Filter } from "lucide-react";

const Dashboard = ({ darkMode, onToggleDarkMode }) => {
  const {
    filteredData,
    isLoading,
    activeFilter,
    filterOptions,
    fetchData,
    handleFilterChange,
    sortConfig,
    requestSort,
  } = useDashboardData();

  // Calculate summary metrics
  const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0);
  const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
  const totalProfit = filteredData.reduce((sum, item) => sum + item.profit, 0);

  const handleExport = () => {
    exportToCSV(filteredData, `dashboard_export_${new Date().toISOString()}`);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Dashboard Header */}
      <Header
        title="Analytics Dashboard (2026 Refresh)"
        onRefresh={fetchData}
        onExport={handleExport}
        darkMode={darkMode}
        onToggleDarkMode={onToggleDarkMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MetricCard
                title="Total Sales"
                value={totalSales.toLocaleString()}
                icon={<Filter size={24} className="text-blue-500" />}
                change={5.8}
                darkMode={darkMode}
              />
              <MetricCard
                title="Total Revenue"
                value={`$${totalRevenue.toLocaleString()}`}
                icon={<Filter size={24} className="text-green-500" />}
                change={7.2}
                darkMode={darkMode}
              />
              <MetricCard
                title="Total Profit"
                value={`$${totalProfit.toLocaleString()}`}
                icon={<Filter size={24} className="text-purple-500" />}
                change={-2.3}
                darkMode={darkMode}
              />
            </div>

            {/* Filter Options */}
            <div
              className={`p-4 rounded-lg shadow mb-8 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex items-center mb-4">
                <Filter
                  size={20}
                  className={`mr-2 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                />
                <h2 className="text-lg font-medium">Filter by Category</h2>
              </div>
              <FilterOptions
                options={filterOptions}
                onFilterChange={handleFilterChange}
                activeFilter={activeFilter}
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div
                className={`p-4 rounded-lg shadow ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h2 className="text-lg font-medium mb-4">Sales Trend</h2>
                <LineChartComponent data={filteredData} dataKey="sales" />
              </div>

              <div
                className={`p-4 rounded-lg shadow ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h2 className="text-lg font-medium mb-4">Revenue vs Profit</h2>
                <BarChartComponent
                  data={filteredData}
                  dataKey="revenue"
                  secondaryDataKey="profit"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div
                className={`p-4 rounded-lg shadow ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h2 className="text-lg font-medium mb-4">Sales by Category</h2>
                <PieChartComponent data={filteredData} dataKey="sales" />
              </div>

              <div
                className={`p-4 rounded-lg shadow ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h2 className="text-lg font-medium mb-4">Monthly Performance</h2>
                <BarChartComponent data={filteredData} dataKey="sales" />
              </div>
            </div>

            {/* Data Table */}
            <div
              className={`p-4 rounded-lg shadow ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <h2 className="text-lg font-medium mb-4">Detailed Data</h2>
              <DataTable
                data={filteredData}
                sortConfig={sortConfig}
                requestSort={requestSort}
                darkMode={darkMode}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
