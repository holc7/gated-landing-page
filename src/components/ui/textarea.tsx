import React, { useEffect, useRef, useId } from 'react';
import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { AlertCircle } from 'lucide-react';

const textareaContainer = style({
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

const textareaWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
});

const baseTextarea = style({
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
  resize: 'vertical',
  fontFamily: 'inherit',
  minHeight: '120px',
  
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
    resize: 'none',
  },
});

const textareaVariants = styleVariants({
  default: {},
  error: {
    borderColor: vars.colors.error[500],
    
    ':focus': {
      borderColor: vars.colors.error[500],
      boxShadow: `0 0 0 3px ${vars.colors.error[100]}`,
    },
  },
  autoResize: {
    resize: 'none',
    overflow: 'hidden',
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

const characterCount = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.gray[500],
  marginTop: vars.spacing.xs,
  textAlign: 'right',
});

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  autoResize?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    label, 
    error, 
    helperText, 
    required = false, 
    fullWidth = true,
    autoResize = false,
    showCharacterCount = false,
    maxLength,
    id,
    className,
    value,
    onChange,
    ...props 
  }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    
    // Auto-resize functionality
    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value, autoResize]);
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
      
      onChange?.(e);
    };
    
    const combinedClassName = [
      baseTextarea,
      textareaVariants[error ? 'error' : autoResize ? 'autoResize' : 'default'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Combine refs
    const combinedRef = (node: HTMLTextAreaElement | null) => {
      if (textareaRef) {
        textareaRef.current = node;
      }
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const currentLength = typeof value === 'string' ? value.length : 0;
    const isOverLimit = maxLength && currentLength > maxLength;

    return (
      <div 
        className={textareaContainer}
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
        
        <div className={textareaWrapper}>
          <textarea
            ref={combinedRef}
            id={inputId}
            className={combinedClassName}
            required={required}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
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
        
        {showCharacterCount && (maxLength || currentLength > 0) && (
          <div 
            className={characterCount}
            style={{ color: isOverLimit ? vars.colors.error[500] : vars.colors.gray[500] }}
          >
            {currentLength}
            {maxLength && `/${maxLength}`}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export type { TextareaProps };