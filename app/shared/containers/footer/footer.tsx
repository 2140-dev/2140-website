import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import Link from 'next/link'
import type { PortableTextBlock } from 'sanity'
import Image from 'next/image'

type FooterProps = {
  email: string
  disclaimer: PortableTextBlock[]
  gpg?: string
}
export const Footer = ({ email, disclaimer, gpg }: FooterProps) => {
  const mailto = `mailto:${email}`
  return (
    <Container
      size="lg"
      className="text-custom-s flex flex-col gap-8 pb-4 pt-4 md:items-center md:flex-row md:justify-between"
    >
      <div className="flex gap-2">
        <Link href={mailto} className="flex items-center gap-2">
          <Image
            height="20"
            width="20"
            src="images/icons/email.svg"
            alt=""
            className="max-w-5"
          />
          {email}
        </Link>
        {gpg && (
          <p>
            <b>GPG</b>: {gpg}
          </p>
        )}
      </div>
      <div>
        <RichTextRenderer
          className="text-gray-200 text-xs"
          content={disclaimer}
        />
        <p className="text-gray-200 text-xs flex gap-2 items-center">
          Designed & developed by{' '}
          <Link href="http://cherryale.dev/" target="_blank">
            <img src="images/cherry-ale.svg" alt="Logo of Cherry Ale" />
          </Link>
        </p>
      </div>
    </Container>
  )
}
