import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { imageBuilder } from '@/sanity/lib/utils'
import styles from './donors.module.scss'
import { Donors as DonorsProps } from 'sanity.types'
import Image from 'next/image'

const Donors = ({ eyebrow, title, content, logos }: DonorsProps) => {
  return (
    <Section className={styles.donors}>
      <Container size="sm">
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <h2 className="strike-black under-black">
          <MarkdownRender>{title}</MarkdownRender>
        </h2>
        {content && <RichTextRenderer content={content} />}
      </Container>
      <Container className={styles.logos}>
        {logos.map((image, index) => (
          <div key={index} className={styles.logo}>
            <Image
              src={imageBuilder?.image(image).url()}
              alt={image?.alt || ''}
            />
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default Donors
