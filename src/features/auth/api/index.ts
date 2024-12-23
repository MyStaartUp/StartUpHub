import { authService } from '@/services/auth/authService';

export const authApi = {
  signIn: authService.signIn,
  signUp: authService.signUp,
  signOut: authService.signOut,
  getCurrentUser: authService.getCurrentUser,
};