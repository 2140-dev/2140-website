import { Container } from 'app/shared/layouts/container/container'
import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { resolveInternalOrExternalLink } from 'app/utils/link'
import { Button } from 'app/shared/components/button/button'
import { NotFoundTemplateProps } from '@/app/types/templates'

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
        {items?.map((item, index) => {
          const { href, label } = resolveInternalOrExternalLink(item)
          return (
            <Button key={index} variant="secondary" href={href}>
              {label}
            </Button>
          )
        })}
      </Container>
    </div>
  )
}
