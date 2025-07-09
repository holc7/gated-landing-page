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
  marginBottom: "16px",
  display: "flex",
  alignItems: "center", // ✅ Center align to prevent cutoff
  gap: "16px", // ✅ Smaller gap since number is bigger
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "100%",
  position: "relative", // ✅ For positioning the number

  ":last-child": {
    marginBottom: 0,
  },
});

export const stepNumber = style({
  fontSize: "80px", // ✅ Bigger size
  fontWeight: 600,
  color: "#e5f2fd", // ✅ New color
  lineHeight: "1",
  flexShrink: 0,
  width: "100px", // ✅ Wider to accommodate bigger size
  textAlign: "left", // ✅ Align left
  position: "relative",
  left: "-50px", // ✅ Push more to the left
  top: "40px", // ✅ Push more down
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
