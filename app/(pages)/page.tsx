import { client } from "@/sanity/lib/client";
import { Hero } from "@/app/components/Hero/Hero";
import { Homepage } from "@/sanity/sanity.types";
import { homepageQuery } from "@/sanity/lib/queries";

export default async function Homepage() {
  const pageProps = await client.fetch<Homepage>(homepageQuery);

  console.log(pageProps.link);
  return (
    <section>
      <Hero
        title={pageProps.title}
        excerpt={pageProps?.excerpt}
        image={pageProps.image}
        link={pageProps?.link}
      />
      <div className="container mx-auto px-5">
        {/* {heroPost ? (
        <HeroPost
          title={heroPost.title}
          slug={heroPost.slug}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          author={heroPost.author}
        />
      ) : (
        <Onboarding />
      )}
      {heroPost?._id && (
        <aside>
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            More Stories
          </h2>
          <Suspense>
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )} */}
      </div>
    </section>
  );
}
