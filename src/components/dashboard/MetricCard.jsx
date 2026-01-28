const MetricCard = ({ title, value, icon, change, darkMode }) => {
  const isPositive = change >= 0;

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white"} p-4 rounded-lg shadow`}>
      <div className="flex justify-between items-center">
        <div>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-sm`}>{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>

        <div
          className={`p-2 rounded-full ${
            isPositive
              ? darkMode
                ? "bg-green-900/30"
                : "bg-green-100"
              : darkMode
              ? "bg-red-900/30"
              : "bg-red-100"
          }`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-2">
        <span className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "↑" : "↓"} {Math.abs(change)}%
        </span>
        <span className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-sm`}> vs last month</span>
      </div>
    </div>
  );
};

export default MetricCard;
