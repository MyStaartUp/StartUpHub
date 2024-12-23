export interface Profile {
  id: string;
  user_id: string;
  type: 'startup' | 'investor' | 'public';
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}