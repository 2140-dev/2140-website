'use client'

import { Menu } from 'app/shared/containers/header/components/menu/menu'
import { Container } from 'app/shared/layouts/container/container'
import debounce from 'lodash/debounce'
import { useEffect, useRef, useState } from 'react'
import { Logo } from './components/logo/logo'
import classNames from 'classnames'
import { SanityImage } from '@/app/types/image'
import { InternalOrExternalLink } from '@/app/types/link'

interface Props {
  logo: SanityImage
  items: InternalOrExternalLink[]
}

export const Header = ({ logo, items }: Props) => {
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const [isSticky, setIsSticky] = useState(false)

  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
      const checkMobile = () => setIsMobile(window.innerWidth < 900)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleScroll = debounce(() => {
    const div = ref?.current
    const scrollY = window.scrollY

    if (div) {
      if (scrollY < 80) {
        div.style.position = 'absolute'
        div.style.transform = 'none'
        div.style.transition = 'none'
        div.style.boxShadow = 'none'
        div.style.background = 'transparent'
        setIsSticky(false)
      }
      // set isSticky to true if the user has scrolled more than 80px
      if (scrollY >= 80 && !isSticky) {
        const height = div.getBoundingClientRect().height
        if (window.scrollY > height) {
          div.style.position = 'fixed'
          div.style.transform = 'translateY(-100%)'
          div.style.background = '#fff'

          setTimeout(() => {
            div.style.transition = 'all 0.4s cubic-bezier(0.83, 0, 0.17, 1)'
          }, 100)

          setTimeout(() => {
            div.style.transform = 'translateY(0)'
            div.style.boxShadow = '0 0 40px rgba(0, 0, 0, 0.1)'
          }, 300)

          setIsSticky(true)
        }
      }
    }
  }, 100)

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    return
  }, [handleScroll])

  return (
    <header
      ref={ref}
      className={classNames(
        'text-black absolute w-full z-[99]',
        isSticky ? 'overflow-hidden' : 'overflow-visible'
      )}
    >
      <Container size="lg" className="flex items-center h-20 justify-between">
        <Logo image={logo} />
        <Menu isMobile={isMobile} items={items} />
      </Container>
    </header>
  )
}
