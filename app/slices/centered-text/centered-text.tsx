import { Button } from "@/app/shared/components/button/button";
import { Eyebrow } from "@/app/shared/components/eyebrow-1/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { SanityImage } from "@/app/shared/components/sanity-image/sanity-image";
import { Container } from "@/app/shared/layouts/container/container";
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
