import { ResolvedLink } from "app/types/resolved-link";
import { InternalResultType, LinkResultType } from "sanity/lib/results";

export const getInternalLinkUrl = (link: InternalResultType): string => {
  switch (link.document) {
    // case "post":
    //   return `/${link.document}/${link.slug}`;
    case "page":
    default:
      return `/${link.slug}`;
  }
};

export const resolveInternalOrExternalLink = (
  link: LinkResultType
): ResolvedLink => {
  let result = {
    _key: link._key,
  };

  if (link?.internal) {
    return {
      ...result,
      _type: link.internal._type,
      label: link.internal.label,
      href: getInternalLinkUrl(link.internal),
    };
  }

  if (link?.external) {
    return {
      ...result,
      _type: link.external._type,
      label: link.external?.label || "",
      href: link.external.url,
    };
  }

  return {
    _key: "",
    _type: "",
    label: "",
    href: "",
  };
};
