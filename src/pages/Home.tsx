import React from 'react';
import { ArrowRight, Rocket, Users, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const featuredStartups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      description: "Solutions innovantes pour la transition écologique",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      category: "Environnement",
      status: "En recherche de fonds"
    },
    {
      id: 2,
      name: "HealthAI",
      description: "Intelligence artificielle au service de la santé",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      category: "Santé",
      status: "Nouveau"
    },
    {
      id: 3,
      name: "FinNext",
      description: "La nouvelle génération de services financiers",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Fintech",
      status: "En croissance"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Investissez dans l'innovation</span>
              <span className="block text-indigo-200">Soutenez les startups de demain</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Découvrez les startups les plus prometteuses, connectez-vous avec des investisseurs
              et participez à l'écosystème entrepreneurial.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/startups"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                >
                  Découvrir les startups
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/register-startup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                >
                  Inscrire ma startup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir StartUpHub ?
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Accédez aux projets les plus innovants et prometteurs
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Communauté</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Rejoignez une communauté dynamique d'entrepreneurs et d'investisseurs
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Croissance</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Accompagnez les startups dans leur développement
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Sécurité</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Profitez d'un environnement sécurisé et vérifié
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
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
            {featuredStartups.map((startup) => (
              <div key={startup.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={startup.image} alt={startup.name} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
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
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {startup.status}
                      </span>
                    </div>
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
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/startups"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Voir toutes les startups
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}