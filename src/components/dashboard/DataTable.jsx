const DataTable = ({ data, sortConfig, requestSort, darkMode }) => {
  const tableBorder = darkMode ? "divide-gray-800" : "divide-gray-200";
  const headBg = darkMode ? "bg-gray-900" : "bg-gray-50";
  const headText = darkMode ? "text-gray-300" : "text-gray-500";
  const hoverHead = darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100";

  const bodyBg = darkMode ? "bg-gray-900" : "bg-white";
  const rowEven = darkMode ? "bg-gray-900" : "bg-white";
  const rowOdd = darkMode ? "bg-gray-800" : "bg-gray-50";

  const cellMain = darkMode ? "text-white" : "text-gray-900";
  const cellSub = darkMode ? "text-gray-300" : "text-gray-500";

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y ${tableBorder}`}>
        <thead className={headBg}>
          <tr>
            <th
              className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${headText} ${hoverHead}`}
              onClick={() => requestSort("name")}
            >
              Month
              {sortConfig.key === "name" && (
                <span>{sortConfig.direction === "ascending" ? " ↑" : " ↓"}</span>
              )}
            </th>

            <th
              className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${headText} ${hoverHead}`}
              onClick={() => requestSort("category")}
            >
              Category
              {sortConfig.key === "category" && (
                <span>{sortConfig.direction === "ascending" ? " ↑" : " ↓"}</span>
              )}
            </th>

            <th
              className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${headText} ${hoverHead}`}
              onClick={() => requestSort("sales")}
            >
              Sales
              {sortConfig.key === "sales" && (
                <span>{sortConfig.direction === "ascending" ? " ↑" : " ↓"}</span>
              )}
            </th>

            <th
              className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${headText} ${hoverHead}`}
              onClick={() => requestSort("revenue")}
            >
              Revenue
              {sortConfig.key === "revenue" && (
                <span>{sortConfig.direction === "ascending" ? " ↑" : " ↓"}</span>
              )}
            </th>

            <th
              className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${headText} ${hoverHead}`}
              onClick={() => requestSort("profit")}
            >
              Profit
              {sortConfig.key === "profit" && (
                <span>{sortConfig.direction === "ascending" ? " ↑" : " ↓"}</span>
              )}
            </th>
          </tr>
        </thead>

        <tbody className={`${bodyBg} divide-y ${tableBorder}`}>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? rowEven : rowOdd}>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${cellMain}`}>
                {item.name}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${cellSub}`}>
                {item.category}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${cellSub}`}>
                {item.sales.toLocaleString()}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${cellSub}`}>
                ${item.revenue.toLocaleString()}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${cellSub}`}>
                ${item.profit.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
