import { HomepageTemplate } from "@/app/templates/Homepage/HomepageTemplate";
import { client } from "@/sanity/lib/client";

import { fetchHomepageProps } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await fetchHomepageProps(client);

  return <HomepageTemplate {...pageProps} />;
}
