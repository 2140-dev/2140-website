import { Button } from "@/app/shared/components/button/button";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { resolveInternalOrExternalLink } from "@/app/utils/link";
import { PageNotFoundQueryResultType } from "@/sanity/lib/results";
import { Box, Typography } from "@mui/material";

export const NotFoundTemplate = ({
  eyebrow,
  title,
  content,
  items,
}: PageNotFoundQueryResultType) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Container size="sm">
        {eyebrow && <Eyebrow color="blue" text={eyebrow} />}
        <Typography variant="h1" sx={{ mb: "2rem" }}>
          {title}
        </Typography>
        {content && <RichTextRenderer content={content} />}
        {items?.map((item) => {
          const { href, label } = resolveInternalOrExternalLink(item);
          return (
            <Button variant="secondary" href={href} sx={{ mt: "4rem" }}>
              {label}
            </Button>
          );
        })}
      </Container>
    </Box>
  );
};
