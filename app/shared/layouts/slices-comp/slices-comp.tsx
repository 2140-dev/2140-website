import { PageQueryResultType } from "@/sanity/lib/results.js";
import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";

const mapSliceTypeToComponent = {
  callToAction: dynamic(
    () => import("../../../slices/call-to-action/call-to-action")
  ),
  centeredText: dynamic(
    () => import("../../../slices/centered-text/centered-text")
  ),
  "team-members": dynamic(
    () => import("../../../slices/team-members/team-members")
  ),
  donors: dynamic(() => import("../../../slices/donors/donors")),
  textBlockWithImage: dynamic(
    () => import("../../../slices/text-block-with-image/text-block-with-image")
  ),
};
interface Props {
  slices: PageQueryResultType["slices"];
}
export const SlicesComp = ({ slices }: Props) => {
  return slices?.map((slice, i) => {
    const _type = slice._type as keyof typeof mapSliceTypeToComponent;
    const Component = mapSliceTypeToComponent[_type];
    if (Component) {
      // const sliceProps = slicesPropsPerType?.[slice._type] || {};
      const sliceProps = slice;
      return (
        <Suspense key={slice._key || i} fallback={null}>
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
      );
    } else return <Fragment key={slice._key || i} />;
  });
};
