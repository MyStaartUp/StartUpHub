import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { StartupStatus } from '@/components/startup/StartupStatus';
import type { Startup } from '@/types/startup';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <Card>
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={startup.image} alt={startup.name} />
      </div>
      <Card.Body>
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {startup.category}
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{startup.name}</p>
            <p className="mt-3 text-base text-gray-500">{startup.description}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <StartupStatus status={startup.status} />
          <div className="ml-auto">
            <Link
              to={`/startups/${startup.id}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              En savoir plus
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}