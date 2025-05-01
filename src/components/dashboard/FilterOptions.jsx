const FilterOptions = ({ options, onFilterChange, activeFilter }) => {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`px-3 py-1 text-sm rounded-full ${
              activeFilter === option.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };
  
export default FilterOptions;