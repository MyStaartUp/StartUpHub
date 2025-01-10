export type AlertType = 'success' | 'danger' | 'warning';

export type AlertProps = {
  message: string;
  type: AlertType;
};

export const Alert = ({ message, type }: AlertProps) => {
  const backgroundColor = {
    success: 'bg-green-50',
    danger: 'bg-red-50',
    warning: 'bg-yellow-50',
  };

  const textColor = {
    success: 'text-green-700',
    danger: 'text-red-700',
    warning: 'text-yellow-700',
  };

  return (
    <div className={`${backgroundColor[type]} ${textColor[type]} p-4 rounded-md`}>
      {message}
    </div>
  );
};