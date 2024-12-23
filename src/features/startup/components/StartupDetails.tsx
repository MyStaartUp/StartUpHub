import React from 'react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Calendar, Users, TrendingUp } from 'lucide-react';
import type { Startup } from '@/types/startup';

interface StartupDetailsProps {
  startup: Startup;
}

export function StartupDetails({ startup }: StartupDetailsProps) {
  return (
    <Card className="max-w-3xl mx-auto">
      <Card.Header>
        <div className="flex items-center space-x-4">
          <img 
            src={startup.image_url} 
            alt={startup.name}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{startup.name}</h1>
            <p className="text-sm text-gray-500">{startup.category}</p>
          </div>
        </div>
      </Card.Header>
      
      <Card.Body>
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{startup.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">
                Créée le {new Date(startup.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">Équipe de 5 personnes</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">{startup.status}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button variant="primary">Contacter</Button>
            <Button variant="outline">En savoir plus</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}