import React from 'react';
import { Card } from '@/components/common/Card';
import { CheckCircle } from 'lucide-react';

export function StartupRequirements() {
  const requirements = [
    "Un projet innovant avec un potentiel de croissance",
    "Une équipe motivée et complémentaire",
    "Un business model défini",
    "Une vision claire du marché",
    "Un MVP ou prototype en développement",
    "Une volonté de s'engager dans l'écosystème"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Critères d'éligibilité</h2>
      <Card className="p-6">
        <ul className="space-y-4">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600">{requirement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}