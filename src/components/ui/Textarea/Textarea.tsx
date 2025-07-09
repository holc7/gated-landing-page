import React, { useEffect, useRef, useId } from "react";
import { vars } from "@/styles/theme.css";
import { AlertCircle } from "lucide-react";
import * as styles from "./Textarea.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  (
    {
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
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value, autoResize]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }

      onChange?.(e);
    };

    const combinedClassName = [
      styles.baseTextarea,
      styles.textareaVariants[
        error ? "error" : autoResize ? "autoResize" : "default"
      ],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const combinedRef = (node: HTMLTextAreaElement | null) => {
      if (textareaRef) {
        textareaRef.current = node;
      }
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const currentLength = typeof value === "string" ? value.length : 0;
    const isOverLimit = maxLength && currentLength > maxLength;

    return (
      <div
        className={styles.textareaContainer}
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

        <div className={styles.textareaWrapper}>
          <textarea
            ref={combinedRef}
            id={inputId}
            className={combinedClassName}
            required={required}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            aria-invalid={!!error}
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
        {showCharacterCount && maxLength && (
          <div
            className={styles.characterCount}
            style={{ color: isOverLimit ? vars.colors.error[500] : undefined }}
          >
            {currentLength} / {maxLength}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
