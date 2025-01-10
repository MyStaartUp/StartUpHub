import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth/AuthContext';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/ui/input';
import { Rocket } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="w-full md:w-[40%] p-8 flex items-center justify-center bg-white rounded-r-[40px] shadow-2xl relative z-10">
        <Card className="w-full max-w-md border-none shadow-none">
          <div className="p-6">
            <div className="flex justify-center mb-8">
              <Rocket className="h-12 w-12 text-indigo-600" />
            </div>

            {error && (
              <div className="mb-6 p-4 text-sm text-red-600 bg-red-50 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl"
                  required
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-500 text-sm">
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
              >
                Se connecter
              </Button>

              <div className="text-center text-sm text-gray-600">
                Pas encore de compte ?{" "}
                <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  S'inscrire
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </div>

      {/* Right side - Decorative background */}
      <div className="hidden md:block w-[60%] bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692')] bg-center bg-cover opacity-10"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-12">
          <h1 className="text-4xl font-bold mb-6">Bienvenue sur StartUpHub</h1>
          <p className="text-xl text-center max-w-lg">
            Connectez-vous avec des mentors, développez votre startup et rejoignez une communauté d'entrepreneurs qui construisent l'avenir.
          </p>
        </div>
      </div>
    </div>
  );
}