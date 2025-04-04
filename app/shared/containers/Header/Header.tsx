"use client";

import { Box } from "@mui/material";
import { Logo } from "./components/Logo/Logo";
import debounce from "lodash/debounce";
import React, { useEffect, useRef, useState } from "react";
import { ImageResultType, InternalResultType } from "@/sanity/lib/results";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { colors } from "@/app/theme/colors";
import { Container } from "@/app/shared/layouts/Container/Container";
import { Menu } from "@/app/shared/containers/Header/components/Menu/Menu";

interface Props {
  logo: ImageResultType;
  items: InternalResultType[];
}

interface Props {
  logo: ImageResultType;
  items: InternalResultType[];
}

export const Header = ({ logo, items }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
          div.style.background = colors.primary.white;

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

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return;
  }, [handleScroll]);

  return (
    <Box
      ref={ref}
      sx={{
        color: "primary.main",
        position: "absolute",
        width: "100%",
        zIndex: 999,
      }}
    >
      <Container
        size="lg"
        sx={{
          alignItems: "center",
          height: 80,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Logo image={logo} />
        <Menu isMobile={isMobile} items={items} />
      </Container>
    </Box>
  );
};
