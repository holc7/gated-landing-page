import React from "react";
import { Loader2 } from "lucide-react";
import * as styles from "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      children,
      fullWidth = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const combinedClassName = [
      styles.baseButton,
      styles.buttonVariants[variant],
      styles.buttonSizes[size],
      fullWidth && { width: "100%" },
      className,
    ]
      .filter(Boolean)
      .join(" ");

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
            className={styles.loadingSpinner}
            size={size === "sm" ? 14 : size === "md" ? 16 : 18}
            aria-hidden="true"
          />
        )}
        <span style={{ opacity: loading ? 0.7 : 1 }}>{children}</span>
        {loading && <span className="visually-hidden">Loading...</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
