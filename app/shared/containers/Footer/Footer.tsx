"use client";
import React from "react";
import Link from "next/link";
import { RichTextRenderer } from "@/app/shared/components/RichTextRenderer/RichTextRenderer";
import { SettingsQueryResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import { Container } from "@/app/shared/layouts/Container/Container";

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
      <Typography variant="caption" component="div">
        <RichTextRenderer content={disclaimer} />
      </Typography>
    </Container>
  );
};
