"use client";
import React, { useState } from "react";
import { List, ListItem, Box, ButtonBase } from "@mui/material";
import { buttonSx, iconSx, mobileItemSx, mobileMenuSx } from "./Menu.styles";
import { MenuProps } from "./Menu";
import Link from "next/link";

export const MobileMenu = ({ items }: MenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box>
      <MenuIcon isOpen={isMobileMenuOpen} handleClick={handleMenuItemClick} />
      <Box sx={{ display: isMobileMenuOpen ? "block" : "none" }}>
        <List sx={mobileMenuSx}>
          {items.map((item) => (
            <ListItem key={item._key} sx={mobileItemSx}>
              <Link href={item.slug}>{item.label}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const icon = {
  true: "images/menu-open.svg",
  false: "images/menu-close.svg",
};
const MenuIcon = ({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box sx={iconSx}>
      <ButtonBase sx={buttonSx} onClick={handleClick}>
        <img src={icon[`${isOpen}`]} alt="Mobile menu icon" />
      </ButtonBase>
    </Box>
  );
};
