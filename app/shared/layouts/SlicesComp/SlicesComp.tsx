import { SchemaTypeDefinition } from "sanity";

import React, { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import { PageQueryResultType } from "@/sanity/lib/results.js";

const mapSliceTypeToComponent = {
  textBlockWithImage: dynamic(
    () => import("../../slices/TextBlockWithImage/TextBlockWithImage")
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
