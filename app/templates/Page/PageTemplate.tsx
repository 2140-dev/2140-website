import { PageQueryResultType } from "@/sanity/lib/results";
import { PageTitle } from "@/app/templates/Page/components/PageTitle/PageTitle";

export const PageTemplate = ({ title, excerpt }: PageQueryResultType) => {
  return (
    <>
      <PageTitle title={title} excerpt={excerpt} />
    </>
  );
};
