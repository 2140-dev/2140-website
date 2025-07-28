import { HomepageTemplate } from "@/app/templates/homepage/homepage-template-1";
import { client } from "@/sanity/lib/client";

import { fetchHomepageProps } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await fetchHomepageProps(client);

  return <HomepageTemplate {...pageProps} />;
}
