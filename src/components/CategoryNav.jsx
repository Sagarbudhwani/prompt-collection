import React from 'react';
import { mockPrompts } from '../data'; // Import data to calculate categories dynamically

const CategoryNav = ({ selectedCategory, setSelectedCategory }) => {
  
  // 1. Get all unique categories from the existing data
  const uniqueCategories = ["All", ...new Set(mockPrompts.map(p => p.category))];

  return (
    <div className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          
          {uniqueCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`
                whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }
              `}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CategoryNav;