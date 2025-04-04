import { getInternalLink } from "@/app/utils/link";
import { urlForImage } from "@/sanity/lib/utils";
import { Homepage } from "@/sanity/sanity.types";
import { Image } from "next-sanity/image";
import Link from "next/link";
import React from "react";

type Props = Pick<Homepage, "title" | "excerpt" | "link" | "image">;
export const Hero = ({ title, excerpt, link, image }: Props) => {
  return (
    <div className="container-xl flex items-center gap-10">
      <div className="pl-10 left flex-1">
        <h1 className="mb-4">{title}</h1>
        <p className="blurb body1">{excerpt}</p>
      </div>
      <div className="background">
        <img src="../../images/background.svg" alt="" />
      </div>
      <div className="right flex-1">
        <Image
          alt={image?.alt || ""}
          width={0}
          height={0}
          src={urlForImage(image)?.url() as string}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
