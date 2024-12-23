import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StartupCard } from '@/components/startup/StartupCard';
import { Button } from '@/components/common/Button';
import { useFeaturedStartups } from '@/features/home/hooks/useFeaturedStartups';

export function FeaturedStartups() {
  const { startups } = useFeaturedStartups();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Startups en vedette
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez les projets les plus prometteurs du moment
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" asChild>
            <Link to="/startups" className="inline-flex items-center">
              Voir toutes les startups
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}