import { Menu } from "@/app/containers/Header/components/Menu/Menu";
import { Logo } from "./components/Logo/Logo";
import { Image } from "@/app/types/image";
import debounce from "lodash/debounce";
import { Internal } from "@/app/types/link";
import React from "react";
import "./styles.scss";

interface Props {
  logo?: Image;
  items: Internal[];
}

export const Header = ({ logo, items }: Props) => {
  const [isSticky, setIsSticky] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleScroll = debounce(() => {
    const div = ref?.current;
    const scrollY = window.scrollY;

    if (div) {
      if (scrollY < 80) {
        div.style.position = "absolute";
        div.style.transform = "none";
        div.style.transition = "none";
        div.style.boxShadow = "none";
        div.style.background = "transparent";
        setIsSticky(false);
      }
      // set isSticky to true if the user has scrolled more than 80px
      if (scrollY >= 80 && !isSticky) {
        const height = div.getBoundingClientRect().height;
        if (window.scrollY > height) {
          div.style.position = "fixed";
          div.style.transform = "translateY(-100%)";
          div.style.background = "#fff";

          setTimeout(() => {
            div.style.transition = "all 0.4s cubic-bezier(0.83, 0, 0.17, 1)";
          }, 100);

          setTimeout(() => {
            div.style.transform = "translateY(0)";
            div.style.boxShadow = "0 0 40px rgba(0, 0, 0, 0.1)";
          }, 300);

          setIsSticky(true);
        }
      }
    }
  }, 100);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header ref={ref} className="header">
      <div className="flex items-center py-2 justify-between container-xl">
        {logo && <Logo image={logo} />}
        {items?.length > 0 && <Menu items={items} />}
      </div>
    </header>
  );
};
