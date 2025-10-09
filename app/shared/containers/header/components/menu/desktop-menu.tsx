import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MenuProps } from './menu'
import styles from './desktop-menu.module.scss'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Image from 'next/image'

export const DesktopMenu = ({ items }: MenuProps) => {
  const [activeLinkKey, setActiveLinkKey] = useState<string | null>(null)

  const pathname = usePathname()
  useEffect(() => {
    const key = items.find((link) => link.href === pathname)?._key
    setActiveLinkKey(key || null)
  }, [pathname])

  return (
    <nav className={styles['desktop-menu']}>
      <ul className={styles.list}>
        {items.map((item) => {
          const isActive = activeLinkKey === item._key
          const isExternalLink = item._type === 'external'
          return (
            <li
              key={item._key}
              className={classNames(
                styles.item,
                isActive ? styles['is-active'] : '',
                isExternalLink ? styles['is-external'] : ''
              )}
            >
              <Link
                className={styles.link}
                target={item._type === 'external' ? '_blank' : undefined}
                href={item.href}
              >
                {item.label}
              </Link>
              {item._type === 'external' && (
                <div className={styles.icon}>
                  <Image
                    height="16"
                    width="16"
                    src="images/icons/external-link.svg"
                    alt=""
                  />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
