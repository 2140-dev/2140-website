import { Typography } from "@mui/material";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";

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
