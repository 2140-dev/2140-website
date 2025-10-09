import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import Link from 'next/link'
import styles from './footer.module.scss'
import classNames from 'classnames'
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
    <Container size="lg" className={classNames('text-s', styles.footer)}>
      <div className={styles.email}>
        <Link href={mailto} className={styles.link}>
          <Image
            height="20"
            width="20"
            src="images/icons/email.svg"
            alt=""
            className={styles.icon}
          />
          {email}
        </Link>
        {gpg && (
          <p>
            <b>GPG</b>: {gpg}
          </p>
        )}
      </div>
      <RichTextRenderer className={styles.text} content={disclaimer} />
    </Container>
  )
}
