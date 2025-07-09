import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "4rem 0",
  backgroundColor: "#f6fbff",
  backgroundImage: `
    linear-gradient(to right, #f7fbff 0%, #f8fcff 15%, transparent 35%, transparent 65%, #f8fcff 85%, #f5faff 100%),
    radial-gradient(circle, #c3e5fb 2.5px, transparent 2.5px)
  `,
  backgroundSize: "100% 100%, 40px 40px",
});

export const sectionContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "3rem",
  maxWidth: "1184px",
  margin: "0 auto",
  paddingLeft: "1.5rem",
  paddingRight: "1rem",
  width: "100%",
});

export const leftContent = style({
  flex: 1,
});

export const title = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "72px",
  fontWeight: 600, // SemiBold
  lineHeight: "80px",
  letterSpacing: "-0.02em", // -2%
  marginBottom: "24px", // ✅ Reduced space between title and description
});

export const description = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "24px", // ✅ Updated from 20px
  fontWeight: 500, // ✅ Medium weight
  lineHeight: "100%", // ✅ 100% line height
  letterSpacing: "0", // ✅ 0% letter spacing
  marginBottom: "32px", // ✅ Paragraph spacing from Figma
});

export const stepsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const stepItem = style({
  marginBottom: "24px",
  padding: "16px",
  border: "1px solid #b3b3ff",
  borderRadius: "12px",
  background: "#fff",

  ":last-child": {
    marginBottom: 0,
  },
});

export const stepNumber = style({
  fontSize: "32px",
  fontWeight: 700,
  color: "#b3b3ff",
  float: "left",
  marginRight: "16px",
});

export const stepContent = style({
  overflow: "hidden",
});

export const stepTitle = style({
  fontWeight: 600,
  fontSize: "20px",
});

export const stepDescription = style({
  fontSize: "16px",
});

export const clearFloat = style({
  clear: "both",
});
