import { Home } from "@/app/pages/Home/Home";
import { client } from "@/sanity/lib/client";

import { fetchHomepage } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await fetchHomepage(client);

  return <Home {...pageProps} />;
}
