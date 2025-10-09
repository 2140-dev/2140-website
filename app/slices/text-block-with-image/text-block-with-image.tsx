import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { PortableTextBlock } from 'sanity'
import styles from './text-block-with-image.module.scss'
import { TextBlockWithImage as TextBlockWithImageType } from 'sanity.types'

type TextBlockWithImageProps = Omit<TextBlockWithImageType, 'content'> & {
  content: PortableTextBlock[]
}

const TextBlockWithImage = ({
  layout,
  image,
  content
}: TextBlockWithImageProps) => {
  return (
    <Section className={styles['text-block-with-image']}>
      <Container>
        <div className={styles.wrapper}>
          <RichTextRenderer className={styles.editor} content={content} />
          <div className={layout === 'right' ? styles.right : ''}>
            <SanityImage image={image} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default TextBlockWithImage
