import React from 'react';
import { Card } from '@/components/common/Card';
import { UserCircle, Rocket, LineChart } from 'lucide-react';

interface RoleSelectionProps {
  onSelect: (role: 'public' | 'startup' | 'investor') => void;
}

export function RoleSelection({ onSelect }: RoleSelectionProps) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Choisissez votre profil</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card 
          className="cursor-pointer hover:border-indigo-500 transition-colors"
          onClick={() => onSelect('public')}
        >
          <Card.Body className="text-center p-6">
            <UserCircle className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Utilisateur</h3>
            <p className="text-sm text-gray-600">Découvrez l'écosystème startup</p>
          </Card.Body>
        </Card>

        <Card 
          className="cursor-pointer hover:border-indigo-500 transition-colors"
          onClick={() => onSelect('startup')}
        >
          <Card.Body className="text-center p-6">
            <Rocket className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Porteur de projet</h3>
            <p className="text-sm text-gray-600">Présentez votre startup</p>
          </Card.Body>
        </Card>

        <Card 
          className="cursor-pointer hover:border-indigo-500 transition-colors"
          onClick={() => onSelect('investor')}
        >
          <Card.Body className="text-center p-6">
            <LineChart className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="font-semibold mb-2">Investisseur</h3>
            <p className="text-sm text-gray-600">Trouvez des opportunités</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}