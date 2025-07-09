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
  fontSize: '3rem',
  fontWeight: 700,
  color: '#222',
  marginBottom: '24px',
  lineHeight: 1.1,
  maxWidth: '900px',
});

export const subheadline = style({
  fontSize: '1.25rem',
  color: '#444',
  marginBottom: '36px',
  maxWidth: '600px',
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