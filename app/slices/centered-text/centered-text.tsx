import { Button } from "app/shared/components/button/button";
import { Eyebrow } from "app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "app/shared/components/rich-text-renderer/rich-text-renderer";
import { SanityImage } from "app/shared/components/sanity-image/sanity-image";
import { Container } from "app/shared/layouts/container/container";
import { Section } from "app/shared/layouts/section/section";
import { Image as ImageType } from "app/types/image";
import { getInternalLinkUrl } from "app/utils/link";
import { getStylishMarkdown } from "app/utils/markdown";
import { InternalResultType } from "sanity/lib/results";
import { Box, Typography } from "@mui/material";
import { PortableTextBlock } from "next-sanity";
import styles from './centered-text.module.scss'

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
    <Section className={styles['centered-text']}>
      <Container
        size="sm"
        className={styles.container}
      >
        <div>
          {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
          <h2 className="strike-black under-black">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
          <Container size="xs">
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
          </Container>
        </div>
        {image && (
          <div className={styles.image} style={{ order: layout === "below" ? -1 : 1 }}>
            <SanityImage image={image} />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CenteredText;
