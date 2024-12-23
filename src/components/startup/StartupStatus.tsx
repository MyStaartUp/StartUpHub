import React from 'react';
import { cn } from '@/lib/utils';

interface StartupStatusProps {
  status: string;
  className?: string;
}

export function StartupStatus({ status, className }: StartupStatusProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
        {
          'bg-green-100 text-green-800': status === 'En croissance',
          'bg-yellow-100 text-yellow-800': status === 'En recherche de fonds',
          'bg-blue-100 text-blue-800': status === 'Nouveau',
        },
        className
      )}
    >
      {status}
    </span>
  );
}