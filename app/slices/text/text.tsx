import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { PortableTextBlock } from 'sanity'

interface TextProps {
  content: PortableTextBlock[]
}

const Text = ({ content }: TextProps) => {
  if (!content) {
    return null
  }

  return (
    <Section>
      <Container size="sm">
        <RichTextRenderer content={content} />
      </Container>
    </Section>
  )
}

export default Text
