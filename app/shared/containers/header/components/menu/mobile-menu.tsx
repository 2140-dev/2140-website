'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MenuProps } from './menu'
import classNames from 'classnames'
import Image from 'next/image'

export const MobileMenu = ({ items }: MenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
      <MenuIcon isOpen={isMobileMenuOpen} handleClick={handleMenuItemClick} />
      <nav className={classNames('hidden', isMobileMenuOpen && 'block')}>
        <ul className="flex flex-col items-center bg-yellow-200 h-screen justify-center left-0 p-3 fixed top-0 transition-all duration-500 delay-1000 ease-in w-screen z-[4] list-none m-0">
          {items.map((item) => {
            return (
              <li
                key={item._key}
                className="text-2xl font-semibold text-center w-auto [&:not(:last-child)]:mb-3"
              >
                <Link
                  className="no-underline"
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
