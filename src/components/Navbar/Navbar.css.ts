import { style } from '@vanilla-extract/css';

export const navbar = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 2.5rem 1.5rem 2.5rem',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoBox = style({
  width: 32,
  height: 32,
  marginRight: 8,
  background: '#f3f4f6',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const logoText = style({
  fontWeight: 500,
  fontSize: 18,
  color: '#222',
});

export const button = style({
  background: '#e5f0fb',
  color: '#2563eb',
  border: 'none',
  borderRadius: 20,
  padding: '0.5rem 1.25rem',
  fontWeight: 500,
  fontSize: 16,
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
}); 