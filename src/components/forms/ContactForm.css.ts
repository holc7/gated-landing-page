import { style, globalStyle } from "@vanilla-extract/css";

export const formContainer = style({
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
  padding: "32px",
  flex: 1,
  maxWidth: "450px",
  marginTop: "50px",
});

export const iconContainer = style({
  display: "flex",
  justifyContent: "flex-start", // ✅ Left align instead of center
  marginBottom: "24px",
});

export const icon = style({
  width: "48px",
  height: "48px",
  color: "#0BA5EC",
});

export const title = style({
  fontSize: "22px",
  fontWeight: 700,
  color: "#000000",
  marginBottom: "16px",
  lineHeight: "1.3",
});

export const urgencyText = style({
  color: "#dc2626",
  fontSize: "14px",
  marginBottom: "24px",
  fontWeight: 500,
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
export const leftAlignedButton = style({
  alignSelf: "flex-start",
});
export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  minWidth: 0, // ✅ Prevents flex shrinking issues
});

export const fieldRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // ✅ Equal width columns
  gap: "12px",
  width: "100%", // ✅ Full width
});

export const label = style({
  fontSize: "14px",
  fontWeight: 500,
  color: "#414651",
});

export const input = style({
  padding: "6px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "14px",
  backgroundColor: "#fff",
  transition: "border-color 0.2s ease",
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",

  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: "#0BA5EC",
      boxShadow: "0 0 0 3px rgba(11, 165, 236, 0.1)",
    },

    "&::placeholder": {
      color: "#9ca3af",
    },

    "&:disabled": {
      backgroundColor: "#f9fafb",
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
});

export const inputError = style({
  borderColor: "#dc2626",
  boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
});

export const errorText = style({
  fontSize: "12px",
  color: "#dc2626",
  marginTop: "4px",
});

export const message = style({
  padding: "12px",
  borderRadius: "8px",
  fontSize: "14px",
  backgroundColor: "#f0f9ff",
  border: "1px solid #0BA5EC",
  color: "#0369a1",
});

export const privacyText = style({
  fontSize: "12px",
  color: "#414651",
  lineHeight: "1.4",
  marginTop: "8px",
});

// Tablet responsive styles
globalStyle("@media (max-width: 768px)", {
  [`.${formContainer}`]: {
    margin: "0 auto",
    marginTop: "50px",
  },
});
