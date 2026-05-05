import { Button } from 'components/shared/button/button'
import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'components/shared/sanity-image/sanity-image'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { getInternalLinkUrl } from 'lib/link'
import classNames from 'classnames'
import { CenteredText as CenteredTextType } from 'sanity.types'
import { InternalLink } from 'types/link'

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
    <Section>
      <Container size="sm" className="flex flex-col text-center gap-20">
        <div>
          {eyebrow && (
            <Eyebrow color="yellow" text={eyebrow} className="mx-auto" />
          )}
          <h2 className="strikethrough-black underline-yellow">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
          {content && <RichTextRenderer content={content} />}
          {link?.slug && link?.label && (
            <Button variant="secondary" href={getInternalLinkUrl(link)}>
              {link.label}
            </Button>
          )}
        </div>
        {image && (
          <div
            className={classNames(
              'px-20',
              layout === 'below' ? 'order-first' : 'order-last'
            )}
          >
            <SanityImage image={image} />
          </div>
        )}
      </Container>
    </Section>
  )
}

export default CenteredText
