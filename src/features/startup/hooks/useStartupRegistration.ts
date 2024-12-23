import { useState } from 'react';
import { createStartup } from '../api/startupApi';
import { useAuthContext } from '@/features/auth/components/AuthProvider';

interface StartupRegistrationData {
  name: string;
  description: string;
  sector: string;
  website?: string;
  teamSize: number;
  stage: string;
}

export function useStartupRegistration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  const register = async (data: StartupRegistrationData) => {
    if (!user) {
      setError('Vous devez être connecté pour créer une startup');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createStartup({
        name: data.name,
        description: data.description,
        category: data.sector,
        status: 'Nouveau',
        image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        owner_id: user.id
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}