import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    children, 
    fullWidth = false,
    disabled,
    className,
    ...props 
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-medium rounded-md border-0 cursor-pointer 
      transition-all duration-200 outline-none relative focus-visible:outline-2 
      focus-visible:outline-blue-500 focus-visible:outline-offset-2 disabled:opacity-50 
      disabled:cursor-not-allowed disabled:pointer-events-none active:translate-y-px
    `;

    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
      outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 active:bg-blue-100',
    };

    const sizeStyles = {
      sm: 'text-sm px-4 py-2 min-h-9',
      md: 'text-base px-6 py-3 min-h-11',
      lg: 'text-lg px-8 py-4 min-h-13',
    };

    const combinedClassName = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 
            className="animate-spin" 
            size={size === 'sm' ? 14 : size === 'md' ? 16 : 18}
            aria-hidden="true"
          />
        )}
        <span style={{ opacity: loading ? 0.7 : 1 }}>
          {children}
        </span>
        {loading && <span className="sr-only">Loading...</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };