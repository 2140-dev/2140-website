import { PageTemplateProps } from 'types/templates'
import { PageTitle } from 'components/shared/page-title/page-title'
import { SlicesComp } from 'components/shared/layouts/slices-comp/slices-comp'

export const PageTemplate = ({ title, excerpt, slices }: PageTemplateProps) => {
  return (
    <>
      <PageTitle title={title} excerpt={excerpt} />
      {slices && <SlicesComp slices={slices} />}
    </>
  )
}
