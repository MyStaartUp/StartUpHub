import { useState, useEffect } from 'react';
import { profileService } from '@/services/profile/profileService';
import { handleError } from '@/utils/error';
import type { Profile } from '@/types/profile';

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProfile() {
      if (!userId) return;
      
      try {
        const data = await profileService.getProfile(userId);
        setProfile(data);
      } catch (err) {
        setError(handleError(err));
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [userId]);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!userId) return;

    try {
      const updatedProfile = await profileService.updateProfile(userId, updates);
      setProfile(updatedProfile);
      return updatedProfile;
    } catch (err) {
      throw handleError(err);
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile
  };
}