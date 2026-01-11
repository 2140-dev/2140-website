import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
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
