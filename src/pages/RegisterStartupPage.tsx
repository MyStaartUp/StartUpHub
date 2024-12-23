import React from 'react';
import { RegisterStartupForm } from '@/features/startup/components/RegisterStartupForm';
import { StartupRequirements } from '@/features/startup/components/StartupRequirements';
import { StartupBenefits } from '@/features/startup/components/StartupBenefits';

export function RegisterStartupPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Lancez votre startup
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Rejoignez notre communauté d'entrepreneurs innovants et bénéficiez 
          d'un accompagnement personnalisé pour développer votre projet
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <StartupBenefits />
        <StartupRequirements />
      </div>

      <RegisterStartupForm />
    </div>
  );
}