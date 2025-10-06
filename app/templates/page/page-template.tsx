import { PageTitle } from "app/shared/components/page-title/page-title";
import { SlicesComp } from "app/shared/layouts/slices-comp/slices-comp";
import { PageQueryResultType } from '@/sanity/lib/results";

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
