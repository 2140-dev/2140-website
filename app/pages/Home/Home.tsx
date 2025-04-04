import { Hero } from "./components/Hero/Hero";
import { HomepageQueryResultType } from "@/sanity/lib/results";

export const Home = ({
  title,
  excerpt,
  image,
  link,
}: HomepageQueryResultType) => {
  const heroProps = { title, excerpt, image, link };
  return (
    <>
      <Hero {...heroProps} />
      <div className="container mx-auto px-5"></div>
    </>
  );
};
