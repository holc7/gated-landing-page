import React, { useId } from "react";
import { AlertCircle } from "lucide-react";
import * as styles from "./Input.css";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      fullWidth = true,
      id,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const combinedClassName = [
      styles.baseInput,
      styles.inputVariants[error ? "error" : "default"],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={styles.inputContainer}
        style={{ width: fullWidth ? "100%" : "auto" }}
      >
        {label && (
          <label htmlFor={inputId} className={styles.labelStyle}>
            {label}
            {required && (
              <span className={styles.requiredIndicator} aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            className={combinedClassName}
            required={required}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              [errorId, helperId].filter(Boolean).join(" ") || undefined
            }
            {...props}
          />
        </div>

        {error && (
          <div className={styles.errorMessage} id={errorId} role="alert">
            <AlertCircle size={16} aria-hidden="true" />
            {error}
          </div>
        )}

        {helperText && !error && (
          <div className={styles.helpText} id={helperId}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
