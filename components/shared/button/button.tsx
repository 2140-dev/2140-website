import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { OutlineCircle } from '../outline-circle/outline-circle'

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'className'> & {
  children?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'donate'
  href?: Url
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  href,
  ...rest
}: Props) => {
  const classes = classNames('button', `button-${variant}`, className)

  const Content = (
    <>
      {children}
      {['primary', 'donate'].includes(variant) && (
        <span className="icon items-center flex justify-center relative">
          <OutlineCircle size="sm" />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {Content}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as any)}>
      {Content}
    </button>
  )
}
