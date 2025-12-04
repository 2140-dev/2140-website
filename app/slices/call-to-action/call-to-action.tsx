import { Button } from 'app/shared/components/button/button'
import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { getInternalLinkUrl } from 'app/utils/link'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import styles from './call-to-action.module.scss'
import classNames from 'classnames'
import { CallToAction as CallToActionType } from 'sanity.types'
import { InternalLink } from '@/app/types/link'

type CallToActionProps = Omit<CallToActionType, 'link'> & {
  link: InternalLink
}
const CallToAction = ({
  eyebrow,
  title,
  layout,
  image,
  content,
  link
}: CallToActionProps) => {
  const src = urlForImage(image)?.url() as string
  return (
    <Section className={styles['call-to-action']}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            {eyebrow && <Eyebrow color="white" text={eyebrow} />}
            <h2 className="strike-white under-white">
              <MarkdownRender>{title}</MarkdownRender>
            </h2>
            {content && <p className={styles.content}>{content}</p>}
            {link?.slug && link?.label && (
              <Button variant="donate" href={getInternalLinkUrl(link)}>
                {link.label}
              </Button>
            )}
          </div>
          {src && (
            <div
              className={classNames(
                styles.inner,
                layout === 'left' ? styles.left : ''
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
