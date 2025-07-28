import { Button } from "@/app/shared/components/button/button-1";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { SanityImage } from "@/app/shared/components/sanity-image/sanity-image";
import { Container } from "@/app/shared/layouts/container/container-1";
import { Section } from "@/app/shared/layouts/section/section";
import { Image as ImageType } from "@/app/types/image";
import { getInternalLinkUrl } from "@/app/utils/link";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { InternalResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import { PortableTextBlock } from "next-sanity";

interface Props {
  eyebrow?: string;
  title: string;
  content?: PortableTextBlock;
  image?: ImageType;
  link?: InternalResultType;
  layout?: "above" | "below";
}
const CenteredText = ({
  eyebrow,
  title,
  content,
  image,
  link,
  layout,
}: Props) => {
  return (
    <Section>
      <Container
        size="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 10,
        }}
      >
        <Box>
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
        </Box>
        {image && (
          <Box sx={{ px: 10, order: layout === "below" ? -1 : 1 }}>
            <SanityImage image={image} />
          </Box>
        )}
      </Container>
    </Section>
  );
};

export default CenteredText;
