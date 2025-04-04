import { Internal } from "@/app/types/link";
import { getInternalLink } from "@/app/utils/link";
import Link from "next/link";
import React from "react";

interface Props {
  items: Internal[];
}

export const Menu = ({ items }: Props) => {
  return (
    <nav>
      <ul className="flex gap-7">
        {items.map((item) => {
          const link = getInternalLink(item.document, item.slug);
          return link ? (
            <li key={item?._key}>
              <Link href={getInternalLink(item.document, item.slug)}>
                {item?.label}
              </Link>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  );
};
