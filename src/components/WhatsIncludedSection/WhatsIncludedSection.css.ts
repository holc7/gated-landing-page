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
  marginBottom: "16px", // ✅ Much smaller gap (was 48px)
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",
  backgroundColor: "#ffffff",
  padding: "20px", // ✅ Slightly less padding
  borderRadius: "12px",
  maxWidth: "600px", // ✅ Narrower width
  width: "100%",

  ":last-child": {
    marginBottom: 0,
  },
});

export const stepNumber = style({
  fontSize: "64px",
  fontWeight: 600,
  color: "#E5F0FF", // ✅ Light blue color for the number text
  lineHeight: "1",
  flexShrink: 0,
  width: "80px",
  textAlign: "center",
});

export const stepContent = style({
  flex: 1, // ✅ Take remaining space
});

export const stepTitle = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: 500, // ✅ Medium weight
  fontSize: "20px", // ✅ From Figma specs
  color: "#000000", // ✅ Black color
  marginBottom: "8px",
});

export const stepDescription = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "16px", // ✅ From Figma specs
  color: "#414651", // ✅ Gray color from Figma
  lineHeight: "1.5",
});

export const clearFloat = style({
  // ✅ No longer needed with flexbox
});
