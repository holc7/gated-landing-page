// WhatWeAssessSection.css.ts

import { style, globalStyle } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "6rem 0",
  backgroundColor: "#ffffff",
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
  backgroundColor: "#fafafa",
  padding: "16px 20px",
  borderRadius: "12px",

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

// Mobile responsive styles
globalStyle("@media (max-width: 768px)", {
  [`.${section}`]: {
    padding: "4rem 0",
  },
  [`.${sectionContainer}`]: {
    flexDirection: "column-reverse",
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
    lineHeight: "1.4",
    marginBottom: "28px",
  },
  [`.${assessmentItem}`]: {
    padding: "14px 16px",
  },
  [`.${assessmentText}`]: {
    fontSize: "18px",
  },
});

globalStyle("@media (max-width: 600px)", {
  [`.${section}`]: {
    padding: "3rem 0",
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
  [`.${assessmentItem}`]: {
    padding: "12px 16px",
    gap: "12px",
  },
  [`.${assessmentText}`]: {
    fontSize: "16px",
  },
  [`.${icon}`]: {
    width: "20px",
    height: "20px",
  },
  [`.${iconContainer}`]: {
    width: "20px",
    height: "20px",
  },
});

globalStyle("@media (max-width: 480px)", {
  [`.${section}`]: {
    padding: "2rem 0",
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
  [`.${assessmentItem}`]: {
    padding: "10px 12px",
    gap: "10px",
    marginBottom: "16px",
  },
  [`.${assessmentText}`]: {
    fontSize: "14px",
  },
  [`.${icon}`]: {
    width: "18px",
    height: "18px",
  },
  [`.${iconContainer}`]: {
    width: "18px",
    height: "18px",
  },
});
