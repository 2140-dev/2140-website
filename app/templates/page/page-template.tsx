import { PageTemplateProps } from '@/app/types/templates'
import { PageTitle } from 'app/shared/components/page-title/page-title'
import { SlicesComp } from 'app/shared/layouts/slices-comp/slices-comp'

export const PageTemplate = ({ title, excerpt, slices }: PageTemplateProps) => {
  return (
    <>
      <PageTitle title={title} excerpt={excerpt} />
      {slices && <SlicesComp slices={slices} />}
    </>
  )
}
