import { TypographyOptions } from '@mui/material/styles/createTypography';
import { colors } from './colors';
import { CSSProperties } from 'react';

export const typeface = {
  // heading: 'Bricolage Grotesque, monospace',
  text: 'Poppins, monospace',
  accent: 'Gochi Hand, cursive',
};

const headings: CSSProperties = {
  color: colors.primary.main,
  lineHeight: 1.25,
  fontWeight: 600,
  marginBottom: '1rem',
};

export const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: typeface.text,
  fontSize: 16,
  h1: {
    ...headings,
    fontSize: '5rem',
    lineHeight: 1.15,
  },
  h2: {
    ...headings,
    fontSize: '3.5rem',
  },
  h3: {
    ...headings,
    fontSize: '2rem',
  },
  h4: {
    ...headings,
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  h5: {
    ...headings,
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  h6: {
    ...headings,
    fontSize: '1rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  body2: {
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
  },
  caption: {
    fontSize: '0.75rem',
    color: colors.gray[200],
  },
};
