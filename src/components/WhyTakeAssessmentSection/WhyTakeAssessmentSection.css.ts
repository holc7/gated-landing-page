// WhyTakeAssessmentSection.css.ts

import { style, globalStyle } from "@vanilla-extract/css";

export const section = style({
  padding: "2rem 0 6rem 0",
  background: "linear-gradient(to bottom, #ffffff 0%, #f3faff 100%)", // ✅ GRADIENT: WHITE TOP TO LIGHT BLUE BOTTOM
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
  color: "#181D27",
  marginBottom: "24px",
});

export const description = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "1.4",
  color: "#181D27",
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
      transform: "scale(1.02)",
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
  color: "#a0d1f1", // ✅ CHANGED TO LIGHT BLUE
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
  color: "#70b4ea", // ✅ CHANGED TO MEDIUM BLUE
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
  color: "#535862",
  lineHeight: "1.5",
});

export const lucideIcon = style({
  width: "32px",
  height: "32px",
  color: "#0BA5EC",
});

// Mobile responsive styles
globalStyle("@media (max-width: 768px)", {
  [`.${section}`]: {
    padding: "1.5rem 0 4rem 0",
  },
  [`.${container}`]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  [`.${title}`]: {
    fontSize: "48px",
    lineHeight: "56px",
    marginBottom: "20px",
  },
  [`.${description}`]: {
    fontSize: "20px",
    lineHeight: "1.4",
    marginBottom: "48px",
    margin: "0 auto 48px auto",
  },
  [`.${cardsGrid}`]: {
    gridTemplateColumns: "1fr",
    gap: "24px",
    maxWidth: "500px",
  },
  [`.${card}`]: {
    minHeight: "280px",
  },
  [`.${collapsedLayout}`]: {
    padding: "20px",
  },
  [`.${expandedLayout}`]: {
    padding: "24px 20px",
  },
  [`.${svgIconCollapsed}`]: {
    top: "20px",
    left: "20px",
    width: "40px",
    height: "40px",
  },
  [`.${plusIconCollapsed}`]: {
    bottom: "60px",
    left: "20px",
    width: "20px",
    height: "20px",
  },
  [`.${titleCollapsed}`]: {
    fontSize: "18px",
    bottom: "20px",
    left: "20px",
    right: "20px",
  },
  [`.${svgIconExpanded}`]: {
    width: "40px",
    height: "40px",
  },
  [`.${closeIconExpanded}`]: {
    width: "20px",
    height: "20px",
  },
  [`.${cardTitle}`]: {
    fontSize: "18px",
  },
  [`.${cardDescription}`]: {
    fontSize: "14px",
  },
});

globalStyle("@media (max-width: 600px)", {
  [`.${section}`]: {
    padding: "1rem 0 3rem 0",
  },
  [`.${container}`]: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  [`.${title}`]: {
    fontSize: "36px",
    lineHeight: "44px",
    marginBottom: "16px",
  },
  [`.${description}`]: {
    fontSize: "18px",
    lineHeight: "1.4",
    marginBottom: "36px",
    margin: "0 auto 36px auto",
  },
  [`.${cardsGrid}`]: {
    gap: "20px",
    maxWidth: "400px",
  },
  [`.${card}`]: {
    minHeight: "240px",
    borderRadius: "12px",
  },
  [`.${collapsedLayout}`]: {
    padding: "16px",
  },
  [`.${expandedLayout}`]: {
    padding: "20px 16px",
  },
  [`.${svgIconCollapsed}`]: {
    top: "16px",
    left: "16px",
    width: "35px",
    height: "35px",
  },
  [`.${plusIconCollapsed}`]: {
    bottom: "50px",
    left: "16px",
    width: "18px",
    height: "18px",
  },
  [`.${titleCollapsed}`]: {
    fontSize: "16px",
    bottom: "16px",
    left: "16px",
    right: "16px",
  },
  [`.${svgIconExpanded}`]: {
    width: "35px",
    height: "35px",
  },
  [`.${closeIconExpanded}`]: {
    width: "18px",
    height: "18px",
  },
  [`.${cardTitle}`]: {
    fontSize: "16px",
    marginBottom: "12px",
  },
  [`.${cardDescription}`]: {
    fontSize: "13px",
  },
});

globalStyle("@media (max-width: 480px)", {
  [`.${section}`]: {
    padding: "0.75rem 0 2rem 0",
  },
  [`.${container}`]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [`.${title}`]: {
    fontSize: "28px",
    lineHeight: "34px",
    marginBottom: "12px",
  },
  [`.${description}`]: {
    fontSize: "16px",
    lineHeight: "1.4",
    marginBottom: "28px",
    margin: "0 auto 28px auto",
  },
  [`.${cardsGrid}`]: {
    gap: "16px",
    maxWidth: "100%",
  },
  [`.${card}`]: {
    minHeight: "200px",
    borderRadius: "10px",
  },
  [`.${collapsedLayout}`]: {
    padding: "12px",
  },
  [`.${expandedLayout}`]: {
    padding: "16px 12px",
  },
  [`.${svgIconCollapsed}`]: {
    top: "12px",
    left: "12px",
    width: "30px",
    height: "30px",
  },
  [`.${plusIconCollapsed}`]: {
    bottom: "40px",
    left: "12px",
    width: "16px",
    height: "16px",
  },
  [`.${titleCollapsed}`]: {
    fontSize: "14px",
    bottom: "12px",
    left: "12px",
    right: "12px",
    whiteSpace: "normal",
  },
  [`.${svgIconExpanded}`]: {
    width: "30px",
    height: "30px",
  },
  [`.${closeIconExpanded}`]: {
    width: "16px",
    height: "16px",
    marginBottom: "12px",
  },
  [`.${cardTitle}`]: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  [`.${cardDescription}`]: {
    fontSize: "12px",
  },
});
