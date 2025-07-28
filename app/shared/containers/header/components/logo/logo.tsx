import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: ImageType;
}
export const Logo = ({ image }: Props) => (
  <Box
    sx={{
      maxWidth: 100,
      position: "relative",
      zIndex: 5,
      "&::before": {
        content: '""',
        display: "block",
        height: 600,
        bgcolor: "yellow.200",
        right: -250,
        borderRadius: `100% 30% 60% 70% / 50% 40% 70% 70%`,
        position: "absolute",
        width: 1000,
        zIndex: 4,
        top: -500,
      },
    }}
  >
    <Link href="/" style={{ position: "relative", zIndex: 4 }}>
      <Image
        alt={image?.alt || ""}
        width={0}
        height={0}
        src={urlForImage(image)?.fit("fill").url() as string}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Link>
  </Box>
);
