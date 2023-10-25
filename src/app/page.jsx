import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "./services/api-services";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const latestAnime = await getAnimeResponse("seasons/now", "limit=8")

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
    </>
  );
};

export default Page;
