import { Button } from 'app/shared/components/button/button'
import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { getInternalLinkUrl } from 'app/utils/link'
import styles from './centered-text.module.scss'
import { CenteredText as CenteredTextType } from 'sanity.types'
import { InternalLink } from '@/app/types/link'

type CenteredTextProps = CenteredTextType & {
  link: InternalLink
}
const CenteredText = ({
  eyebrow,
  title,
  content,
  image,
  link,
  layout
}: CenteredTextProps) => {
  return (
    <Section className={styles['centered-text']}>
      <Container size="sm" className={styles.container}>
        <div>
          {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
          <h2 className="strike-black under-black">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
          <Container size="xs">
            {content && <RichTextRenderer content={content} />}
            {link?.slug && link?.label && (
              <Button variant="secondary" href={getInternalLinkUrl(link)}>
                {link.label}
              </Button>
            )}
          </Container>
        </div>
        {image && (
          <div
            className={styles.image}
            style={{ order: layout === 'below' ? -1 : 1 }}
          >
            <SanityImage image={image} />
          </div>
        )}
      </Container>
    </Section>
  )
}

export default CenteredText
