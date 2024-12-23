import React from 'react';
import { Search } from 'lucide-react';

interface StartupFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export function StartupFilters({ onSearch, onCategoryChange }: StartupFiltersProps) {
  const categories = [
    'Tous',
    'Technologie',
    'Santé',
    'Finance',
    'Education',
    'Environnement'
  ];

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Rechercher une startup..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}