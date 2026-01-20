import { ResolvedLink } from 'app/types/resolved-link'
import { resolveInternalOrExternalLink } from 'app/utils/link'
import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'
import { InternalOrExternalLink } from '@/app/types/link'

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
