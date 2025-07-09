// WhyTakeAssessmentSection.css.ts

import { style } from "@vanilla-extract/css";

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
  maxWidth: "1140px",
  margin: "0 auto",
});

export const card = style({
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  transition: "all 0.3s ease",
  minHeight: "380px",

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

// === LAYOUT STYLES ===

// ✅ NEW: Layout for the first, "collapsed" card. Uses absolute positioning.
export const collapsedLayout = style({
  position: "relative",
  padding: "24px",
});

// ✅ NEW: Layout for the second, "expanded" card. Uses Flexbox.
export const expandedLayout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "left",
  padding: "32px 24px",
});

// ✅ NEW: Layout for the third, "default" card.
export const defaultLayout = style({
  position: "relative",
  textAlign: "center",
  padding: "32px 24px",
});

// === ELEMENT STYLES ===

// For the "collapsed" card
export const svgIconCollapsed = style({
  position: "absolute",
  top: "24px",
  left: "24px",
});

export const plusIconCollapsed = style({
  position: "absolute",
  bottom: "70px",
  left: "24px",
  width: "24px",
  height: "24px",
  color: "#0BA5EC",
});

export const titleCollapsed = style({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "20px",
  fontWeight: 600,
  position: "absolute",
  bottom: "24px",
  left: "24px",
  right: "24px",
  textAlign: "left",
  whiteSpace: "nowrap",
});

// For the "expanded" card
export const svgIconExpanded = style({
  width: "50px",
  height: "50px",
});

export const closeIconExpanded = style({
  width: "24px",
  height: "24px",
  color: "#0BA5EC",
  marginBottom: "16px",
});

// For the "default" card
export const iconContainerDefault = style({
  width: "60px",
  height: "60px",
  margin: "0 auto 24px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#f0f9ff",
});

export const plusIconDefault = style({
  position: "absolute",
  bottom: "24px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "24px",
  height: "24px",
  color: "#0BA5EC",
});

// Generic text styles used by multiple cards
export const cardTitle = style({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "20px",
  fontWeight: 600,
  color: "#000000",
  marginBottom: "16px",
  lineHeight: "1.3",
});

export const cardDescription = style({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#6b7280",
  lineHeight: "1.5",
});

export const lucideIcon = style({
  width: "32px",
  height: "32px",
  color: "#0BA5EC",
});
