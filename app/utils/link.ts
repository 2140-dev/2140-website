import { Link } from "@/app/types/link";

export const resolveLink = (
  link: Link
): { _type?: string; label?: string; url?: string } | undefined => {
  if (!link) return undefined;

  if (link.type === "external" && link?.external) {
    return link.external;
  }

  if (link.type === "internal" && link?.internal) {
    return link.internal;
  }

  return link;
};
