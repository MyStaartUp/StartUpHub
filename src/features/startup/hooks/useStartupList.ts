import { useState, useEffect } from 'react';
import { startupService } from '@/services/startup/startupService';
import type { Startup } from '@/types/startup';

export function useStartupList() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStartups() {
      try {
        const data = await startupService.getAll();
        setStartups(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur lors du chargement des startups'));
      } finally {
        setLoading(false);
      }
    }

    fetchStartups();
  }, []);

  return { startups, loading, error };
}