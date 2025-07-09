// Styles for WhatWeAssessSection will go here // WhatWeAssessSection.css.ts

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

export const rightContent = style({
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
  color: "#000000",
});

export const description = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "1.4",
  letterSpacing: "0",
  marginBottom: "32px",
  color: "#333333",
});

export const startButton = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  padding: "12px 24px",
  backgroundColor: "#5fa4e6",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",

  ":hover": {
    backgroundColor: "#4a8bc2",
  },
});

export const assessmentList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const assessmentItem = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "24px",

  ":last-child": {
    marginBottom: 0,
  },
});

export const iconContainer = style({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const assessmentText = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  color: "#000000",
  lineHeight: "1.3",
});

export const icon = style({
  width: "24px",
  height: "24px",
  color: "#5fa4e6",
});
