import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const formContainer = style({
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: vars.spacing.lg,
  backgroundColor: vars.colors.white,
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.shadows.lg,
  
  '@media': {
    'screen and (max-width: 768px)': {
      padding: vars.spacing.md,
      margin: vars.spacing.md,
      maxWidth: `calc(100% - ${vars.spacing.lg})`,
    },
  },
});

export const formGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.lg,
  marginBottom: vars.spacing.xl,
  
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.spacing.md,
    },
  },
});

export const formActions = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: vars.spacing.xl,
});

export const messageContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  marginBottom: vars.spacing.lg,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  
  selectors: {
    '&:has([style*="success"])': {
      backgroundColor: vars.colors.success[50],
      borderLeft: `4px solid ${vars.colors.success[500]}`,
    },
    '&:has([style*="error"])': {
      backgroundColor: vars.colors.error[50],
      borderLeft: `4px solid ${vars.colors.error[500]}`,
    },
  },
});

export const privacyNotice = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.gray[600],
  lineHeight: vars.typography.lineHeight.relaxed,
  marginBottom: vars.spacing.lg,
  padding: vars.spacing.md,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.borderRadius.md,
  borderLeft: `4px solid ${vars.colors.gray[300]}`,
});

globalStyle(`${privacyNotice} p`, {
  margin: 0,
});

export const linkStyle = style({
  color: vars.colors.primary[600],
  textDecoration: 'none',
  fontWeight: vars.typography.fontWeight.medium,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  transition: vars.transitions.fast,
  
  ':hover': {
    color: vars.colors.primary[700],
    textDecoration: 'underline',
  },
  
  ':focus': {
    outline: `2px solid ${vars.colors.primary[500]}`,
    outlineOffset: '2px',
    borderRadius: vars.borderRadius.sm,
  },
});

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const fieldRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.spacing.md,
  
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const fullWidthField = style({
  gridColumn: '1 / -1',
});

export const formHeader = style({
  marginBottom: vars.spacing.xl,
  textAlign: 'center',
});

export const formTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  color: vars.colors.gray[900],
  marginBottom: vars.spacing.sm,
});

export const formDescription = style({
  fontSize: vars.typography.fontSize.lg,
  color: vars.colors.gray[600],
  lineHeight: vars.typography.lineHeight.relaxed,
});

export const loadingOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.lg,
  zIndex: 10,
});

export const successCard = style({
  textAlign: 'center',
  padding: vars.spacing.xl,
});

export const errorCard = style({
  textAlign: 'center',
  padding: vars.spacing.xl,
});

// Responsive utilities
export const hideOnMobile = style({
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});

export const showOnMobile = style({
  display: 'none',
  
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
});

export const mobileFullWidth = style({
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});