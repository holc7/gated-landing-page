import { style, globalStyle } from "@vanilla-extract/css";

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

// Mobile responsive styles
globalStyle("@media (max-width: 768px)", {
  [`.${section}`]: {
    padding: "3rem 0",
    backgroundSize: "100% 100%, 30px 30px",
  },
  [`.${sectionContainer}`]: {
    flexDirection: "column",
    gap: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  [`.${leftContent}`]: {
    textAlign: "center",
  },
  [`.${title}`]: {
    fontSize: "48px",
    lineHeight: "56px",
    marginBottom: "20px",
  },
  [`.${description}`]: {
    fontSize: "20px",
    lineHeight: "1.3",
    marginBottom: "28px",
  },
  [`.${stepsList}`]: {
    textAlign: "left",
  },
  [`.${stepItem}`]: {
    maxWidth: "100%",
    padding: "16px",
  },
  [`.${stepNumber}`]: {
    fontSize: "80px",
    width: "80px",
  },
  [`.${stepNumber01}`]: {
    left: "-35px",
    top: "20px",
  },
  [`.${stepNumber02}`]: {
    left: "-35px",
    top: "25px",
  },
  [`.${stepNumber03}`]: {
    left: "-30px",
    top: "30px",
  },
  [`.${stepContent}`]: {
    paddingLeft: "60px",
  },
});

globalStyle("@media (max-width: 600px)", {
  [`.${section}`]: {
    padding: "2rem 0",
    backgroundSize: "100% 100%, 25px 25px",
  },
  [`.${sectionContainer}`]: {
    gap: "1.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  [`.${leftContent}`]: {
    textAlign: "center",
  },
  [`.${title}`]: {
    fontSize: "36px",
    lineHeight: "44px",
    marginBottom: "16px",
  },
  [`.${description}`]: {
    fontSize: "18px",
    lineHeight: "1.4",
    marginBottom: "24px",
  },
  [`.${stepsList}`]: {
    textAlign: "left",
  },
  [`.${stepItem}`]: {
    padding: "12px",
  },
  [`.${stepNumber}`]: {
    fontSize: "60px",
    width: "60px",
  },
  [`.${stepNumber01}`]: {
    left: "-25px",
    top: "15px",
  },
  [`.${stepNumber02}`]: {
    left: "-25px",
    top: "18px",
  },
  [`.${stepNumber03}`]: {
    left: "-22px",
    top: "22px",
  },
  [`.${stepContent}`]: {
    paddingLeft: "45px",
  },
  [`.${stepTitle}`]: {
    fontSize: "18px",
  },
  [`.${stepDescription}`]: {
    fontSize: "14px",
  },
});

globalStyle("@media (max-width: 480px)", {
  [`.${section}`]: {
    padding: "1.5rem 0",
    backgroundSize: "100% 100%, 20px 20px",
  },
  [`.${sectionContainer}`]: {
    gap: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [`.${leftContent}`]: {
    textAlign: "center",
  },
  [`.${title}`]: {
    fontSize: "28px",
    lineHeight: "34px",
    marginBottom: "12px",
  },
  [`.${description}`]: {
    fontSize: "16px",
    lineHeight: "1.4",
    marginBottom: "20px",
  },
  [`.${stepsList}`]: {
    textAlign: "left",
  },
  [`.${stepItem}`]: {
    padding: "10px",
  },
  [`.${stepNumber}`]: {
    fontSize: "45px",
    width: "45px",
  },
  [`.${stepNumber01}`]: {
    left: "-18px",
    top: "10px",
  },
  [`.${stepNumber02}`]: {
    left: "-18px",
    top: "12px",
  },
  [`.${stepNumber03}`]: {
    left: "-16px",
    top: "15px",
  },
  [`.${stepContent}`]: {
    paddingLeft: "35px",
  },
  [`.${stepTitle}`]: {
    fontSize: "16px",
    marginBottom: "6px",
  },
  [`.${stepDescription}`]: {
    fontSize: "13px",
  },
});
