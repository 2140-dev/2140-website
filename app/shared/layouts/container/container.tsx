import React from 'react';
import { Box, SxProps } from '@mui/material';

interface Props {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  sx?: SxProps;
  children: React.ReactNode;
}

const WIDTH: Record<'lg' | 'md' | 'sm' | 'xs', [number, number]> = {
  lg: [1568, 1616],
  md: [1248, 1296],
  sm: [848, 896],
  xs: [596, 596],
};
export const Container = ({ size = 'md', children, sx }: Props) => (
  <Box
    sx={{
      maxWidth: WIDTH[size],
      mx: 'auto',
      px: [3, 4, 6],
      ...sx,
    }}
  >
    {children}
  </Box>
);
