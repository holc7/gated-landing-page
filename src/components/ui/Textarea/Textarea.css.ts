import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const textareaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});

export const labelStyle = style({
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  color: vars.colors.gray[700],
  lineHeight: vars.typography.lineHeight.tight,
});

export const requiredIndicator = style({
  color: vars.colors.error[500],
  marginLeft: vars.spacing.xs,
});

export const textareaWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
});

export const baseTextarea = style({
  width: '100%',
  padding: `${vars.spacing.md} ${vars.spacing.md}`,
  fontSize: vars.typography.fontSize.base,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.gray[900],
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.borderRadius.md,
  transition: vars.transitions.normal,
  outline: 'none',
  resize: 'vertical',
  fontFamily: 'inherit',
  minHeight: '120px',
  '::placeholder': {
    color: vars.colors.gray[400],
  },
  ':focus': {
    borderColor: vars.colors.primary[500],
    boxShadow: `0 0 0 3px ${vars.colors.primary[100]}`,
  },
  ':disabled': {
    backgroundColor: vars.colors.gray[50],
    color: vars.colors.gray[400],
    cursor: 'not-allowed',
    resize: 'none',
  },
});

export const textareaVariants = styleVariants({
  default: {},
  error: {
    borderColor: vars.colors.error[500],
    ':focus': {
      borderColor: vars.colors.error[500],
      boxShadow: `0 0 0 3px ${vars.colors.error[100]}`,
    },
  },
  autoResize: {
    resize: 'none',
    overflow: 'hidden',
  },
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.error[600],
  marginTop: vars.spacing.xs,
});

export const helpText = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.gray[600],
  marginTop: vars.spacing.xs,
});

export const characterCount = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.gray[500],
  marginTop: vars.spacing.xs,
  textAlign: 'right',
}); 