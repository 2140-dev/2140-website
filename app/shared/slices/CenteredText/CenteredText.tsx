import { Image as ImageType } from "@/app/types/image";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";
import { Eyebrow } from "@/app/shared/components/Eyebrow/Eyebrow";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { MarkdownRender } from "@/app/shared/components/MarkdownRenderer/MarkdownRenderer";
import { RichTextRenderer } from "@/app/shared/components/RichTextRenderer/RichTextRenderer";
import { PortableTextBlock } from "next-sanity";
import { SanityImage } from "@/app/shared/components/SanityImage/SanityImage";
import { InternalResultType } from "@/sanity/lib/results";
import { Button } from "@/app/shared/components/Button/Button";
import { getInternalLinkUrl } from "@/app/utils/link";

interface Props {
  eyebrow?: string;
  title: string;
  content?: PortableTextBlock;
  image?: ImageType;
  link?: InternalResultType;
}
const CenteredText = ({ eyebrow, title, content, image, link }: Props) => {
  return (
    <Section>
      <Container
        size="sm"
        sx={{
          textAlign: "center",
        }}
      >
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <Typography variant="h2" sx={getStylishMarkdown("black")}>
          <MarkdownRender>{title}</MarkdownRender>
        </Typography>
        {content && <RichTextRenderer content={content} />}

        {link && (
          <Button
            variant="secondary"
            href={getInternalLinkUrl(link)}
            component="a"
            sx={{ mt: 5 }}
          >
            {link?.label}
          </Button>
        )}
        {image && (
          <Box sx={{ mt: 10, px: 10 }}>
            <SanityImage image={image} />
          </Box>
        )}
      </Container>
    </Section>
  );
};

export default CenteredText;
