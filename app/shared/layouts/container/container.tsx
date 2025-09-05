import React from 'react';
import { Box, SxProps } from '@mui/material';
import styles from './container.module.scss'
interface Props {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  sx?: SxProps;
  children: React.ReactNode;
}

const WIDTH: Record<'lg' | 'md' | 'sm' | 'xs', number> = {
  lg: 1568,
  md: 1248,
  sm: 848,
  xs: 596,
};
export const Container = ({ size = 'md', children, sx }: Props) => (
  <div className={styles.container} style={{ maxWidth: WIDTH[size] }}>
    {children}
  </div>
);
