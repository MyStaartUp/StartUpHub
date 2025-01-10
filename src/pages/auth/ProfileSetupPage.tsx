import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Briefcase, Users, LineChart, Book, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { cn } from '@/lib/utils';

interface ProfileSetupStep {
  title: string;
  description: string;
  options: {
    id: string;
    title: string;
    description: string;
    icon: typeof Briefcase;
    color: string;
  }[];
}

const steps: ProfileSetupStep[] = [
  {
    title: "Votre domaine d'expertise",
    description: "Sélectionnez votre principal domaine d'expertise",
    options: [
      {
        id: 'tech',
        title: 'Technologie',
        description: 'Développement, IA, Cloud...',
        icon: Briefcase,
        color: 'bg-blue-600'
      },
      {
        id: 'business',
        title: 'Business',
        description: 'Marketing, Ventes, Stratégie...',
        icon: LineChart,
        color: 'bg-green-600'
      },
      {
        id: 'finance',
        title: 'Finance',
        description: 'Investissement, Comptabilité...',
        icon: LineChart,
        color: 'bg-indigo-600'
      },
      {
        id: 'other',
        title: 'Autre',
        description: 'Autre domaine d\'expertise',
        icon: Book,
        color: 'bg-purple-600'
      }
    ]
  },
  {
    title: "Type de profil",
    description: "Comment souhaitez-vous participer à l'écosystème ?",
    options: [
      {
        id: 'startup',
        title: 'Porteur de projet',
        description: 'Vous avez un projet innovant',
        icon: Briefcase,
        color: 'bg-red-600'
      },
      {
        id: 'investor',
        title: 'Investisseur',
        description: 'Vous souhaitez investir',
        icon: LineChart,
        color: 'bg-yellow-600'
      },
      {
        id: 'mentor',
        title: 'Mentor',
        description: 'Vous souhaitez accompagner',
        icon: Users,
        color: 'bg-green-600'
      },
      {
        id: 'observer',
        title: 'Observateur',
        description: 'Vous souhaitez découvrir',
        icon: Book,
        color: 'bg-blue-600'
      }
    ]
  }
];

export function ProfileSetupPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});

  const handleSelection = (optionId: string) => {
    setSelections((prev) => ({
      ...prev,
      [currentStep]: optionId,
    }));
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        navigate('/dashboard');
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du profil:', error);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center",
                  index < steps.length - 1 && "flex-1"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    index === currentStep
                      ? "bg-indigo-600 text-white"
                      : index < currentStep
                      ? "bg-indigo-200 text-indigo-700"
                      : "bg-gray-200 text-gray-400"
                  )}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-2",
                      index < currentStep
                        ? "bg-indigo-600"
                        : "bg-gray-200"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {currentStepData.title}
          </h1>
          <p className="text-gray-600">
            {currentStepData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {currentStepData.options.map((option) => {
            const isSelected = selections[currentStep] === option.id;
            return (
              <Card 
                key={option.id}
                onClick={() => handleSelection(option.id)}
                className={cn(
                  "cursor-pointer transition-all duration-200 transform hover:scale-105",
                  isSelected
                    ? "ring-2 ring-indigo-600 shadow-lg"
                    : "hover:shadow-lg"
                )}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white",
                    option.color,
                    isSelected && "ring-4 ring-indigo-200"
                  )}>
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          {currentStep > 0 ? (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour</span>
            </Button>
          ) : (
            <div />
          )}
          
          <Button
            onClick={handleNext}
            disabled={!selections[currentStep]}
            className={cn(
              "flex items-center space-x-2",
              selections[currentStep] ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
            )}
          >
            <span>{currentStep === steps.length - 1 ? 'Terminer' : 'Continuer'}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}