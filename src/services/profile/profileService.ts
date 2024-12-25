import { supabase } from '../supabase/client';
import type { Profile } from '@/types/profile';

export const profileService = {
  async updateProfile(userId: string, data: Partial<Profile>) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .update(data)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) throw error;
    return profile;
  },

  async createProfile(userId: string, type: 'public' | 'startup' | 'investor') {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        user_id: userId,
        type,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};