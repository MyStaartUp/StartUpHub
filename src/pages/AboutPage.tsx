import React from 'react';
import { Card } from '@/components/common/Card';
import { Rocket, Heart, Target, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          À propos de StartUpHub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          StartUpHub est la première plateforme française dédiée à la mise en relation 
          entre startups innovantes et investisseurs passionnés.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="text-gray-600">
            Nous croyons en l'innovation et au potentiel des entrepreneurs français. 
            Notre mission est de faciliter la croissance de l'écosystème startup en 
            créant des connexions significatives entre porteurs de projets et investisseurs.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
          <p className="text-gray-600">
            Devenir la référence de l'écosystème startup en France en offrant une 
            plateforme transparente, efficace et innovante pour tous les acteurs 
            de l'innovation.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: Rocket,
            title: "Innovation",
            description: "Nous soutenons les projets innovants"
          },
          {
            icon: Heart,
            title: "Passion",
            description: "Nous sommes passionnés par l'entrepreneuriat"
          },
          {
            icon: Target,
            title: "Impact",
            description: "Nous visons un impact positif sur la société"
          },
          {
            icon: Users,
            title: "Communauté",
            description: "Nous créons des liens durables"
          }
        ].map((value, index) => (
          <Card key={index} className="text-center p-6">
            <value.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Notre Équipe</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sophie Martin",
              role: "CEO & Co-fondatrice",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            },
            {
              name: "Thomas Dubois",
              role: "CTO & Co-fondateur",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            },
            {
              name: "Marie Lambert",
              role: "Directrice des Opérations",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}