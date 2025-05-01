import { 
    PieChart, 
    Pie, 
    Cell, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
  } from 'recharts';
  import { COLORS } from '../../constants/chartConstants';
  
  const PieChartComponent = ({ data, dataKey }) => {
    // Create data for pie chart based on categories
    const pieData = Object.entries(
      data.reduce((acc, item) => {
        const category = item.category;
        acc[category] = (acc[category] || 0) + item[dataKey];
        return acc;
      }, {})
    ).map(([name, value]) => ({ name, value }));
    
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  
  export default PieChartComponent;