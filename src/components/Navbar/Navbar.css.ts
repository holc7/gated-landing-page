import { style, globalStyle } from "@vanilla-extract/css";

export const navbar = style({
  position: "fixed",
  top: "2rem",
  left: "1rem",
  right: "1rem",
  maxWidth: "1184px", // ✅ Figma width
  height: "64px", // ✅ Figma height (hug)
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between", // ✅ Figma justify
  alignItems: "center",
  paddingTop: "1rem", // ✅ container-padding
  paddingBottom: "1rem", // ✅ container-padding
  paddingRight: "1rem", // ✅ container-padding
  paddingLeft: "1.5rem", // ✅ spacing-3xl (left)
  backgroundColor: "#FFFFFF", // ✅ Figma color
  borderRadius: "32px", // ✅ radius-4xl
  boxShadow: "0 14px 14px rgba(0, 0, 0, 0.04)",
  zIndex: 1000,
});

export const logo = style({
  width: "auto",
  height: "auto",
  maxWidth: "140px",
  maxHeight: "40px",
});

// Mobile responsive styles for logo only
globalStyle("@media (max-width: 768px)", {
  [`.${logo}`]: {
    maxWidth: "120px",
    maxHeight: "32px",
  },
});

globalStyle("@media (max-width: 600px)", {
  [`.${logo}`]: {
    maxWidth: "100px",
    maxHeight: "28px",
  },
});

globalStyle("@media (max-width: 480px)", {
  [`.${logo}`]: {
    maxWidth: "80px",
    maxHeight: "24px",
  },
});
