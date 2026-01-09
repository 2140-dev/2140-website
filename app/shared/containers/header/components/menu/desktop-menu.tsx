import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MenuProps } from './menu'
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
    <nav className="flex justify-end">
      <ul className="flex gap-10 list-none">
        {items.map((item) => {
          const isActive = activeLinkKey === item._key
          const isExternalLink = item._type === 'external'
          return (
            <li
              key={item._key}
              className={classNames(
                'mb-0 p-0 relative whitespace-nowrap menu-item',
                isActive && 'active',
                isExternalLink && 'flex items-center justify-end mr-5'
              )}
            >
              <Link
                className="no-underline"
                target={item._type === 'external' ? '_blank' : undefined}
                href={item.href}
              >
                {item.label}
              </Link>
              {item._type === 'external' && (
                <div className="h-4 left-[calc(100%+0.25rem)] absolute w-4">
                  <Image
                    height={16}
                    width={16}
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
