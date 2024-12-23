import { useState, useMemo } from 'react';
import type { Startup } from '@/types/startup';

export function useStartupSearch(startups: Startup[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Tous' || 
        startup.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [startups, searchQuery, selectedCategory]);

  return {
    filteredStartups,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  };
}