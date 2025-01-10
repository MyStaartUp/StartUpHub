import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

export function ProfileTypePage() {
  const navigate = useNavigate();

  const handleProfileSelect = (type: 'entrepreneur' | 'mentor') => {
    // Stocker le type de profil
    localStorage.setItem('profileType', type);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Sélectionner le type de profil
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Êtes-vous un entrepreneur ou un mentor ?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProfileSelect('entrepreneur')}>
            <div className="p-6">
              <div className="h-48 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrepreneur</h3>
              <p className="text-gray-600">Vous possédez une entreprise ou avez une idée innovante</p>
            </div>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProfileSelect('mentor')}>
            <div className="p-6">
              <div className="h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentor</h3>
              <p className="text-gray-600">Vous souhaitez partager votre expertise et guider les entrepreneurs</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}