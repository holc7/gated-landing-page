import { style, styleVariants } from "@vanilla-extract/css";

export const baseButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "44px",
  borderRadius: "24px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "24px",
  paddingRight: "24px",
  border: "1px solid #0BA5EC",
  backgroundColor: "#0BA5EC",
  color: "white",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#0BA5EC",
    color: "white",
  },
});

export const buttonVariants = styleVariants({
  secondary: {},
});

export const buttonSizes = styleVariants({
  md: {},
});
