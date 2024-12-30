import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth/AuthContext';
import {Input, Button, Alert} from '@/components/common';
import { Mail, Lock } from 'lucide-react';

export function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
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

    // Tentative de connexion
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err: unknown) {
      // Gestion des erreurs
      // ToDo: Améliorer la gestion des erreurs. Ca évitera d'avoir les erreurs en anglais
      let errorMessage = 'Erreur de connexion';

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (err && typeof err === 'object' && 'status' in err && err.status === 400) {
        errorMessage = 'Informations d\'identification invalides';
      }

      setError(errorMessage);
    }
  };

  return (
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

      <Link to="/forgot-password" className='text-indigo-600 hover:text-indigo-500 font-semibold'>Mot de passe oublié ?</Link>

      <Button type="submit" variant="primary" className="w-full">
        Se connecter
      </Button>

      <p className="mt-2 text-center text-sm text-gray-600">
          Nouveau sur StartUpHub ?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Inscrivez-vous
          </Link>
        </p>
    </form>
  );
}