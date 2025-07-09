import { style, globalStyle } from "@vanilla-extract/css";

export const landingWrapper = style({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  fontFamily: "Segoe UI, Arial, sans-serif",
  overflow: "hidden",
});

export const dottedBg = style({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  backgroundImage:
    "radial-gradient(rgba(0, 120, 212, 0.08) 1px, transparent 1px)",
  backgroundSize: "20px 20px",
});

export const main = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  position: "relative",
  textAlign: "center",
  padding: "0 16px",
});

export const headline = style({
  fontFamily: "DM Sans, Segoe UI, Arial, sans-serif",
  fontWeight: 600,
  fontSize: "96px",
  lineHeight: "115px",
  marginBottom: "32px",
  letterSpacing: "-2%",
  textAlign: "center",
  color: "#181D27",
  maxWidth: "1200px",
});

export const subheadline = style({
  fontFamily: "DM Sans, Segoe UI, Arial, sans-serif",
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "40px",
  marginBottom: "32px",
  letterSpacing: "0",
  color: "#181D27",
  textAlign: "center",
  maxWidth: "800px",
});

export const ctaButton = style({
  background: "#2196f3",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 32px",
  fontWeight: 500,
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "background 0.2s",
  ":hover": {
    background: "#1769aa",
  },
});

// Base responsive styles
globalStyle(`.${landingWrapper}`, {
  fontSize: "16px",
});

// Tablet styles (768px and below)
globalStyle("@media (max-width: 768px)", {
  [`.${headline}`]: {
    fontSize: "64px",
    lineHeight: "72px",
    marginBottom: "24px",
    maxWidth: "90%",
  },
  [`.${subheadline}`]: {
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "24px",
    maxWidth: "90%",
  },
  [`.${main}`]: {
    padding: "0 24px",
  },
  [`.${ctaButton}`]: {
    padding: "14px 28px",
    fontSize: "1rem",
  },
});

// Mobile styles (600px and below)
globalStyle("@media (max-width: 600px)", {
  [`.${headline}`]: {
    fontSize: "48px",
    lineHeight: "56px",
    marginBottom: "20px",
    maxWidth: "95%",
  },
  [`.${subheadline}`]: {
    fontSize: "20px",
    lineHeight: "28px",
    marginBottom: "20px",
    maxWidth: "95%",
  },
  [`.${main}`]: {
    padding: "0 16px",
  },
  [`.${ctaButton}`]: {
    padding: "12px 24px",
    fontSize: "0.95rem",
    width: "100%",
    maxWidth: "280px",
  },
});

// Small mobile styles (480px and below)
globalStyle("@media (max-width: 480px)", {
  [`.${headline}`]: {
    fontSize: "36px",
    lineHeight: "44px",
    marginBottom: "16px",
  },
  [`.${subheadline}`]: {
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "16px",
  },
  [`.${main}`]: {
    padding: "0 12px",
  },
  [`.${ctaButton}`]: {
    padding: "12px 20px",
    fontSize: "0.9rem",
  },
  [`.${dottedBg}`]: {
    backgroundSize: "15px 15px",
  },
});

// Extra small mobile (360px and below)
globalStyle("@media (max-width: 360px)", {
  [`.${headline}`]: {
    fontSize: "32px",
    lineHeight: "38px",
  },
  [`.${subheadline}`]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
  [`.${main}`]: {
    padding: "0 8px",
  },
});
