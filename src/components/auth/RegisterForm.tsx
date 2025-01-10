import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth/AuthContext';
import { Input, Button, Alert } from '@/components/common';
import { Mail, Lock } from 'lucide-react';
import { validatePasswordStrength } from '@/utils/password-validation';

interface RegisterFormProps {
  onSuccess: (userId: string, email: string) => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation de base
    if (!email.trim()) {
      setError('Veuillez saisir votre email');
      return;
    }

    // Validation du mot de passe
    const { isValid, errors } = validatePasswordStrength(password);
    if (!isValid) {
      setError(errors[0]);
      return;
    }

    // Vérification de la confirmation du mot de passe
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const { user } = await signUp(email, password);
      if (user) {
        onSuccess(user.id, user.email || '');
      }
    } catch (err: any) {
      let errorMessage = 'Une erreur est survenue lors de l\'inscription';
      
      if (err.error?.message === 'User already registered') {
        errorMessage = 'Un compte existe déjà avec cette adresse email. Veuillez vous connecter.';
      } else if (err.error?.message?.includes('password')) {
        errorMessage = 'Le mot de passe doit contenir au moins 8 caractères';
      } else if (err.error?.message?.includes('email')) {
        errorMessage = 'Veuillez entrer une adresse email valide';
      }
      
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert message={error} type="danger" />
      )}

      <Input
        id="email"
        type="email"
        label="Email"
        value={email}
        icon={<Mail />}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        id="password"
        type="password"
        label="Mot de passe"
        value={password}
        icon={<Lock />}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Input
        id="confirmPassword"
        type="password"
        label="Confirmer le mot de passe"
        value={confirmPassword}
        icon={<Lock />}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {password && <div className="text-sm text-gray-600">
        <p className="font-medium mb-2">Le mot de passe doit contenir :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Au moins 8 caractères</li>
          <li>Une lettre majuscule</li>
          <li>Une lettre minuscule</li>
          <li>Un chiffre</li>
          <li>Un caractère spécial</li>
        </ul>
      </div>}

      <Button type="submit" variant="primary" className="w-full">
        S'inscrire
      </Button>

      <p className="text-center text-sm text-gray-600">
        Vous avez déjà un compte ?{' '}
        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
          Connectez-vous
        </Link>
      </p>
    </form>
  );
}