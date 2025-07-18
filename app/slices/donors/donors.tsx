import { Eyebrow } from "@/app/shared/components/eyebrow-1/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { Image } from "@/app/types/image";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { imageBuilder } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
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
