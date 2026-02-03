import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'components/shared/sanity-image/sanity-image'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { PortableTextBlock } from 'sanity'
import { TextBlockWithImage as TextBlockWithImageType } from 'sanity.types'
import classNames from 'classnames'

type TextBlockWithImageProps = Omit<TextBlockWithImageType, 'content'> & {
  content: PortableTextBlock[]
}

const TextBlockWithImage = ({
  layout,
  image,
  content
}: TextBlockWithImageProps) => {
  return (
    <Section>
      <Container>
        <div className="flex items-center flex-col justify-center gap-10 md:justify-between md:flex-row md:gap-20">
          <RichTextRenderer
            className="flex-1 max-w-[480px]"
            content={content}
          />
          <div
            className={classNames('flex-1 max-w-[480px]', {
              'md:order-first': layout === 'right'
            })}
          >
            <SanityImage image={image} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default TextBlockWithImage
