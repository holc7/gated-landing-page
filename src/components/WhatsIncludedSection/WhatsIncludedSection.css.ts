import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "3rem",
  padding: "4rem 0",
  backgroundColor: "#f6fbff",
  backgroundImage: `
    linear-gradient(to right, #f7fbff 0%, #f8fcff 10%, transparent 20%, transparent 80%, #f8fcff 90%, #f5faff 100%),
    radial-gradient(circle, #c3e5fb 2.5px, transparent 2.5px)
  `, // ✅ Colors ONLY on sides (0-20% and 80-100%), transparent middle
  backgroundSize: "100% 100%, 40px 40px",
});

export const leftContent = style({
  flex: 1,
  maxWidth: "500px",
});

export const title = style({
  fontSize: "40px",
  fontWeight: 700,
  marginBottom: "16px",
});

export const description = style({
  fontSize: "20px",
  marginBottom: "32px",
});

export const stepsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const stepItem = style({
  marginBottom: "24px",
  padding: "16px",
  border: "1px solid #b3b3ff",
  borderRadius: "12px",
  background: "#fff",

  ":last-child": {
    marginBottom: 0,
  },
});

export const stepNumber = style({
  fontSize: "32px",
  fontWeight: 700,
  color: "#b3b3ff",
  float: "left",
  marginRight: "16px",
});

export const stepContent = style({
  overflow: "hidden",
});

export const stepTitle = style({
  fontWeight: 600,
  fontSize: "20px",
});

export const stepDescription = style({
  fontSize: "16px",
});

export const clearFloat = style({
  clear: "both",
});

export const formContainer = style({
  flex: 1,
  maxWidth: "400px",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
  padding: "32px",
});

export const formTitle = style({
  fontSize: "22px",
  fontWeight: 700,
  marginBottom: "16px",
});

export const inputFull = style({
  width: "100%",
  marginBottom: "12px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
});

export const inputRow = style({
  display: "flex",
  gap: "8px",
  marginBottom: "12px",
});

export const inputHalf = style({
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
});

export const inputLast = style({
  width: "100%",
  marginBottom: "16px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
});

export const submitButton = style({
  width: "100%",
  background: "#0BA5EC",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer",

  ":hover": {
    background: "#0991D1",
  },
});
