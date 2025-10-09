import { SlicesComp } from 'app/shared/layouts/slices-comp/slices-comp'
import { Hero } from './components/hero/hero'
import { HomepageTemplateProps } from '@/app/types/templates'

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
