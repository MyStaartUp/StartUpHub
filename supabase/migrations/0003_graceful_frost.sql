/*
  # Ajout de la politique d'insertion pour les startups

  1. Sécurité
    - Ajoute une politique permettant aux utilisateurs authentifiés d'insérer de nouvelles startups
    - L'utilisateur doit être authentifié pour créer une startup
*/

-- Politique pour permettre l'insertion de startups
CREATE POLICY "Les utilisateurs authentifiés peuvent créer des startups"
  ON startups
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Politique pour permettre la mise à jour des startups par leurs propriétaires
CREATE POLICY "Les propriétaires peuvent mettre à jour leurs startups"
  ON startups
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ))
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = startups.owner_id
  ));