import { style, styleVariants, globalStyle } from "@vanilla-extract/css";

export const baseButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "150px",
  minHeight: "40px",
  borderRadius: "16px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "14px",
  paddingRight: "14px",
  border: "1px solid #0BA5EC",
  backgroundColor: "#0BA5EC",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
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

// Mobile responsive styles
globalStyle("@media (max-width: 768px)", {
  [`.${baseButton}`]: {
    height: "40px",
    fontSize: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "20px",
  },
});

globalStyle("@media (max-width: 600px)", {
  [`.${baseButton}`]: {
    height: "36px",
    fontSize: "14px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderRadius: "18px",
  },
});

globalStyle("@media (max-width: 480px)", {
  [`.${baseButton}`]: {
    height: "32px",
    fontSize: "13px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "16px",
  },
});
