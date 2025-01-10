import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth/AuthContext';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { User, Settings, Bell, Shield, AlertTriangle } from 'lucide-react';

export function DashboardPage() {
  const navigate = useNavigate();
  const { user, signOut, deleteAccount } = useAuth();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  if (!user) {
    return <div>Chargement...</div>;
  }

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      await signOut();
      navigate('/');
    } catch (error) {
      setDeleteError("Une erreur est survenue lors de la suppression du compte");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <User className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Profil</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-gray-600">3 nouvelles</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Sécurité</h3>
                <p className="text-sm text-gray-600">Compte sécurisé</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Paramètres du compte</h2>
          </Card.Header>
          <Card.Body>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={user.email || ''}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <button className="mt-1 text-sm text-indigo-600 hover:text-indigo-500">
                  Changer le mot de passe
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Préférences</h2>
          </Card.Header>
          <Card.Body>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Notifications email</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Newsletter</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Card className="mt-8">
        <Card.Header>
          <h2 className="text-xl font-semibold text-red-600">Zone dangereuse</h2>
        </Card.Header>
        <Card.Body>
          {showDeleteConfirm ? (
            <div className="space-y-4">
              <div className="flex items-center text-red-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <p className="font-medium">Cette action est irréversible</p>
              </div>
              <p className="text-gray-600">
                La suppression de votre compte entraînera la perte définitive de toutes vos données.
                Êtes-vous sûr de vouloir continuer ?
              </p>
              {deleteError && (
                <p className="text-red-600">{deleteError}</p>
              )}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Annuler
                </Button>
                <Button
                  variant="primary"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={handleDeleteAccount}
                >
                  Confirmer la suppression
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Supprimer mon compte
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}