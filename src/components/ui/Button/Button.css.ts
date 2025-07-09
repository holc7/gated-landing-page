import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { spin } from '@/styles/global.css';

export const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  fontWeight: vars.typography.fontWeight.medium,
  borderRadius: vars.borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  transition: vars.transitions.normal,
  textDecoration: 'none',
  lineHeight: '1',
  outline: 'none',
  position: 'relative',
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary[500]}`,
    outlineOffset: '2px',
  },
  ':disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  selectors: {
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.primary[600],
    color: vars.colors.white,
    ':hover': {
      backgroundColor: vars.colors.primary[700],
    },
    ':active': {
      backgroundColor: vars.colors.primary[800],
    },
  },
  secondary: {
    backgroundColor: vars.colors.secondary[100],
    color: vars.colors.secondary[900],
    ':hover': {
      backgroundColor: vars.colors.secondary[200],
    },
    ':active': {
      backgroundColor: vars.colors.secondary[300],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: vars.colors.primary[600],
    border: `1px solid ${vars.colors.primary[600]}`,
    ':hover': {
      backgroundColor: vars.colors.primary[50],
      borderColor: vars.colors.primary[700],
      color: vars.colors.primary[700],
    },
    ':active': {
      backgroundColor: vars.colors.primary[100],
      borderColor: vars.colors.primary[800],
      color: vars.colors.primary[800],
    },
  },
});

export const buttonSizes = styleVariants({
  sm: {
    fontSize: vars.typography.fontSize.sm,
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
    minHeight: '36px',
  },
  md: {
    fontSize: vars.typography.fontSize.base,
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    minHeight: '44px',
  },
  lg: {
    fontSize: vars.typography.fontSize.lg,
    padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
    minHeight: '52px',
  },
});

export const loadingSpinner = style({
  animation: `${spin} 1s linear infinite`,
}); 