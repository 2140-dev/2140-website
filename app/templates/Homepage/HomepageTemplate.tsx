import { SlicesComp } from "@/app/shared/layouts/SlicesComp/SlicesComp";
import { Hero } from "./components/Hero/Hero";
import { HomepageQueryResultType } from "@/sanity/lib/results";

export const HomepageTemplate = ({
  title,
  excerpt,
  image,
  link,
  slices,
}: HomepageQueryResultType) => {
  const heroProps = { title, excerpt, image, link, slices };
  return (
    <>
      <Hero {...heroProps} />
      {slices && <SlicesComp slices={slices} />}
    </>
  );
};
