import { useState, useEffect } from 'react';
import { startupService } from '@/services/startup/startupService';
import type { Startup } from '@/types/startup';

export function useStartupDetails(id: string) {
  const [startup, setStartup] = useState<Startup | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStartup() {
      try {
        const data = await startupService.getById(id);
        setStartup(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur lors du chargement de la startup'));
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchStartup();
    }
  }, [id]);

  return { startup, loading, error };
}