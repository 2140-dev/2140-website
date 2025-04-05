import type { Metadata, ResolvingMetadata } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { fetchPageProps } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PageTemplate } from "@/app/templates/Page/PageTemplate";
import { stripHTMLMarkup } from "@/app/utils/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return await sanityFetch({
    query: `*[_type == "page" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const page = await fetchPageProps(client, params);

  return {
    title: `2140 | ${page?.title}`,
    description: page?.excerpt,
    openGraph: {
      images: [],
    },
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const pageProps = await fetchPageProps(client, params);

  console.log(pageProps.slices);
  return <PageTemplate {...pageProps} />;
}
