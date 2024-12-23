import { supabase } from '../supabase/client';
import type { Profile } from '@/types/profile';

export const profileService = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return data;
  },

  async updateProfile(userId: string, profile: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async createProfile(profile: Omit<Profile, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('profiles')
      .insert(profile)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};