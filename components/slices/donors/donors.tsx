import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { Donors as DonorsProps } from 'sanity.types'
import { SanityImage } from '../../shared/sanity-image/sanity-image'

const Donors = ({ eyebrow, title, content, logos }: DonorsProps) => {
  return (
    <Section className="text-center">
      <Container size="md">
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <h2 className="strikethrough-black underline-black">
          <MarkdownRender>{title}</MarkdownRender>
        </h2>
        {content && (
          <RichTextRenderer
            className="max-w-sm mx-auto lg:px-10"
            content={content}
          />
        )}
        <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
          {logos.map((image, index) => (
            <div key={index} className="max-w-45">
              <SanityImage
                image={image}
                className="max-w-full w-auto h-auto max-h-20"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Donors
