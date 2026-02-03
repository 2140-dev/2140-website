import { Container } from 'components/shared/layouts/container/container'
import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Button } from 'components/shared/button/button'
import { NotFoundTemplateProps } from 'types/templates'

export const NotFoundTemplate = ({
  eyebrow,
  title,
  content,
  items
}: Partial<NotFoundTemplateProps>) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <Container size="sm">
        {eyebrow && <Eyebrow color="blue" text={eyebrow} />}
        <h1>{title}</h1>
        {content && <RichTextRenderer content={content} />}
        <Button variant="primary" href="/">
          Back to homepage
        </Button>
      </Container>
    </div>
  )
}
