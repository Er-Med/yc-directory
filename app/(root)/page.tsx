// import Image from "next/image";
import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;
    const params = { search: query || null }

    const session = await auth();
    console.log(session?.id);

    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })
    console.log(JSON.stringify(posts, null, 2));

    return (
        <>
            <section className='pink_container'>
                <h1 className='heading'>Pitch Your Startup,<br /> Connect with Entrepreneurs</h1>
                <p className='sub-heading !max-3xl'>
                    Submit Ideas, Vote on Pitches, and get noticed inVirtual competition
                </p>
                <SearchForm query={query} />
            </section>

            <section className='section_container'>
                <p className='text-30 font-semibold'>
                    {query ? `Search for ${query}` : `All Startups`}
                </p>

                <ul className='mt-7 card_grid'>
                    {posts?.length > 0 ? (
                        posts.map((post) => (
                            <StartupCard key={post?._id} post={post as StartupTypeCard} />
                        )
                        )
                    ) : (
                        <p className="no-results">No startup Found</p>
                    )}
                </ul>
            </section>
            <SanityLive />
        </>
    );
}
