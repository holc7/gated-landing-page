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

export const collapsedIconContainer = style({
  width: "60px",
  height: "60px",
  margin: "0 auto 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  position: "absolute",
  top: "24px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const collapsedIcon = style({
  width: "32px",
  height: "32px",
  color: "#0BA5EC",
});
export const customCircleIcon = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  position: "relative",
  display: "inline-block",

  // Creates the three distinct segments using a conic gradient.
  // One blue segment, two gray segments, with transparent gaps.
  background: `conic-gradient(
    #0BA5EC 0deg 100deg,      /* Blue part */
    transparent 100deg 120deg,
    #e5e7eb 120deg 220deg,    /* Gray part */
    transparent 220deg 240deg,
    #e5e7eb 240deg 340deg,    /* Gray part */
    transparent 340deg 360deg
  )`,

  // The ::before pseudo-element creates the white center hole.
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      // This "inset" creates the ring thickness.
      top: "3px",
      left: "3px",
      right: "3px",
      bottom: "3px",
      // Set this to your page's background color.
      backgroundColor: "#fff",
      borderRadius: "50%",
    },
  },
});