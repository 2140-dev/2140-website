import { Image } from "@/app/types/image";
import { imageBuilder, urlForImage } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";
import { Eyebrow } from "@/app/shared/components/Eyebrow/Eyebrow";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { MarkdownRender } from "@/app/shared/components/MarkdownRenderer/MarkdownRenderer";
import { RichTextRenderer } from "@/app/shared/components/RichTextRenderer/RichTextRenderer";
import { PortableTextBlock } from "next-sanity";

interface Props {
  eyebrow?: string;
  title: string;
  content?: PortableTextBlock;
  logos: Image[];
}
const Donors = ({ eyebrow, title, content, logos }: Props) => {
  return (
    <Section>
      <Container
        size="sm"
        sx={{
          textAlign: "center",
        }}
      >
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <Typography variant="h2" sx={getStylishMarkdown("white")}>
          <MarkdownRender>{title}</MarkdownRender>
        </Typography>
        {content && <RichTextRenderer content={content} />}
      </Container>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          gap: 10,
          mt: 10,
          flexWrap: "wrap",
        }}
      >
        {logos.map((image, index) => (
          <Box key={index} sx={{ maxWidth: 180 }}>
            <img
              src={imageBuilder?.image(image).url()}
              alt={image?.alt || ""}
              style={{
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                maxHeight: 80,
              }}
            />
          </Box>
        ))}
      </Container>
    </Section>
  );
};

export default Donors;
