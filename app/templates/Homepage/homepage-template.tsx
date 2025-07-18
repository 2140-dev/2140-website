import { SlicesComp } from "@/app/shared/layouts/slices-comp/slices-comp";
import { HomepageQueryResultType } from "@/sanity/lib/results";
import { Hero } from "./components/hero/hero";

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
