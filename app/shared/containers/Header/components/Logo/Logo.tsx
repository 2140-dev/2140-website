import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styles.scss";

interface Props {
  image: ImageType;
}
export const Logo = ({ image }: Props) => (
  <div className="flex items-center">
    <Link href="/">
      <Image
        alt={image?.alt || ""}
        className="logo"
        width={0}
        height={0}
        src={urlForImage(image)?.width(120).fit("fill").url() as string}
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  </div>
);
