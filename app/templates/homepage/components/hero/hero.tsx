import { Button } from 'app/shared/components/button/button'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { getInternalLinkUrl } from 'app/utils/link'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import styles from './hero.module.scss'
import classNames from 'classnames'
import { SanityImage } from '@/app/types/image'
import { InternalLink } from '@/app/types/link'

interface HeroProps {
  title: string
  excerpt?: string
  image: SanityImage
  link: InternalLink
}
export const Hero = ({ title, excerpt, image, link }: HeroProps) => {
  const src = urlForImage(image)?.url()
  return (
    <div className={styles.hero}>
      <Container size="lg" className={styles.container}>
        <div className={classNames(styles.child, styles.left)}>
          <h1
            className={classNames(styles.title, 'under-yellow strike-yellow')}
          >
            <MarkdownRender>{title}</MarkdownRender>
          </h1>
          {excerpt && <p className="text-l">{excerpt}</p>}
          {link?.slug && link?.label && (
            <Button href={getInternalLinkUrl(link)}>{link.label}</Button>
          )}
        </div>
        <div className={classNames(styles.child, styles.right)}>
          <div className={styles.background}>
            <img src="images/background.svg" alt="" />
          </div>
          {src && (
            <Image
              width={0}
              height={0}
              alt={image?.alt || ''}
              src={src}
              priority
              style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto'
              }}
            />
          )}
        </div>
      </Container>
    </div>
  )
}
