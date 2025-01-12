import { createClient } from '@supabase/supabase-js';
import type { TypedSupabaseClient } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Les variables d\'environnement Supabase sont manquantes');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) as TypedSupabaseClient;