import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@/components/common';
import { Card } from '@/components/common/Card';
import { LogIn, Mail } from 'lucide-react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Reinitialiser votre mot de passe
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-6">
          <Input
            id='email'
            type='email'
            label='Email'
            value={email}
            icon={<Mail />}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Button type="submit" variant="primary" className="w-full">
            Envoyer le code
          </Button>

          <p className="mt-2 text-center text-sm text-gray-600">
            Vous vous souvenez de votre mot de passe ?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Connectez-vous
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}