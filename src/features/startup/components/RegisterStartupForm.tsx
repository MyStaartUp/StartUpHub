import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStartupRegistration } from '../hooks/useStartupRegistration';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';

export function RegisterStartupForm() {
  const navigate = useNavigate();
  const { register, loading, error } = useStartupRegistration();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      sector: formData.get('sector') as string,
      website: formData.get('website') as string,
      teamSize: Number(formData.get('teamSize')),
      stage: formData.get('stage') as string,
    };

    try {
      await register(data);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <Card.Header>
        <h2 className="text-2xl font-bold text-gray-900">Inscription de votre startup</h2>
      </Card.Header>

      <Card.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom de la startup
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description du projet
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
              Secteur d'activité
            </label>
            <select
              id="sector"
              name="sector"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Sélectionnez un secteur</option>
              <option value="tech">Technologies</option>
              <option value="health">Santé</option>
              <option value="finance">Finance</option>
              <option value="education">Éducation</option>
              <option value="environment">Environnement</option>
            </select>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
              Site web
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
              Taille de l'équipe
            </label>
            <input
              type="number"
              id="teamSize"
              name="teamSize"
              min="1"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="stage" className="block text-sm font-medium text-gray-700">
              Stade de développement
            </label>
            <select
              id="stage"
              name="stage"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Sélectionnez un stade</option>
              <option value="idea">Idée</option>
              <option value="mvp">MVP</option>
              <option value="market">Sur le marché</option>
              <option value="growth">En croissance</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Inscription en cours...' : 'Inscrire ma startup'}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}