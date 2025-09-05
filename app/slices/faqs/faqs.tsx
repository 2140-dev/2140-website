import { Accordion } from "@/app/shared/components/accordion/accordion";
import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "@/app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "@/app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "@/app/shared/layouts/container/container";
import { Section } from "@/app/shared/layouts/section/section";
import { AccordionItems } from "@/app/types/accordion";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { Grid, Typography } from "@mui/material";
import { PortableTextBlock } from "next-sanity";

interface Props {
  eyebrow?: string;
  title: string;
  content?: PortableTextBlock;
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
            {content && <RichTextRenderer content={content} />}
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
