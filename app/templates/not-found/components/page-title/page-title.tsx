import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  excerpt?: string;
}
export const PageTitle = ({ title, excerpt }: Props) => {
  return (
    <Section sx={{ pb: 0, pt: { xs: 15, md: 20 }, textAlign: "center" }}>
      <Container size="sm">
        <Typography variant="h1">{title}</Typography>
        {excerpt && (
          <Typography
            sx={{
              mt: 4,
              px: [0, 10],
              fontSize: "1.25rem",
            }}
            variant="body1"
          >
            {excerpt}
          </Typography>
        )}
      </Container>
    </Section>
  );
};
