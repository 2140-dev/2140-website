import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
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
      <Container size="xs">
        <RichTextRenderer content={content} />
      </Container>
    </Section>
  )
}

export default Text
