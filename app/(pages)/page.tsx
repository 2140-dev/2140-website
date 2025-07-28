import { client } from "@/sanity/lib/client";
import { HomepageTemplate } from "../templates/homepage/homepage-template";

import { fetchHomepageProps } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await fetchHomepageProps(client);

  return <HomepageTemplate {...pageProps} />;
}
