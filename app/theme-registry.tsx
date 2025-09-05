"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme as createAppTheme } from "app/theme/theme";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const customTheme = createAppTheme({});
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
