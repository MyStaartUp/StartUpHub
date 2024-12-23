import React from 'react';
import { StartupList } from '@/features/startup/components/StartupList';

export function StartupPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Découvrir les startups
      </h1>
      <StartupList />
    </div>
  );
}