import { Button } from 'app/shared/components/button/button'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { getInternalLinkUrl } from 'app/utils/link'
import { HomepageQueryResultType } from '@/sanity/lib/results'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import styles from './hero.module.scss'
import { cn } from 'app/utils/classname'
import classNames from 'classnames'

export const Hero = ({
  title,
  excerpt,
  image,
  link
}: Partial<HomepageQueryResultType>) => {
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
          {link && (
            <Button href={getInternalLinkUrl(link)}>{link.label}</Button>
          )}
        </div>
        <div className={cn([styles.child, styles.right])}>
          <div className={styles.background}>
            <img src="images/background.svg" alt="" />
          </div>
          <Image
            width={0}
            height={0}
            alt={image?.alt || ''}
            src={urlForImage(image)?.url() as string}
            priority
            style={{
              maxWidth: '100%',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </Container>
    </div>
  )
}
