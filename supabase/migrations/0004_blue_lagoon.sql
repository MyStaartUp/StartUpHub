/*
  # Configuration initiale des tables pour StartUpHub

  1. Tables
    - `startups`
      - `id` (uuid, clé primaire)
      - `name` (text, non null)
      - `description` (text)
      - `image_url` (text)
      - `category` (text)
      - `status` (text)
      - `owner_id` (uuid, référence profiles)
      - Timestamps (created_at, updated_at)
    
    - `profiles`
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence auth.users)
      - `type` (enum: startup, investor, public)
      - `full_name` (text)
      - `avatar_url` (text)
      - Timestamps (created_at, updated_at)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques pour la lecture publique
    - Politiques pour la modification par les propriétaires
*/

-- Création des tables
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

CREATE TABLE IF NOT EXISTS startups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  category text,
  status text DEFAULT 'Nouveau',
  owner_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activation RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;

-- Politiques pour profiles
CREATE POLICY "Lecture publique des profils"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Modification du profil par son propriétaire"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Création de profil pour utilisateur authentifié"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Politiques pour startups
CREATE POLICY "Lecture publique des startups"
  ON startups FOR SELECT
  USING (true);

CREATE POLICY "Modification startup par propriétaire"
  ON startups FOR UPDATE
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ))
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ));

CREATE POLICY "Création startup par utilisateur authentifié"
  ON startups FOR INSERT
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM profiles WHERE profiles.id = owner_id
  ));