/*
  # Create profiles and startups tables

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `type` (enum: 'startup', 'investor', 'public')
      - `full_name` (text)
      - `avatar_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `startups`
      - `id` (uuid, primary key)
      - `owner_id` (uuid, references profiles)
      - `name` (text)
      - `description` (text)
      - `image_url` (text)
      - `category` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for reading and writing data
*/

-- Create enum for profile types
CREATE TYPE profile_type AS ENUM ('startup', 'investor', 'public');

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  type profile_type NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create startups table
CREATE TABLE startups (
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