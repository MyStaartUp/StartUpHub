import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;

    // Si l'inscription réussit mais que data.user est null, on lance une erreur
    if (!data.user) {
      throw new Error("L'inscription a réussi mais les données utilisateur sont manquantes");
    }

    // Création du profil utilisateur
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        user_id: data.user.id,
        type: 'public', // Type par défaut, sera mis à jour lors de la sélection du rôle
      });
    
    if (profileError) throw profileError;

    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}