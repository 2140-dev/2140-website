import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  blurb: string;
  link: any;
  image: any;
}
export const Hero = ({ title, blurb, link, image }: Props) => {
  return (
    <div className="wrapper">
      <div className="container-l">
        <div className="left">
          <h1 className="mb-4">
            {/* <MarkdownRender>{HERO_WORDING.title}</MarkdownRender> */}
            {title}
          </h1>
          <p className="blurb body1">{blurb}</p>
          <Link href="about" className="button mt-4">
            {link.text}
          </Link>
        </div>
        <div className="background">
          <img src="/" alt="Background swiggle" />
        </div>
        <div className="image">
          <img src={image.src} alt="Hero graphic" />
        </div>
      </div>
    </div>
  );
};
