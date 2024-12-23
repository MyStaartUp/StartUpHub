/*
  # Update database schema for StartUpHub

  1. Tables
    - `profiles`: User profiles with type (startup, investor, public)
    - `startups`: Startup information and details

  2. Security
    - Enable RLS on all tables
    - Add policies for public viewing and owner updates
*/

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('startup', 'investor', 'public')),
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create startups table if it doesn't exist
CREATE TABLE IF NOT EXISTS startups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES profiles ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  image_url text,
  category text,
  status text DEFAULT 'Nouveau',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ BEGIN
  DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
  DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
  DROP POLICY IF EXISTS "Startups are viewable by everyone" ON startups;
  DROP POLICY IF EXISTS "Startup owners can update their startups" ON startups;
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Startups policies
CREATE POLICY "Startups are viewable by everyone"
  ON startups FOR SELECT
  USING (true);

CREATE POLICY "Startup owners can update their startups"
  ON startups FOR UPDATE
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ))
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ));