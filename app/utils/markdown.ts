import { SxProps } from "@mui/material";

export const getStylishMarkdown = (color: "white" | "yellow" | "black") => ({
  s: {
    textDecoration: "none",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "-2.5%",
      height: "1rem",

      // Position the line behind the text so that
      // it is still easily readable
      zIndex: 1,
      width: "105%",
      backgroundImage: `url('images/strikethrough-${color}.svg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
  },
  u: {
    textDecoration: "none",
    position: "relative",
    zIndex: 1,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-0.5rem",
      height: "1rem",
      zIndex: -1,
      width: "105%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: `url('images/underline-${color}.svg')`,
    },
  },
});
