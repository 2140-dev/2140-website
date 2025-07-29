import { Accordion } from "@/app/shared/components/accordion/accordion-1";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { AccordionItems } from "@/app/types/accordion";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { Grid, Typography } from "@mui/material";

interface Props {
  eyebrow?: string;
  title: string;
  content?: string;
  items: AccordionItems;
}
const Faqs = ({ eyebrow, title, content, items }: Props) => {
  return (
    <Section>
      <Container size="md">
        <Grid container spacing={["5rem", "10rem"]}>
          <Grid item xs={12} md={6}>
            {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
            <Typography variant="h2" sx={getStylishMarkdown("black")}>
              <MarkdownRender>{title}</MarkdownRender>
            </Typography>
            {content && <Typography variant="body1">{content}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion items={items} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Faqs;
