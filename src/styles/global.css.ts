import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// CSS Reset
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: vars.typography.lineHeight.normal,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: vars.typography.fontSize.base,
  color: vars.colors.gray[900],
  backgroundColor: vars.colors.white,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root, #__next', {
  isolation: 'isolate',
});

// Smooth scrolling
globalStyle('html', {
  scrollBehavior: 'smooth',
});

// Focus styles
globalStyle(':focus', {
  outline: `2px solid ${vars.colors.primary[500]}`,
  outlineOffset: '2px',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

// Utility classes
globalStyle('.visually-hidden', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
});

globalStyle('.container', {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
  maxWidth: '1200px',
});

globalStyle('.flex', {
  display: 'flex',
});

globalStyle('.flex-col', {
  flexDirection: 'column',
});

globalStyle('.items-center', {
  alignItems: 'center',
});

globalStyle('.justify-center', {
  justifyContent: 'center',
});

globalStyle('.justify-between', {
  justifyContent: 'space-between',
});

globalStyle('.gap-sm', {
  gap: vars.spacing.sm,
});

globalStyle('.gap-md', {
  gap: vars.spacing.md,
});

globalStyle('.gap-lg', {
  gap: vars.spacing.lg,
});

globalStyle('.text-center', {
  textAlign: 'center',
});

globalStyle('.text-sm', {
  fontSize: vars.typography.fontSize.sm,
});

globalStyle('.text-lg', {
  fontSize: vars.typography.fontSize.lg,
});

globalStyle('.text-xl', {
  fontSize: vars.typography.fontSize.xl,
});

globalStyle('.text-2xl', {
  fontSize: vars.typography.fontSize['2xl'],
});

globalStyle('.text-3xl', {
  fontSize: vars.typography.fontSize['3xl'],
});

globalStyle('.font-medium', {
  fontWeight: vars.typography.fontWeight.medium,
});

globalStyle('.font-semibold', {
  fontWeight: vars.typography.fontWeight.semibold,
});

globalStyle('.font-bold', {
  fontWeight: vars.typography.fontWeight.bold,
});

globalStyle('.text-gray-600', {
  color: vars.colors.gray[600],
});

globalStyle('.text-gray-700', {
  color: vars.colors.gray[700],
});

globalStyle('.text-primary-600', {
  color: vars.colors.primary[600],
});

globalStyle('.mb-sm', {
  marginBottom: vars.spacing.sm,
});

globalStyle('.mb-md', {
  marginBottom: vars.spacing.md,
});

globalStyle('.mb-lg', {
  marginBottom: vars.spacing.lg,
});

globalStyle('.mt-sm', {
  marginTop: vars.spacing.sm,
});

globalStyle('.mt-md', {
  marginTop: vars.spacing.md,
});

globalStyle('.mt-lg', {
  marginTop: vars.spacing.lg,
});

globalStyle('.py-sm', {
  paddingTop: vars.spacing.sm,
  paddingBottom: vars.spacing.sm,
});

globalStyle('.py-md', {
  paddingTop: vars.spacing.md,
  paddingBottom: vars.spacing.md,
});

globalStyle('.py-lg', {
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg,
});

globalStyle('.px-sm', {
  paddingLeft: vars.spacing.sm,
  paddingRight: vars.spacing.sm,
});

globalStyle('.px-md', {
  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
});

globalStyle('.px-lg', {
  paddingLeft: vars.spacing.lg,
  paddingRight: vars.spacing.lg,
});