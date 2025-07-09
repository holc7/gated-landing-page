import React from "react";
import { Loader2 } from "lucide-react";
import * as styles from "./CtaButton.css";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      children,
      fullWidth = false,
      disabled,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const combinedClassName = [
      styles.baseButton,
      styles.buttonVariants[variant],
      styles.buttonSizes[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const combinedStyle = {
      ...(fullWidth && { width: "100%" }),
      ...style,
    };

    return (
      <button
        ref={ref}
        className={combinedClassName}
        style={combinedStyle}
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

CtaButton.displayName = "CtaButton";

export { CtaButton };
export type { CtaButtonProps };
