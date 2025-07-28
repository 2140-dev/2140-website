import { SxProps } from "@mui/material";

export const desktopMenuSx: SxProps = {
  display: "flex",
  p: 0,
};

export const desktopItemSx: SxProps = {
  mb: 0,
  p: 0,
  position: "relative",
  whiteSpace: "nowrap",
  "&:not(:last-child)": {
    mr: 7,
  },

  a: {
    cursor: "pointer",
  },
};

export const mobileMenuSx: SxProps = {
  alignItems: "center",
  bgcolor: "yellow.200",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  left: 0,
  p: 3,
  position: "fixed",
  top: 0,
  transition: "all 0.5 ease-in",
  transitionDelay: "1s",
  width: "100vw",
  zIndex: 4,
};

export const mobileItemSx: SxProps = {
  textAlign: "center",
  width: "auto",
  p: 0,
  mb: 3,

  a: {
    textDecoration: "none",
  },
};

export const iconSx: SxProps = {
  position: "relative",
  zIndex: 12,
};

export const buttonSx: SxProps = {
  bgcolor: "primary.main",
  borderRadius: 48,
  height: 48,
  width: 48,
};
