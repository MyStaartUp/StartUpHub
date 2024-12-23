import React from 'react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { TrendingUp, PieChart, Shield, Users } from 'lucide-react';

export function InvestorPage() {
  const investmentOpportunities = [
    {
      id: 1,
      name: "GreenTech Solutions",
      sector: "Environnement",
      stage: "Série A",
      amount: "500K€ - 1M€",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f"
    },
    {
      id: 2,
      name: "MedTech Innovation",
      sector: "Santé",
      stage: "Seed",
      amount: "200K€ - 500K€",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Espace Investisseurs
        </h1>
        <p className="text-xl text-gray-600">
          Découvrez des opportunités d'investissement dans les startups les plus prometteuses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: TrendingUp,
            title: "Croissance",
            description: "Accédez aux startups à fort potentiel"
          },
          {
            icon: PieChart,
            title: "Diversification",
            description: "Investissez dans différents secteurs"
          },
          {
            icon: Shield,
            title: "Sécurité",
            description: "Due diligence approfondie"
          },
          {
            icon: Users,
            title: "Réseau",
            description: "Rejoignez une communauté d'investisseurs"
          }
        ].map((feature, index) => (
          <Card key={index} className="text-center p-6">
            <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Opportunités d'investissement</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {investmentOpportunities.map((opportunity) => (
          <Card key={opportunity.id}>
            <div className="flex">
              <img 
                src={opportunity.image} 
                alt={opportunity.name}
                className="w-32 h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{opportunity.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Secteur: {opportunity.sector}</p>
                  <p>Stage: {opportunity.stage}</p>
                  <p>Montant recherché: {opportunity.amount}</p>
                </div>
                <Button variant="primary" className="mt-4">
                  En savoir plus
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}