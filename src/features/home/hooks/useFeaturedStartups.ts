import { useState, useEffect } from 'react';
import type { Startup } from '@/types/startup';

export function useFeaturedStartups() {
  const [startups, setStartups] = useState<Startup[]>([
    {
      id: 1,
      name: "EcoTech Solutions",
      description: "Solutions innovantes pour la transition écologique",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      category: "Environnement",
      status: "En recherche de fonds",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      name: "HealthAI",
      description: "Intelligence artificielle au service de la santé",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      category: "Santé",
      status: "Nouveau",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 3,
      name: "FinNext",
      description: "La nouvelle génération de services financiers",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Fintech",
      status: "En croissance",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]);

  // TODO: Fetch featured startups from API
  useEffect(() => {
    // fetchFeaturedStartups();
  }, []);

  return { startups };
}