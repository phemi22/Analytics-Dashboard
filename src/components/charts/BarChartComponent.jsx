import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
  } from 'recharts';
  
  const BarChartComponent = ({ data, dataKey, secondaryDataKey = null }) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
          {secondaryDataKey && <Bar dataKey={secondaryDataKey} fill="#82ca9d" />}
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarChartComponent;