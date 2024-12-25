import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { Button } from '@/components/common/Button';

export function Header() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">StartUpHub</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/startups" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Découvrir les startups
              </Link>
              <Link to="/investors" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Investisseurs
              </Link>
              <Link to="/register-startup" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Devenir une startup
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                À propos
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button type="button" className="relative p-1 text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="flex items-center text-gray-700">
                    <User className="h-5 w-5 mr-2" />
                    Mon compte
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <User className="h-4 w-4 mr-2" />
                  Connexion
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}