import { useState } from 'react';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { RoleSelection } from '@/components/auth/RoleSelection';
import { Card } from '@/components/common/Card';
import { UserPlus } from 'lucide-react';

export function RegisterPage() {
  const [step, setStep] = useState<'form' | 'role'>('form');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  const handleRegistrationSuccess = (uid: string, userEmail: string) => {
    setUserId(uid);
    setEmail(userEmail);
    setStep('role');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <UserPlus className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {step === 'form' ? 'Créer un compte' : 'Choisir votre profil'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {step === 'form' ? (
          <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <RegisterForm onSuccess={handleRegistrationSuccess} />
          </Card>
        ) : (
          <RoleSelection onSelect={async (role) => {
            if (userId) {
              // Mettre à jour le profil avec le rôle sélectionné
              await updateUserProfile(userId, { type: role });
              // Rediriger vers la page appropriée
              const redirectMap = {
                public: '/dashboard',
                startup: '/register-startup',
                investor: '/investor-dashboard'
              };
              window.location.href = redirectMap[role];
            }
          }} />
        )}
      </div>
    </div>
  );
}