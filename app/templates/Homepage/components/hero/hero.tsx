import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { HomepageQueryResultType } from "@/sanity/lib/results";
import { urlForImage } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import {
  backgroundSx,
  childSx,
  containerSx,
  imageSx,
  leftSx,
  wrapperSx,
} from "./hero.styles";

export const Hero = ({
  title,
  excerpt,
  image,
  link,
}: Partial<HomepageQueryResultType>) => {
  return (
    <Box sx={wrapperSx}>
      <Container size="lg" sx={containerSx}>
        <Box sx={{ ...childSx, ...leftSx }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { md: "4rem !important", lg: "5rem !important" } }}
          >
            <MarkdownRender>{title}</MarkdownRender>
          </Typography>
          {excerpt && (
            <Typography
              sx={{
                mt: 5,
                maxWidth: 600,
              }}
              variant="body1"
            >
              {excerpt}
            </Typography>
          )}
          {/* {link && (
            <Link href={getInternalLinkUrl(link)}>
              <Button component="span" sx={{ mt: 4 }}>
                {link.label}
              </Button>
            </Link>
          )} */}
        </Box>
        <Box sx={{ ...childSx, ...imageSx }}>
          <Box sx={backgroundSx}>
            <img src="images/background.svg" alt="" />
          </Box>
          <Image
            width={0}
            height={0}
            alt={image?.alt || ""}
            src={urlForImage(image)?.url() as string}
            priority
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
