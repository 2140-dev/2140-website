export const getInternalLink = (document: string, slug: string): string => {
  switch (document) {
    case "post":
      return `/${document}/${slug}`;
    case "page":
    default:
      return `/${slug}`;
  }
};
