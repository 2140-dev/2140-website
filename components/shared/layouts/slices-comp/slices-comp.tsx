import { Fragment, Suspense } from 'react'
import CallToAction from '../../../slices/call-to-action/call-to-action'
import CenteredText from '../../../slices/centered-text/centered-text'
import Donors from '../../../slices/donors/donors'
import Faqs from '../../../slices/faqs/faqs'
import ImageCarousel from '../../../slices/image-carousel/image-carousel'
import TeamMembers from '../../../slices/team-members/team-members'
import TextBlockWithImage from '../../../slices/text-block-with-image/text-block-with-image'
import Subscribe from '../../../slices/subscribe/subscribe'
import Text from '../../../slices/text/text'

const mapSliceTypeToComponent = {
  'call-to-action': CallToAction,
  'centered-text': CenteredText,
  donors: Donors,
  faqs: Faqs,
  'image-carousel': ImageCarousel,
  'team-members': TeamMembers,
  'text-block-with-image': TextBlockWithImage,
  subscribe: Subscribe,
  'text-block': Text
}
interface Props {
  slices: any[]
}
export const SlicesComp = ({ slices }: Props) => {
  return slices?.map((slice, i) => {
    const _type = slice._type as keyof typeof mapSliceTypeToComponent
    const Component = mapSliceTypeToComponent[_type]
    if (Component) {
      // const sliceProps = slicesPropsPerType?.[slice._type] || {};
      const sliceProps = slice
      return (
        <Suspense key={slice._key} fallback={null}>
          <Component
            {...sliceProps}
            // prevSliceType={i && _slices[i - 1]._type}
            // nextSliceType={i < _slices.length - 1 && _slices[i + 1]._type}
            // totalSlices={_slices.length}
            // prevSlice={i !== 0 ? _slices[i - 1] : null}
            // nextSlice={i < _slices.length - 1 ? _slices[i + 1] : null}
            // index={i}
            // theme={theme}
            // sliceType={slice._type}
            // sliceTitle={slice.title || slice.header?.title}
            // {...slice}
            // {...slicesProps}
            // {...extraProps}
          />
        </Suspense>
      )
    } else return <Fragment key={slice._key || i} />
  })
}
