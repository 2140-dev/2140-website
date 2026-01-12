'use client'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { MenuProps } from './menu'
import classNames from 'classnames'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const MobileMenu = ({ items, donate }: MenuProps) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onMenuToggle = useCallback((): void => {
    setIsMobileMenuOpen((state: boolean) => {
      document.documentElement.classList.toggle('overflow-hidden', !state)
      return !state
    })
  }, [])

  const handleClose = useCallback((): void => {
    document.documentElement.classList.remove('overflow-hidden')
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div>
      <MenuIcon isOpen={isMobileMenuOpen} handleClick={onMenuToggle} />
      <nav className={isMobileMenuOpen ? 'block' : 'hidden'}>
        <ul
          className={classNames(
            'flex flex-col items-center gap-5 justify-center',
            'bg-yellow-200 h-screen w-screen left-0 p-3 fixed top-0 z-4 list-none m-0'
          )}
        >
          {items.map((item) => {
            return (
              <li
                key={item._key}
                className={classNames(
                  'mobile-menu-item',
                  item.href === pathname && 'active'
                )}
              >
                <Link
                  className="no-underline flex gap-2 items-center"
                  target={item._type === 'external' ? '_blank' : undefined}
                  href={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                  {item._type === 'external' && (
                    <Image
                      height={16}
                      width={16}
                      src="images/icons/external-link.svg"
                      alt=""
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

const MenuIcon = ({
  handleClick,
  isOpen
}: {
  handleClick: () => void
  isOpen: boolean
}) => {
  return (
    <div className="relative z-[5]">
      <button
        className="bg-black rounded-[48px] h-12 w-12 border-none cursor-pointer flex items-center justify-center"
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <Image
          width="16"
          height="16"
          src={isOpen ? 'images/menu-close.svg' : 'images/menu-open.svg'}
          alt="Mobile menu icon"
        />
      </button>
    </div>
  )
}
