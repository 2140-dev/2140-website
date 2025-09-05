import { Button } from "@/app/shared/components/button/button";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { getInternalLinkUrl } from "@/app/utils/link";
import { HomepageQueryResultType } from "@/sanity/lib/results";
import { urlForImage } from "@/sanity/lib/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from './hero.module.scss'
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
    <Box className={styles.hero} sx={wrapperSx}>
      <Container size="lg" sx={containerSx}>
        <Box sx={{ ...childSx, ...leftSx }}>
          <h1
            className={styles.title}
          >
            <MarkdownRender>{title}</MarkdownRender>
          </h1>
          {excerpt && (
            <p className="text-l">
              {excerpt}
            </p>
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
