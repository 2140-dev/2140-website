import { ResolvedLink } from "app/types/resolved-link";
import { resolveInternalOrExternalLink } from "app/utils/link";
import { LinkResultType } from '@/sanity/lib/results';
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export interface MenuProps {
  items: ResolvedLink[];
}

interface Props {
  isMobile: boolean;
  items: LinkResultType[];
}
export const Menu = ({ isMobile, items }: Props) => {
  const commonProps = {
    items: items.map((item) => resolveInternalOrExternalLink(item)),
  };

  return isMobile ? (
    <MobileMenu {...commonProps} />
  ) : (
    <DesktopMenu {...commonProps} />
  );
};
