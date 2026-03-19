import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { Donors as DonorsProps } from 'sanity.types'
import { SanityImage } from '../../shared/sanity-image/sanity-image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const Donors = ({ eyebrow, title, content, items }: DonorsProps) => {
  return (
    <Section className="text-center">
      <Container size="md">
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <h2 className="strikethrough-black underline-yellow">
          <MarkdownRender>{title}</MarkdownRender>
        </h2>
        {content && (
          <RichTextRenderer
            className="max-w-sm mx-auto lg:px-10"
            content={content}
          />
        )}
        <div className="flex items-center justify-center gap-20 mt-20 flex-wrap">
          {items.map((item) => (
            <Link
              key={item._key}
              target="_blank"
              href={item.url}
              className="flex flex-col items-center justify-center gap-2 md:gap-4 max-w-60"
            >
              <SanityImage
                image={item.image}
                className="max-w-full w-auto h-auto max-h-20"
              />
              <p className="flex items-center justify-center gap-2">
                {item.name} <ExternalLink size={12} />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Donors
