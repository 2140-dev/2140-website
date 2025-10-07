import { SlicesComp } from 'app/shared/layouts/slices-comp/slices-comp'
import { Hero } from './components/hero/hero'
import { HomepageQueryResult } from 'sanity.types'

export const HomepageTemplate = ({ ...props }: HomepageQueryResult) => {
  const { title, excerpt, image, link, slices } = props
  return (
    <>
      <Hero title={title} excerpt={excerpt} image={image} link={link} />
      {slices && <SlicesComp slices={slices} />}
    </>
  )
}
