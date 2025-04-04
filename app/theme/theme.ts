import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { typeface, typography } from "./typography";

export const theme = (options: ThemeOptions) => {
  return responsiveFontSizes(
    createTheme({
      spacing: 8,
      typography: typography,
      breakpoints: breakpoints,
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              fontSize: 16,
              textSizeAdjust: "100%",
            },
            body: {
              margin: 0,
              backgroundColor: "#fff",
              color: colors.primary.dark,
              fontFamily: typeface.text,
              lineHeight: 1.15,
              minHeight: "100%",
              overflowX: "hidden",
              p: 0,
            },
            a: {
              color: colors.primary.dark,

              ":visited": {
                color: colors.primary.dark,
              },
            },
          },
        },
      },
      palette: colors,
      ...options,
    })
  );
};
