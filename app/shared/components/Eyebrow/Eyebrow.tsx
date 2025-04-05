import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

const mapColorsToValues: Record<"yellow" | "white" | "black" | "blue", string> =
  {
    yellow: "yellow.300",
    black: "primary.main",
    white: "primary.white",
    blue: "blue.100",
  };
interface Props {
  color: "yellow" | "white" | "black" | "blue";
  text: string | ReactNode;
}
export const Eyebrow = ({ color, text }: Props) => {
  return (
    <Typography
      variant="body2"
      component="span"
      fontWeight={600}
      color={mapColorsToValues[color]}
      sx={{
        display: "inline-block",
        textTransform: "uppercase",
        letterSpacing: 1,
        mb: 1,
      }}
    >
      {text}
    </Typography>
  );
};
