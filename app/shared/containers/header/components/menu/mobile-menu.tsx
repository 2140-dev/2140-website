'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MenuProps } from './menu'
import styles from './mobile-menu.module.scss'
import classNames from 'classnames'

export const MobileMenu = ({ items }: MenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={styles['mobile-menu']}>
      <MenuIcon isOpen={isMobileMenuOpen} handleClick={handleMenuItemClick} />
      <nav
        className={classNames(styles.nav, isMobileMenuOpen ? styles.open : '')}
      >
        <ul className={styles.list}>
          {items.map((item) => {
            return (
              <li key={item._key} className={styles.item}>
                <Link
                  target={item._type === 'external' ? '_blank' : undefined}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
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
    <div className={styles.icon}>
      <button
        className={styles.button}
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <img
          src={isOpen ? 'images/menu-close.svg' : 'images/menu-open.svg'}
          alt="Mobile menu icon"
        />
      </button>
    </div>
  )
}
