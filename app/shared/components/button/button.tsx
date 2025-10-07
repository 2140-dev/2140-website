import { ComponentPropsWithoutRef } from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'className'> & {
  children?: string
  variant?: 'primary' | 'secondary' | 'donate'
  href?: Url
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  ...rest
}: Props) => {
  const className = classNames(styles.button, styles[`button-${variant}`])

  const Content = (
    <>
      {children}
      <span className={styles.icon}>
        {['primary', 'donate'].includes(variant) && (
          <OutlineCircle variant={variant} />
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={className} {...rest}>
        {Content}
      </Link>
    )
  }

  return (
    <button className={className} {...(rest as any)}>
      {Content}
    </button>
  )
}

const strokeColor: Record<string, string> = {
  primary: '#212121',
  secondary: 'transparent',
  donate: '#212121'
}

const OutlineCircle = ({ variant = 'primary' }: Pick<Props, 'variant'>) => {
  return (
    <svg
      className={styles.outline}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <circle
        cx="32"
        cy="32"
        r="31.5"
        style={{
          stroke: strokeColor[variant],
          strokeWidth: 1,
          strokeDasharray: 170
        }}
      />
    </svg>
  )
}
