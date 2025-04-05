import { Typography } from "@mui/material";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Section } from "@/app/shared/layouts/Section/Section";

interface Props {
  title: string;
  excerpt?: string;
}
export const PageTitle = ({ title, excerpt }: Props) => {
  return (
    <Container size="sm">
      <Section sx={{ pb: 0, textAlign: "center" }}>
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
      </Section>
    </Container>
  );
};
