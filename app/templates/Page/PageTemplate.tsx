import { PageQueryResultType } from "@/sanity/lib/results";
import { PageTitle } from "@/app/templates/Page/components/PageTitle/PageTitle";
import { SlicesComp } from "@/app/shared/layouts/SlicesComp/SlicesComp";

export const PageTemplate = ({
  title,
  excerpt,
  slices,
}: PageQueryResultType) => {
  return (
    <>
      <PageTitle title={title} excerpt={excerpt} />
      {slices && <SlicesComp slices={slices} />}
    </>
  );
};
