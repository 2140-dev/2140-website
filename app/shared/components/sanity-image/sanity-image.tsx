import { Image as ImageType } from "@/app/types/image";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";

interface Props {
  image: ImageType;
}
export const SanityImage = ({ image }: Props) => {
  return (
    <img
      src={urlForImage(image)?.url() as string}
      width={100}
      height={100}
      style={{ width: "100%", maxWidth: "100%", height: "auto" }}
      alt={image?.alt || ""}
    />
  );
};
