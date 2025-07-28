import { SxProps } from "@mui/material";
import { colors } from "../../../../theme/colors";

export const wrapperSx: SxProps = {
  height: {
    lg: "100vh",
  },
  overflow: {
    xs: "hidden",
    md: "visible",
  },
};

export const containerSx: SxProps = {
  alignItems: "center",
  display: {
    lg: "flex",
  },
  height: "100%",
  justifyContent: "space-between",
  py: 10,
  gap: 10,
  position: "relative",
};

export const childSx = {
  flex: 1,
  maxWidth: { lg: "calc(50% - 5rem)" },
};
export const leftSx = {
  pl: {
    xs: 0,
    lg: 6,
  },
  pt: {
    xs: 10,
    lg: 0,
  },
  u: {
    textDecoration: "none",
    position: "relative",
    zIndex: 1,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: {
        xs: 0,
        md: "0.5rem",
      },
      left: "-0.5rem",
      right: "-0.5rem",
      height: "1rem",
      zIndex: -1,
      width: "105%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: `url('images/underline.svg')`,
    },
  },
};

export const backgroundSx: SxProps = {
  position: "absolute",
  right: { md: "-8%" },
  left: { xs: "10%", md: "auto" },
  top: 0,
  zIndex: -1,
  "::after": {
    background: colors.yellow[200],
    content: '""',
    display: { xs: "none", lg: "block" },
    height: "100%",
    left: "99%",
    position: "absolute",
    top: 0,
    width: "100vw",
  },
};

export const imageSx = {
  zIndex: 1,
};
