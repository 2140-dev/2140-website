import React, { ReactNode } from "react";
import { Box, ButtonProps, Button as MuiButton } from "@mui/material";
import { SystemStyleObject } from "@mui/system";
import { colors } from "../../../theme/colors";
import { commonButtonSx, buttonVariantSx } from "./Button.styles";

type Props = Omit<ButtonProps, "sx" | "variant"> & {
  children?: ReactNode;
  sx?: SystemStyleObject;
  variant?: "primary" | "secondary" | "donate";
};

export const Button = ({
  children,
  sx,
  variant = "primary",
  ...rest
}: Props) => {
  return (
    <MuiButton
      sx={{ ...commonButtonSx, ...buttonVariantSx[variant], ...sx }}
      {...rest}
    >
      {children}
      <Box component="span">
        {variant !== "secondary" && <OutlineCircle variant={variant} />}
      </Box>
    </MuiButton>
  );
};

const strokeColor: Record<string, string> = {
  primary: colors.primary.main,
  secondary: "transparent",
  donate: colors.primary.main,
};
const OutlineCircle = ({ variant = "primary" }: Pick<Props, "variant">) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="32"
        r="31.5"
        style={{
          stroke: strokeColor[variant],
          strokeWidth: 1,
          strokeDasharray: 170,
        }}
      />
    </svg>
  );
};
