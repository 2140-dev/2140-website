import { Accordion } from "app/shared/components/accordion/accordion";
import { Eyebrow } from "app/shared/components/eyebrow/eyebrow";
import { MarkdownRender } from "app/shared/components/markdown-renderer/markdown-renderer";
import { RichTextRenderer } from "app/shared/components/rich-text-renderer/rich-text-renderer";
import { Container } from "app/shared/layouts/container/container";
import { Section } from "app/shared/layouts/section/section";
import { AccordionItems } from "app/types/accordion";
import { PortableTextBlock } from "next-sanity";
import styles from './faqs.module.scss';

interface Props {
  eyebrow?: string;
  title: string;
  content?: PortableTextBlock;
  items: AccordionItems;
}
const Faqs = ({ eyebrow, title, content, items }: Props) => {
  return (
    <Section className={styles.faqs}>
      <Container size="md">
        <div className={styles.grid}>
          <div className={styles.content}>
            {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
            <h2 className="strike-white under-white">
              <MarkdownRender>{title}</MarkdownRender>
            </h2>
            {content && <RichTextRenderer content={content} />}
          </div>
          <div className={styles.accordion}>
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Faqs;
