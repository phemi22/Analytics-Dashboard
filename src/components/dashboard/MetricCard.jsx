const MetricCard = ({ title, value, icon, change }) => {
    const isPositive = change >= 0;
    
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
          </div>
          <div className={`p-2 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
            {icon}
          </div>
        </div>
        <div className="mt-2">
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}% 
          </span>
          <span className="text-gray-500 text-sm"> vs last month</span>
        </div>
      </div>
    );
  };
  
  export default MetricCard;