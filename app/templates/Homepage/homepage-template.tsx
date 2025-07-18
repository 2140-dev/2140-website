import { SlicesComp } from "@/app/shared/layouts/slices-comp/slices-comp";
import { Hero } from "@/app/templates/homepage/components/hero/hero";
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
