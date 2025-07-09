import { style, globalStyle } from '@vanilla-extract/css';

export const landingWrapper = style({
  minHeight: '100vh',
  width: '100vw',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  overflow: 'hidden',
});

export const dottedBg = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  backgroundImage:
    'radial-gradient(rgba(0, 120, 212, 0.08) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
});

export const main = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  position: 'relative',
  textAlign: 'center',
  padding: '0 16px',
});

export const headline = style({
  fontFamily: "DM Sans, Segoe UI, Arial, sans-serif",
  fontWeight: 600,
  fontSize: "96px",
  lineHeight: "115px",
  marginBottom: "32px",
  letterSpacing: "-2%",
  textAlign: "center",
  color: "#222",
  maxWidth: "1200px",
});

export const subheadline = style({
  fontFamily: "DM Sans, Segoe UI, Arial, sans-serif",
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "32px",
  marginBottom: "32px",
  letterSpacing: "0",
  color: "#181D27",
  textAlign: "center",
  maxWidth: "800px",
});

export const ctaButton = style({
  background: '#2196f3',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 32px',
  fontWeight: 500,
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
  ':hover': {
    background: '#1769aa',
  },
});

// Responsive styles
globalStyle(`.${landingWrapper}`, {
  fontSize: '16px',
});

globalStyle('@media (max-width: 600px)', {
  [`.${headline}`]: {
    fontSize: '2rem',
  },
  [`.${main}`]: {
    padding: '0 4px',
  },
}); 