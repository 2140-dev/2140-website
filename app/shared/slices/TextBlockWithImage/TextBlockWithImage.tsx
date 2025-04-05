import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { PortableTextBlock } from "next-sanity";
import { RichTextRenderer } from "@/app/shared/components/RichTextRenderer/RichTextRenderer";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";

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
            <RichTextRenderer content={content} />
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

export default TextBlockWithImage;
