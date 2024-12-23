import { useState, useEffect } from 'react';
import { getStartupById } from '../api/startupApi';
import type { Startup } from '@/types/startup';

export function useStartup(id: string | undefined) {
  const [startup, setStartup] = useState<Startup | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStartup() {
      if (!id) return;

      try {
        const data = await getStartupById(id);
        setStartup(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch startup'));
      } finally {
        setLoading(false);
      }
    }

    fetchStartup();
  }, [id]);

  return { startup, loading, error };
}