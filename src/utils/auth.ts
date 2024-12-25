// Auth error messages
export const getAuthErrorMessage = (error: { code?: string, message?: string }) => {
  switch (error.code) {
    case 'user_already_exists':
      return 'Un compte existe déjà avec cette adresse email. Veuillez vous connecter.';
    case 'invalid_email':
      return 'Veuillez entrer une adresse email valide.';
    case 'weak_password':
      return 'Le mot de passe doit contenir au moins 8 caractères.';
    default:
      return error.message || 'Une erreur est survenue lors de l\'inscription.';
  }
};