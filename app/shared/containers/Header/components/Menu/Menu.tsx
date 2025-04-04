import React from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { InternalResultType } from "@/sanity/lib/results";
import { getInternalLinkUrl } from "@/app/utils/link";

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
