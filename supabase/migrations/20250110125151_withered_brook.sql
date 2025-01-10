/*
  # Ajout de la fonction de suppression de compte utilisateur

  1. Nouvelle fonction
    - `delete_user()`: Fonction pour supprimer un compte utilisateur
  
  2. Sécurité
    - La fonction n'est accessible qu'aux utilisateurs authentifiés
    - L'utilisateur ne peut supprimer que son propre compte
*/

-- Création de la fonction delete_user
CREATE OR REPLACE FUNCTION public.delete_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Vérifier que l'utilisateur est authentifié
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Non authentifié';
  END IF;

  -- Supprimer le profil (la suppression en cascade s'occupera des données associées)
  DELETE FROM auth.users
  WHERE id = auth.uid();
END;
$$;

-- Donner les permissions d'exécution
GRANT EXECUTE ON FUNCTION public.delete_user() TO authenticated;