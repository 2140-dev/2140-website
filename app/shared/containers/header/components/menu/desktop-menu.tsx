import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuProps } from "./menu";

export const DesktopMenu = ({ items }: MenuProps) => {
  const [activeLinkKey, setActiveLinkKey] = useState<string | null>(null);

  useEffect(() => {
    const active = items.find((item) => {
      return window.location.pathname === item.href;
    });

    if (active) {
      setActiveLinkKey(active?._key || null);
    }
  }, []);
  return (
    <Box sx={{ display: "flex", gap: 5, justifyContent: "flex-end" }}>
      <List
        sx={{
          display: "flex",
          p: 0,
        }}
      >
        {items.map((item) => {
          const isActive = activeLinkKey === item._key;
          return (
            <ListItem
              key={item._key}
              sx={{
                mb: 0,
                py: 0.5,
                px: 0,
                position: "relative",
                whiteSpace: "nowrap",
                "&:not(:last-child)": {
                  mr: 7,
                },

                "&::before, &::after": {
                  content: "''",
                  bgcolor: "primary.main",
                  bottom: 0,
                  width: isActive ? "50%" : 0,
                  height: "1px",
                  position: "absolute",
                  transition: "all 0.2s ease-in",
                },
                "&::before": {
                  right: "50%",
                },
                "&::after": {
                  left: "50%",
                },
                "&:hover": {
                  "&::before, &::after": {
                    width: "50%",
                  },
                },

                a: {
                  textDecoration: "none",
                },
              }}
            >
              <Link
                target={item._type === "external" ? "_blank" : undefined}
                href={item.href}
                onClick={() => setActiveLinkKey(item._key)}
              >
                {item.label}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
