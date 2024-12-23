import React from 'react';
import { StartupForm } from '@/features/startup/components/StartupForm';

export function CreateStartupPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Créer une startup
      </h1>
      <StartupForm />
    </div>
  );
}