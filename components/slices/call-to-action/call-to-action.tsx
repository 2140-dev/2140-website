import { Button } from 'components/shared/button/button'
import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { getInternalLinkUrl, resolveInternalOrExternalLink } from 'utils/link'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import classNames from 'classnames'
import { CallToAction as CallToActionType } from 'sanity.types'
import { InternalLink, InternalOrExternalLink } from 'types/link'

type CallToActionProps = Omit<CallToActionType, 'link'> & {
  link: InternalOrExternalLink
}
const CallToAction = ({
  eyebrow,
  title,
  layout,
  image,
  content,
  link
}: CallToActionProps) => {
  const src = urlForImage(image)?.url()

  const { label, href } = resolveInternalOrExternalLink(link)
  return (
    <Section className="bg-yellow-200 mt-20 [&:not(:last-of-type)]:mb-20">
      <Container>
        <div className="flex items-center justify-between flex-col gap-20 lg:gap-40 lg:flex-row">
          <div className="flex-1">
            {eyebrow && <Eyebrow color="white" text={eyebrow} />}
            <h2 className="strikethrough-white underline-white">
              <MarkdownRender>{title}</MarkdownRender>
            </h2>
            {content && <p className="mb-10">{content}</p>}
            {label && href && (
              <Button variant="donate" href={href}>
                {label}
              </Button>
            )}
          </div>
          {src && (
            <div
              className={classNames(
                'flex-1 max-w-[480px]',
                layout === 'left' && 'md:order-first'
              )}
            >
              <Image
                src={src}
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                alt={image?.alt || ''}
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default CallToAction
