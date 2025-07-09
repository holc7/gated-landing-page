import React, { useId } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    required = false, 
    fullWidth = true,
    id,
    className,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    
    const baseStyles = `
      w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 
      rounded-md transition-colors outline-none placeholder:text-gray-400 
      focus:border-blue-500 focus:shadow-[0_0_0_3px_rgb(59_130_246_/_0.1)] 
      disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
    `;

    const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgb(239_68_68_/_0.1)]' : '';

    const combinedClassName = [
      baseStyles,
      errorStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={combinedClassName}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[errorId, helperId].filter(Boolean).join(' ') || undefined}
          {...props}
        />
        
        {error && (
          <div className="flex items-center gap-1 mt-1 text-sm text-red-600" id={errorId} role="alert">
            <AlertCircle size={16} aria-hidden="true" />
            {error}
          </div>
        )}
        
        {helperText && !error && (
          <div className="mt-1 text-sm text-gray-600" id={helperId}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };