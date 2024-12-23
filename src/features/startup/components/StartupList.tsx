import React from 'react';
import { StartupCard } from '@/components/startup/StartupCard';
import { useStartups } from '../hooks/useStartups';

export function StartupList() {
  const { startups, loading, error } = useStartups();

  if (loading) {
    return <div className="text-center py-8">Chargement...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        Une erreur est survenue lors du chargement des startups
      </div>
    );
  }

  if (startups.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucune startup n'a encore été ajoutée
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {startups.map((startup) => (
        <StartupCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
}