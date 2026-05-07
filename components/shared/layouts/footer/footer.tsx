import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import Link from 'next/link'
import type { PortableTextBlock } from 'sanity'
import { EmailIcon } from '../../icons/email-icon'

type FooterProps = {
  email: string
  disclaimer: PortableTextBlock[]
  gpg?: string
}
export const Footer = ({ email, disclaimer, gpg }: FooterProps) => {
  const mailto = `mailto:${email}`
  return (
    <div className="border-t border-gray-100/20">
      <Container
        size="lg"
        className="text-custom-s flex flex-col gap-8 pb-4 pt-4 md:items-center md:flex-row md:justify-between"
      >
        <div className="flex gap-2">
          <Link href={mailto} className="flex items-center gap-2">
            <EmailIcon />
            {email}
          </Link>
          {gpg && (
            <p>
              <b>GPG</b>: {gpg}
            </p>
          )}
        </div>
        <RichTextRenderer
          className="text-gray-200 text-xs"
          content={disclaimer}
        />
      </Container>
    </div>
  )
}
