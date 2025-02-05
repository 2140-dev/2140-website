import { Image } from "@/app/types/image";
import { Link } from "@/app/types/link";
import { resolveLink } from "@/app/utils/link";
import React from "react";

interface Props {
  items: Link[];
}

export const Menu = ({ items }: Props) => {
  return (
    <nav>
      <ul className="flex gap-7">
        {items.map((item) => {
          const link = resolveLink(item);
          return link ? <li key={item?._key}>{link?.label}</li> : null;
        })}
      </ul>
    </nav>
  );
};
