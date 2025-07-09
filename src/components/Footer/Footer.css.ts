// Footer.css.ts

import { style } from "@vanilla-extract/css";

export const footer = style({
  backgroundColor: "#1a1a1a",
  padding: "1.5rem 0",
});

export const container = style({
  maxWidth: "1184px",
  margin: "0 auto",
  paddingLeft: "1.5rem",
  paddingRight: "1rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const leftText = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "14px",
  color: "#ffffff",
  fontWeight: 400,
});

export const rightText = style({
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "14px",
  color: "#5fa4e6",
  fontWeight: 400,
  textDecoration: "none",
  cursor: "pointer",

  ":hover": {
    textDecoration: "underline",
  },
});

 