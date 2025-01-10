import { validatePasswordStrength } from '@/utils/password-validation';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const { errors } = validatePasswordStrength(password);
  const strength = password ? Math.max(0, 100 - (errors.length * 20)) : 0;

  const getStrengthColor = () => {
    if (strength >= 100) return 'bg-green-500';
    if (strength >= 80) return 'bg-green-400';
    if (strength >= 60) return 'bg-yellow-500';
    if (strength >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-2">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor()} transition-all duration-300`}
          style={{ width: `${strength}%` }}
        />
      </div>
      {password && (
        <ul className="text-xs space-y-1">
          {errors.map((error, index) => (
            <li key={index} className="text-red-600">
              • {error}
            </li>
          ))}
          {errors.length === 0 && (
            <li className="text-green-600">
              • Mot de passe valide
            </li>
          )}
        </ul>
      )}
    </div>
  );
}