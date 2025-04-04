import { InternalResultType } from "@/sanity/lib/results";

export const getInternalLinkUrl = (link: InternalResultType): string => {
  switch (link.document) {
    case "post":
      return `/${link.document}/${link.slug}`;
    case "page":
    default:
      return `/${link.slug}`;
  }
};
