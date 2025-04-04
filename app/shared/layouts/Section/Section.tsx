import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

interface Props {
  children: ReactNode;
  sx?: SystemStyleObject;
  id?: string;
}

export const Section = ({ children, sx, id }: Props) => {
  return (
    <Box
      id={id}
      sx={{
        py: 15,
        overflow: {
          xs: 'hidden',
          md: 'auto',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
