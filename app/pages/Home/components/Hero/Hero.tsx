import React from "react";
import { Box, Typography } from "@mui/material";
import {
  backgroundSx,
  blurbSx,
  containerSx,
  imageSx,
  childSx,
  leftSx,
  wrapperSx,
} from "./Hero.styles";
import { Container } from "@/app/shared/layouts/Container/Container";
import Link from "next/link";
import { getInternalLinkUrl } from "@/app/utils/link";
import { HomepageQueryResultType } from "@/sanity/lib/results";
import { Button } from "@/app/shared/components/Button/Button";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { MarkdownRender } from "@/app/shared/components/MarkdownRenderer/MarkdownRenderer";

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
          <Typography variant="h1" mb={4}>
            <MarkdownRender>{title}</MarkdownRender>
          </Typography>
          {excerpt && (
            <Typography sx={blurbSx} variant="body1">
              {excerpt}
            </Typography>
          )}
          {link && (
            <Link href={getInternalLinkUrl(link)}>
              <Button component="span" sx={{ mt: 4 }}>
                {link.label}
              </Button>
            </Link>
          )}
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
