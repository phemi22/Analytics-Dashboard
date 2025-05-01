import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
  } from 'recharts';
  
  const LineChartComponent = ({ data, dataKey, secondaryDataKey = null }) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
          />
          {secondaryDataKey && (
            <Line type="monotone" dataKey={secondaryDataKey} stroke="#82ca9d" />
          )}
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default LineChartComponent;