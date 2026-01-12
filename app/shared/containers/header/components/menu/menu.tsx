import { ResolvedLink } from 'app/types/resolved-link'
import { resolveInternalOrExternalLink } from 'app/utils/link'
import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'
import { InternalOrExternalLink } from '@/app/types/link'

export interface MenuProps {
  items: ResolvedLink[]
  donate?: string
}

interface Props {
  isMobile: boolean
  items: InternalOrExternalLink[]
  donate?: string
}
export const Menu = ({ isMobile, items, donate }: Props) => {
  const commonProps = {
    items: items.map((item) => resolveInternalOrExternalLink(item))
  }

  return isMobile ? (
    <MobileMenu {...commonProps} donate={donate} />
  ) : (
    <DesktopMenu {...commonProps} />
  )
}
