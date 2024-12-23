import { useState, useEffect } from 'react';
import { authService } from '@/services/auth/authService';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { user } = await authService.signIn(email, password);
    setUser(user);
  };

  const signUp = async (email: string, password: string) => {
    const { user } = await authService.signUp(email, password);
    setUser(user);
  };

  const signOut = async () => {
    await authService.signOut();
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut
  };
}