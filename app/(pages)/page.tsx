import { HomepageTemplate } from "app/templates/homepage/homepage-template";
import { client } from '@/sanity/lib/client";

import { fetchHomepageProps } from '@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function Homepage() {
  const pageProps = await fetchHomepageProps(client);

  if (!pageProps) {
    notFound();
  }

  return <HomepageTemplate {...pageProps} />;
}
