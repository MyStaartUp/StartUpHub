import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

export function LanguageSelectPage() {
  const navigate = useNavigate();

  const handleLanguageSelect = () => {
    navigate('/profile-type');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">Langue préférée</h1>
        <p className="text-gray-600 text-center mb-8">
          Veuillez sélectionner la langue dans laquelle vous êtes le plus à l'aise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'English', label: 'Hello Africa', code: 'EN' },
            { name: 'Français', label: 'Bonjour l\'Afrique', code: 'FR' },
            { name: 'العربية', label: 'مرحباً أفريقيا', code: 'AR' },
            { name: 'Português', label: 'Olá África', code: 'PT' }
          ].map((lang) => (
            <Card key={lang.code} className="cursor-pointer hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-2xl
                  ${lang.code === 'EN' ? 'bg-blue-600' :
                    lang.code === 'FR' ? 'bg-red-600' :
                    lang.code === 'AR' ? 'bg-green-600' :
                    'bg-yellow-600'}`}>
                  {lang.code}
                </div>
                <h3 className="font-semibold mb-1">{lang.label}</h3>
                <p className="text-gray-600">{lang.name}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleLanguageSelect}
            variant="primary"
            size="lg"
          >
            Continuer
          </Button>
        </div>
      </div>
    </div>
  );
}