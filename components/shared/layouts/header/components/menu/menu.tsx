import { ResolvedLink } from 'types/resolved-link'
import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'

export interface MenuProps {
  items: ResolvedLink[]
  donate?: string
  isMobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

export const Menu = ({
  isMobile,
  ...props
}: MenuProps & {
  isMobile: boolean
}) => {
  return isMobile ? <MobileMenu {...props} /> : <DesktopMenu {...props} />
}
