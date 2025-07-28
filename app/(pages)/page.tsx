import { HomepageTemplate } from "@/app/templates/homepage-1/homepage-template";
import { client } from "@/sanity/lib/client";

import { fetchHomepageProps } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await fetchHomepageProps(client);

  return <HomepageTemplate {...pageProps} />;
}
