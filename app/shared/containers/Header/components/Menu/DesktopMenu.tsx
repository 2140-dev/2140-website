import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { desktopItemSx, desktopMenuSx } from "./Menu.styles";
import { MenuProps } from "./Menu";
import Link from "next/link";
import { getInternalLinkUrl } from "@/app/utils/link";

export const DesktopMenu = ({ items }: MenuProps) => {
  return (
    <Box sx={{ display: "flex", gap: 5, justifyContent: "flex-end" }}>
      <List sx={desktopMenuSx}>
        {items.map((item) => (
          <ListItem key={item._key} sx={desktopItemSx}>
            <Link href={item.slug}>{item.label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
