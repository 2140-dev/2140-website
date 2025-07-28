import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { SanityImage } from "@/app/shared/components/sanity-image/sanity-image";
import { Container } from "@/app/shared/layouts/container/container-1";
import { Section } from "@/app/shared/layouts/section/section";
import { Image as ImageType } from "@/app/types/image";
import { Box } from "@mui/material";
import { PortableTextBlock } from "next-sanity";

interface Props {
  layout: "left" | "right";
  image: ImageType;
  content: PortableTextBlock;
}
const TextBlockWithImage = ({ layout, image, content }: Props) => {
  return (
    <Section>
      <Container>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: {
              md: "space-between",
            },
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
              maxWidth: 480,
            }}
          >
            <RichTextRenderer content={content} />
          </Box>
          <Box
            sx={{
              flex: 1,
              maxWidth: 480,
              order: {
                md: layout === "right" ? -1 : 1,
              },
            }}
          >
            <SanityImage image={image} />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default TextBlockWithImage;
