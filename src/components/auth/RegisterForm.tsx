import { useState } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import {Input, Button, Alert} from '@/components/common';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RegisterFormProps {
  onSuccess: (userId: string, email: string) => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Vérifie si les champs sont remplis
    if (!email.trim()) {
      setError('Veuillez saisir votre email');
      return;
    }

    if (!password.trim()) {
      setError('Veuillez saisir votre mot de passe');
      return;
    }

    // Tentative d'inscription
    try {
      const { user } = await signUp(email, password);
      if (user) {
        onSuccess(user.id, user.email || '');
      }
    } catch (err) {
      let errorMessage = 'Erreur lors de l\'inscription';

      // ToDo: Gérer l'erreur qui survint lors de l'insccription : code: "42501" même si l'utilisateur est bien inscrit dans la db
      console.error('Erreur d\'inscription:', err);

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (err && typeof err === 'object' && 'status' in err && err.status === 400) {
        errorMessage = 'Adresse email invalide';
      }

      setError(errorMessage);
    };
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        Alert({message: error, type: 'danger'})
      )}

      {/* Utilisation d'un component input réutilisable */}
      <Input
        id='email'
        type='email'
        label='Email'
        value={email}
        icon={<Mail />}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>

      <Input
        id='password'
        type='password'
        label='Mot de passe'
        value={password}
        icon={<Lock />}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-2'
      ></Input>

      <p className="text-xs text-[#00000099]">
        En cliquant sur « Accepter et rejoindre », vous acceptez les conditions d'utilisation de MyStartupHub.{' '}
        <a href="#" className="text-indigo-500 hover:underline">Accord d'utilisation</a>,{' '}
        <a href="#" className="text-indigo-500 hover:underline">Politique de confidentialité</a>, et{' '}
        <a href="#" className="text-indigo-500 hover:underline">Politique en matière de cookies</a>.
      </p>

      <Button type="submit" variant="primary" className="w-full">
        Accepter et s'inscrire
      </Button>

      <p className="mt-2 text-center text-sm text-gray-600">
        Vous avez déja un compte ?{' '}
        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
          Connectez-vous
        </Link>
      </p>
    </form>
    </>
  );
}