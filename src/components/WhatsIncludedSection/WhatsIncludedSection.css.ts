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
  fontWeight: 600,
  lineHeight: "80px",
  letterSpacing: "-0.02em",
  marginBottom: "24px",
});

export const description = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "100%",
  letterSpacing: "0",
  marginBottom: "32px",
});

export const stepsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const stepItem = style({
  overflow: "hidden",
  marginBottom: "16px",
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "100%",
  position: "relative",

  ":last-child": {
    marginBottom: 0,
  },
});

export const stepNumber = style({
  fontSize: "125px",
  fontWeight: 600,
  color: "#e5f2fd",
  lineHeight: "1",
  position: "absolute",
  width: "120px",
  textAlign: "center",
  zIndex: 1,
  pointerEvents: "none",
});

export const stepNumber01 = style({
  left: "-55px",
  top: "30px",
});

export const stepNumber02 = style({
  left: "-55px",
  top: "35px",
});

export const stepNumber03 = style({
  left: "-50px",
  top: "45px",
});
export const stepContent = style({
  flex: 1,
  paddingLeft: "100px",
});

export const stepTitle = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  color: "#000000",
  marginBottom: "8px",
});

export const stepDescription = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "16px",
  color: "#414651",
  lineHeight: "1.5",
});

export const clearFloat = style({});
