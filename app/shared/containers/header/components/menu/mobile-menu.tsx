"use client";
import { Box, ButtonBase, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MenuProps } from "./menu";
import { mobileMenuSx } from "./menu.styles";

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
          {items.map((item) => {
            return (
              <ListItem
                key={item._key}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textAlign: "center",
                  width: "auto",
                  "&:not(:last-child)": {
                    mb: 3,
                  },

                  a: {
                    textDecoration: "none",
                  },
                }}
              >
                <Link
                  target={item._type === "external" ? "_blank" : undefined}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

const MenuIcon = ({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 5,
      }}
    >
      <ButtonBase
        sx={{
          bgcolor: "primary.main",
          borderRadius: 48,
          height: 48,
          width: 48,
        }}
        onClick={handleClick}
      >
        <img
          src={isOpen ? "images/menu-close.svg" : "images/menu-open.svg"}
          alt="Mobile menu icon"
        />
      </ButtonBase>
    </Box>
  );
};
