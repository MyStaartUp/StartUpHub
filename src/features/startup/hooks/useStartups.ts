import { useState, useEffect } from 'react';
import { getStartups } from '../api/startupApi';
import type { Startup } from '@/types/startup';

export function useStartups() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStartups() {
      try {
        const data = await getStartups();
        setStartups(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch startups'));
      } finally {
        setLoading(false);
      }
    }

    fetchStartups();
  }, []);

  return { startups, loading, error };
}