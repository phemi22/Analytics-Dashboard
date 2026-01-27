import { useState } from 'react';
import { RefreshCcw, Download } from 'lucide-react';

const Header = ({ title, onRefresh, onExport }) => {
  const [ darkMode, setDarkMode ] = useState(false);
  return (
    <header className={`${darkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
               className={`px-4 py-2 rounded-md text-sm font-medium border 
                ${ darkMode ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
    >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <button 
              onClick={onRefresh}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <RefreshCcw size={16} className="mr-2" />
              Refresh
            </button>
            <button 
              onClick={onExport}
              className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700"
            >
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;