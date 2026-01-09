import { Button } from 'app/shared/components/button/button'
import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { getInternalLinkUrl } from 'app/utils/link'
import classNames from 'classnames'
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
    <Section>
      <Container size="sm" className="flex flex-col text-center gap-20">
        <div>
          {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
          <h2 className="strikethrough-black underline-black">
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
            className={classNames('px-20', layout === 'below' ? 'order-first' : 'order-last')}
          >
            <SanityImage image={image} />
          </div>
        )}
      </Container>
    </Section>
  )
}

export default CenteredText
