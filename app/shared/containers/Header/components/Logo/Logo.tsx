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
  <Box sx={{ position: "relative", zIndex: 99, maxWidth: 80 }}>
    <Link href="/">
      <Image
        alt={image?.alt || ""}
        width={0}
        height={0}
        src={urlForImage(image)?.width(120).fit("fill").url() as string}
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  </Box>
);
