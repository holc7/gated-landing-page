import React from "react";
import * as styles from "./CtaButton.css";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    { children, fullWidth = false, disabled, className, style, ...props },
    ref
  ) => {
    const combinedClassName = [styles.baseButton, className]
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
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CtaButton.displayName = "CtaButton";

export { CtaButton };
export type { CtaButtonProps };
