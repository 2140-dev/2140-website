import { NotFoundTemplate } from "app/templates/not-found/not-found-template";
import { client } from '@/sanity/lib/client';
import { fetchPageNotFoundProps } from '@/sanity/lib/queries';

export default async function NotFound() {
  const pageProps = await fetchPageNotFoundProps(client);

  return <NotFoundTemplate {...pageProps} />;
}
