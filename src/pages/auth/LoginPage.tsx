import { LoginForm } from '@/components/auth/LoginForm';
import { Card } from '@/components/common/Card';
import { LogIn } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Accédez à votre espace StartUpHub
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}