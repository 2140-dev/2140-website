import { SlicesComp } from 'components/shared/layouts/slices-comp/slices-comp'
import { Hero } from './components/hero/hero'
import { HomepageTemplateProps } from 'types/templates'

export const HomepageTemplate = ({
  title,
  excerpt,
  image,
  link,
  slices
}: HomepageTemplateProps) => {
  return (
    <>
      <Hero title={title} excerpt={excerpt} image={image} link={link} />
      {slices && <SlicesComp slices={slices} />}
    </>
  )
}
