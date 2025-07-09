import React, { useId } from 'react';
import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { AlertCircle } from 'lucide-react';

const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});

const labelStyle = style({
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  color: vars.colors.gray[700],
  lineHeight: vars.typography.lineHeight.tight,
});

const requiredIndicator = style({
  color: vars.colors.error[500],
  marginLeft: vars.spacing.xs,
});

const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const baseInput = style({
  width: '100%',
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
  fontSize: vars.typography.fontSize.base,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.gray[900],
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.borderRadius.md,
  transition: vars.transitions.normal,
  outline: 'none',
  
  '::placeholder': {
    color: vars.colors.gray[400],
  },
  
  ':focus': {
    borderColor: vars.colors.primary[500],
    boxShadow: `0 0 0 3px ${vars.colors.primary[100]}`,
  },
  
  ':disabled': {
    backgroundColor: vars.colors.gray[50],
    color: vars.colors.gray[400],
    cursor: 'not-allowed',
  },
});

const inputVariants = styleVariants({
  default: {},
  error: {
    borderColor: vars.colors.error[500],
    
    ':focus': {
      borderColor: vars.colors.error[500],
      boxShadow: `0 0 0 3px ${vars.colors.error[100]}`,
    },
  },
});

const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.error[600],
  marginTop: vars.spacing.xs,
});

const helpText = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.gray[600],
  marginTop: vars.spacing.xs,
});

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
    
    const combinedClassName = [
      baseInput,
      inputVariants[error ? 'error' : 'default'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div 
        className={inputContainer}
        style={{ width: fullWidth ? '100%' : 'auto' }}
      >
        {label && (
          <label 
            htmlFor={inputId} 
            className={labelStyle}
          >
            {label}
            {required && (
              <span className={requiredIndicator} aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        
        <div className={inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            className={combinedClassName}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={[errorId, helperId].filter(Boolean).join(' ') || undefined}
            {...props}
          />
        </div>
        
        {error && (
          <div className={errorMessage} id={errorId} role="alert">
            <AlertCircle size={16} aria-hidden="true" />
            {error}
          </div>
        )}
        
        {helperText && !error && (
          <div className={helpText} id={helperId}>
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