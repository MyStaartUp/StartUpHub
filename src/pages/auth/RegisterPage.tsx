import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Card } from '@/components/common/Card';
import { Rocket } from 'lucide-react';

export function RegisterPage() {
  const navigate = useNavigate();

  const handleRegistrationSuccess = (userId: string, email: string) => {
    // Après l'inscription réussie, rediriger vers la configuration du profil
    navigate('/profile-setup');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration form */}
      <div className="w-full md:w-[40%] p-8 flex items-center justify-center bg-white rounded-r-[40px] shadow-2xl relative z-10">
        <Card className="w-full max-w-md border-none shadow-none">
          <div className="p-6">
            <div className="flex justify-center mb-8">
              <Rocket className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-8">
              Inscrivez-vous pour transformer vos idées en opportunités
            </h2>
            <RegisterForm onSuccess={handleRegistrationSuccess} />
          </div>
        </Card>
      </div>

      {/* Right side - Decorative background */}
      <div className="hidden md:block w-[60%] bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692')] bg-center bg-cover opacity-10"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-12">
          <h1 className="text-4xl font-bold mb-6">Rejoignez StartUpHub</h1>
          <p className="text-xl text-center max-w-lg">
            Créez votre compte et commencez votre aventure entrepreneuriale. Accédez à des ressources exclusives et connectez-vous avec notre communauté.
          </p>
        </div>
      </div>
    </div>
  );
}