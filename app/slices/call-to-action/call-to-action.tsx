import { Button } from 'app/shared/components/button/button'
import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { Image as ImageType } from 'app/types/image'
import { getInternalLinkUrl } from 'app/utils/link'
import { InternalResultType } from 'sanity/lib/results'
import { urlForImage } from 'sanity/lib/utils'
import Image from 'next/image'
import styles from './call-to-action.module.scss'
import { cn } from 'app/utils/classname'
import classNames from 'classnames'

interface Props {
  eyebrow?: string
  title: string
  layout: 'left' | 'right'
  image: ImageType
  content: string
  link: InternalResultType
}
const CallToAction = ({
  eyebrow,
  title,
  layout,
  image,
  content,
  link
}: Props) => {
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
            <Button variant="donate" href={getInternalLinkUrl(link)}>
              {link.label}
            </Button>
          </div>
          <div
            className={classNames(
              styles.inner,
              layout === 'left' ? styles.left : ''
            )}
          >
            <Image
              src={urlForImage(image)?.url() as string}
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              alt={image?.alt || ''}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CallToAction
