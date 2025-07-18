import { getInternalLinkUrl } from "@/app/utils/link";
import { InternalResultType } from "@/sanity/lib/results";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export interface MenuProps {
  items: InternalResultType[];
}

interface Props extends MenuProps {
  isMobile: boolean;
}
export const Menu = ({ isMobile, items }: Props) => {
  const commonProps = {
    items: items.map((item) => ({
      ...item,
      slug: getInternalLinkUrl(item),
    })),
  };
  return isMobile ? (
    <MobileMenu {...commonProps} />
  ) : (
    <DesktopMenu {...commonProps} />
  );
};
