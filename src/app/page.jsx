import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import {
  getAnimeResponse,
  getNestedAnimeResponses,
  reproduce
} from "@/services/api-services";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const latestAnime = await getAnimeResponse("seasons/now", "limit=8");
  let recommendedAnime = await getNestedAnimeResponses(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      <section className="pt-20 pb-6">
        <Header title="Popular Anime" linkHref="popular" linkTitle="More" />
        <AnimeList api={topAnime} />
      </section>
      <section className="py-6">
        <Header title="Latest Anime" linkHref="latest" linkTitle="More" />
        <AnimeList api={latestAnime} />
      </section>
      <section className="py-6">
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
