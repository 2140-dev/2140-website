import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box } from "@mui/material";

interface Props {
  image: ImageType;
}
export const Logo = ({ image }: Props) => (
  <Box
    sx={{
      // bgcolor: "yellow.200",
      position: "relative",
      zIndex: 99,
      maxWidth: 100,
    }}
  >
    <Link href="/">
      <Image
        alt={image?.alt || ""}
        width={0}
        height={0}
        src={urlForImage(image)?.fit("fill").url() as string}
        style={{
          width: "100%",
          height: "auto",
          // "-webkit-filter": "drop-shadow(0 0 0 20px, rgba(0, 0, 0, 0.5))",
          filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.10))",
        }}
      />
    </Link>
  </Box>
);
