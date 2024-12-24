import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Rocket, Search, User } from 'lucide-react';

const navigations = [
  {name: 'Accueil', href: '/'},
  {name: 'Découvrir les startups', href: '/startups'},
  {name: 'Investisseurs', href: '/investors'},
  {name: 'Devenir une startup', href: '/register-startup'},
  {name: 'A propos', href: '/about'},
]

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">StartUpHub</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigations.map((item) => (
                <NavLink 
                key={item.name}
                to={item.href} 
                className={({isActive}) => 
                  `inline-flex items-center px-1 text-sm font-medium ${
                    isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                  }`
                }>
                {item.name}
              </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button type="button" className="relative p-1 text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-4">
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <User className="h-4 w-4 mr-2" />
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}