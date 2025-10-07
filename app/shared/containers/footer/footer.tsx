'use client'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { Container } from 'app/shared/layouts/container/container'
import { SettingsQueryResultType } from '@/sanity/lib/results'
import Link from 'next/link'
import styles from './footer.module.scss'
import classNames from 'classnames'
type Props = Pick<SettingsQueryResultType, 'email' | 'gpg' | 'disclaimer'>

export const Footer = ({ email, disclaimer, gpg }: Props) => {
  const mailto = `mailto:${email}`
  return (
    <Container size="lg" className={classNames('text-s', styles.footer)}>
      <div className={styles.email}>
        <Link href={mailto} className={styles.link}>
          <img src="images/icons/email.svg" alt="" className={styles.icon} />
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
