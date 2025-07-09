import React, { useEffect, useRef, useId } from 'react';
import { AlertCircle } from 'lucide-react';

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
    
    const baseStyles = `
      w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 
      rounded-md transition-colors outline-none placeholder:text-gray-400 
      focus:border-blue-500 focus:shadow-[0_0_0_3px_rgb(59_130_246_/_0.1)] 
      disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
      disabled:resize-none min-h-[120px] font-inherit
    `;

    const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgb(239_68_68_/_0.1)]' : '';
    const resizeStyles = autoResize ? 'resize-none overflow-hidden' : 'resize-y';

    const combinedClassName = [
      baseStyles,
      errorStyles,
      resizeStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ');

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
        
        {showCharacterCount && (maxLength || currentLength > 0) && (
          <div 
            className={`mt-1 text-sm text-right ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}
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