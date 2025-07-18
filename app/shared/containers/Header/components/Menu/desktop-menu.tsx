import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { MenuProps } from "./menu";
import { desktopItemSx, desktopMenuSx } from "./menu.styles";

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
