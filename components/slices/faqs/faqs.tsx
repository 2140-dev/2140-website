import { Accordion } from 'components/shared/accordion/accordion'
import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { Faqs as FaqsProps } from 'sanity.types'

const Faqs = ({ eyebrow, title, content, items }: FaqsProps) => {
  return (
    <Section>
      <Container size="md">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-40">
          <div>
            {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
            <h2 className="strike-white under-white">
              <MarkdownRender>{title}</MarkdownRender>
            </h2>
            {content && <RichTextRenderer content={content} />}
          </div>
          <div>
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Faqs
