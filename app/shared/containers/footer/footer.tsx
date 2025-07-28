"use client";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { SettingsQueryResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type Props = Pick<SettingsQueryResultType, "email" | "gpg" | "disclaimer">;

export const Footer = ({ email, disclaimer, gpg }: Props) => {
  const mailto = `mailto:${email}`;
  return (
    <Container
      size="lg"
      sx={{
        alignItems: {
          xs: "column",
          lg: "center",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: 3,
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: ["column", "row"],
          gap: 3,
        }}
      >
        <Link
          href={mailto}
          style={{ display: "inline-flex", gap: 8, alignItems: "center" }}
        >
          <img src="images/icons/email.svg" alt="" width={20} />
          <Typography
            variant="caption"
            component="span"
            fontWeight={600}
            color="primary.dark"
          >
            {email}
          </Typography>
        </Link>
        {gpg && (
          <Typography variant="caption" component="div" color="primary.dark">
            <b>GPG</b>: {gpg}
          </Typography>
        )}
      </Box>
      <Typography
        variant="caption"
        component="div"
        sx={{
          ".MuiTypography-root": {
            fontSize: "0.75rem !important",
          },
        }}
      >
        <RichTextRenderer content={disclaimer} />
      </Typography>
    </Container>
  );
};
