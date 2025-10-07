import { Image as ImageType } from "app/types/image";
import { urlForImage } from '@/sanity/lib/utils';
import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

interface Props {
  image: ImageType;
}
export const Logo = ({ image }: Props) => (
  <div className={styles.logo}>
    <Link href="/" className={styles.link}>
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
  </div>
);
