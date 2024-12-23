import React from 'react';
import { useParams } from 'react-router-dom';
import { StartupDetails } from '@/features/startup/components/StartupDetails';
import { useStartup } from '@/features/startup/hooks/useStartup';

export function StartupDetailsPage() {
  const { id } = useParams();
  const { startup, loading, error } = useStartup(id);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !startup) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Une erreur est survenue lors du chargement de la startup</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <StartupDetails startup={startup} />
    </div>
  );
}