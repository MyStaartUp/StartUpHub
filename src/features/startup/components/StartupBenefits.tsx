import React from 'react';
import { Card } from '@/components/common/Card';
import { Users, TrendingUp, Lightbulb, Target } from 'lucide-react';

export function StartupBenefits() {
  const benefits = [
    {
      icon: Users,
      title: "Réseau",
      description: "Accédez à notre communauté d'investisseurs et d'entrepreneurs"
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Bénéficiez d'un accompagnement pour accélérer votre développement"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Développez votre projet avec des experts de l'innovation"
    },
    {
      icon: Target,
      title: "Visibilité",
      description: "Gagnez en visibilité auprès des investisseurs"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos avantages</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6">
            <benefit.icon className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}