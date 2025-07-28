import { Button } from "@/app/shared/components/button-1/button";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { Image as ImageType } from "@/app/types/image";
import { getInternalLinkUrl } from "@/app/utils/link";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { InternalResultType } from "@/sanity/lib/results";
import { urlForImage } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  eyebrow?: string;
  title: string;
  layout: "left" | "right";
  image: ImageType;
  content: string;
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
              maxWidth: 480,
            }}
          >
            {eyebrow && <Eyebrow color="white" text={eyebrow} />}
            <Typography variant="h2" sx={getStylishMarkdown("white")}>
              <MarkdownRender>{title}</MarkdownRender>
            </Typography>
            <Typography variant="body1">{content}</Typography>
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
              maxWidth: 480,
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
