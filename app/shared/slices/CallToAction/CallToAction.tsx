"use client";

import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PortableTextBlock } from "next-sanity";
import { RichTextRenderer } from "@/app/shared/components/RichTextRenderer/RichTextRenderer";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";
import { Eyebrow } from "@/app/shared/components/Eyebrow/Eyebrow";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { Button } from "@/app/shared/components/Button/Button";
import { client } from "@/sanity/lib/client";
import { fetchDonateLink } from "@/sanity/lib/queries";
import { InternalResultType } from "@/sanity/lib/results";
import { getInternalLinkUrl } from "@/app/utils/link";
import { MarkdownRender } from "@/app/shared/components/MarkdownRenderer/MarkdownRenderer";

interface Props {
  eyebrow?: string;
  title: string;
  layout: "left" | "right";
  image: ImageType;
  content: PortableTextBlock;
  link: InternalResultType;
}
const CallToAction = ({
  eyebrow,
  title,
  layout,
  image,
  content,
  link,
}: Props) => {
  // console.log(link);
  return (
    <Section
      sx={{
        bgcolor: "yellow.200",
      }}
    >
      <Container>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: [5, 20],
          }}
        >
          <Box
            sx={{
              flex: 1,
            }}
          >
            {eyebrow && <Eyebrow color="white" text={eyebrow} />}
            <Typography variant="h2" sx={getStylishMarkdown("white")}>
              <MarkdownRender>{title}</MarkdownRender>
            </Typography>
            <RichTextRenderer content={content} />
            <Button
              variant="donate"
              component="a"
              href={getInternalLinkUrl(link)}
              sx={{ mt: 5 }}
            >
              {link.label}
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              order: {
                md: layout === "left" ? -1 : 1,
              },
            }}
          >
            <Image
              src={urlForImage(image)?.url() as string}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt={image?.alt || ""}
            />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default CallToAction;
