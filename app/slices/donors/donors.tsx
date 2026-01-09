import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { Donors as DonorsProps } from 'sanity.types'
import { SanityImage } from '../../shared/components/sanity-image/sanity-image'

const Donors = ({ eyebrow, title, content, logos }: DonorsProps) => {
  return (
    <Section className="text-center">
      <Container size="sm">
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        <h2 className="strikethrough-black underline-black">
          <MarkdownRender>{title}</MarkdownRender>
        </h2>
        {content && <RichTextRenderer content={content} />}
      </Container>
      <Container className="flex items-center justify-center gap-10 mt-10 flex-wrap">
        {logos.map((image, index) => (
          <div key={index} className="max-w-[180px]">
            <SanityImage
              image={image}
              className="max-w-full w-auto h-auto max-h-[80px]"
            />
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default Donors
