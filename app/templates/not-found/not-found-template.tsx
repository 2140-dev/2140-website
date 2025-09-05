import { Button } from "@/app/shared/components/button/button";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { resolveInternalOrExternalLink } from "@/app/utils/link";
import { PageNotFoundQueryResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";
import styles from './not-found-template.module.scss'
export const NotFoundTemplate = ({
  eyebrow,
  title,
  content,
  items,
}: PageNotFoundQueryResultType) => {
  return (
    <div className={styles['not-found']}>
      <Container size="sm">
        {eyebrow && <Eyebrow color="blue" text={eyebrow} />}
        <h1>
          {title}
        </h1>
        {content && <RichTextRenderer content={content} />}
        {items?.map((item, index) => {
          const { href, label } = resolveInternalOrExternalLink(item);
          return (
            <Button
              key={index}
              variant="secondary"
              href={href}
              sx={{ mt: "4rem" }}
            >
              {label}
            </Button>
          );
        })}
      </Container>
    </div>
  );
};
