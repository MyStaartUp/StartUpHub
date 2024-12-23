import { supabase } from '../supabase/client';

export const storageService = {
  async uploadFile(bucket: string, filePath: string, file: File) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) throw error;
    return data;
  },

  async getPublicUrl(bucket: string, filePath: string) {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  },

  async deleteFile(bucket: string, filePath: string) {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) throw error;
  }
};