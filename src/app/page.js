import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
  const responseOne = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await responseOne.json();
  const responseTwo = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=8`
  );
  const latestAnime = await responseTwo.json();

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
