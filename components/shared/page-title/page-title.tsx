import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { MarkdownRender } from '../markdown-renderer/markdown-renderer'

interface Props {
  title: string
  excerpt?: string
}
export const PageTitle = ({ title, excerpt }: Props) => {
  return (
    <Section className="pt-45 text-center pb-20">
      <Container size="sm">
        <h1 className="underline-yellow strikethrough-black text-custom-3xl">
          <MarkdownRender>{title}</MarkdownRender>
        </h1>
        {excerpt && <p className="text-custom-l">{excerpt}</p>}
      </Container>
    </Section>
  )
}
