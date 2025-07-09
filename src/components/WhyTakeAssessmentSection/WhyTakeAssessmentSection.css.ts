// WhyTakeAssessmentSection.css.ts (Full File)

import { style } from "@vanilla-extract/css";

// ... (all the styles from before, from section to cardTitleSingleLine) ...

export const section = style({
  padding: "6rem 0",
  backgroundColor: "#ffffff",
});

export const container = style({
  maxWidth: "1184px",
  margin: "0 auto",
  paddingLeft: "1.5rem",
  paddingRight: "1rem",
  textAlign: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "72px",
  fontWeight: 600,
  lineHeight: "80px",
  letterSpacing: "-0.02em",
  color: "#000000",
  marginBottom: "24px",
});

export const description = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "1.4",
  color: "#333333",
  marginBottom: "72px",
  maxWidth: "800px",
  margin: "0 auto 72px auto",
});

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  maxWidth: "1000px",
  margin: "0 auto",
});

export const card = style({
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "32px 24px",
  textAlign: "center",
  position: "relative",
  transition: "all 0.3s ease",

  selectors: {
    "&:hover": {
      borderColor: "#0BA5EC",
      boxShadow: "0 4px 20px rgba(11, 165, 236, 0.1)",
    },
  },
});

export const cardHighlighted = style({
  borderColor: "#0BA5EC",
  boxShadow: "0 4px 20px rgba(11, 165, 236, 0.15)",
});

export const iconContainer = style({
  width: "60px",
  height: "60px",
  margin: "0 auto 24px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#f0f9ff",
});

export const icon = style({
  width: "32px",
  height: "32px",
  color: "#0BA5EC",
});

export const cardPlus = style({
  position: "absolute",
  bottom: "24px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const plusIcon = style({
  width: "16px",
  height: "16px",
  color: "#0BA5EC",
});

export const cardTitle = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "20px",
  fontWeight: 600,
  color: "#000000",
  marginBottom: "16px",
  lineHeight: "1.3",
});

export const cardDescription = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#6b7280",
  lineHeight: "1.5",
});

export const cardCollapsed = style({
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "24px",
  textAlign: "left",
  position: "relative",
  transition: "all 0.3s ease",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const cardPlusLeft = style({
  position: "absolute",
  bottom: "70px",
  left: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const plusIconLeft = style({
  width: "16px",
  height: "16px",
  color: "#0BA5EC",
});

export const cardTitleSingleLine = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "20px",
  fontWeight: 600,
  color: "#000000",
  lineHeight: "1.3",
  margin: 0,
  whiteSpace: "nowrap",
  textAlign: "left",
});

// ✅ NEW STYLE for positioning the SVG icon.
export const svgIconOnCard = style({
  position: "absolute",
  top: "24px",
  left: "24px",
});

// You can now delete the old `staticIconOnCard` style, as it's no longer used.
