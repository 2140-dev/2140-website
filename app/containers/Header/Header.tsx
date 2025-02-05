import { Menu } from "@/app/containers/Header/components/Menu/Menu";
import { Logo } from "./components/Logo/Logo";
import { Image } from "@/app/types/image";
import { Link } from "@/app/types/link";
import { resolveLink } from "@/app/utils/link";
import React from "react";

interface Props {
  logo?: Image;
  items: any; // Link[];
}

export const Header = ({ logo, items }: Props) => {
  return (
    <header className="flex items-center justify-between container-xl">
      {logo && <Logo image={logo} />}
      {items?.length > 0 && <Menu items={items} />}
    </header>
  );
};
