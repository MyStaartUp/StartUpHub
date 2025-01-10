import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  error?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  prefix,
  icon,
  className = '',
  required,
  ...props
}, ref) => {
  const inputId = id;

  return (
    <div className="space-y-1">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {prefix}
          </span>
        )}
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 text-gray-700 transition duration-200 ease-in-out hover:border-indigo-500 focus:border-indigo-500 focus:outline-none ${
            prefix ? 'pl-7' : ''
          } ${icon ? 'pl-12' : ''} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
});