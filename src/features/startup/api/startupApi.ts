import { supabase } from '@/lib/supabase';
import type { Startup } from '@/types/startup';

export async function getStartups() {
  const { data, error } = await supabase
    .from('startups')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getStartupById(id: string) {
  const { data, error } = await supabase
    .from('startups')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createStartup(startup: Omit<Startup, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('startups')
    .insert(startup)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateStartup(id: string, startup: Partial<Startup>) {
  const { data, error } = await supabase
    .from('startups')
    .update(startup)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}