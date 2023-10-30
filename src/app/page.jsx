import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import {
  getAnimeResponse,
  getNestedAnimeResponses
} from "@/services/api-services";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const latestAnime = await getAnimeResponse("seasons/now", "limit=8");
  let recommendedAnime = await getNestedAnimeResponses(
    "recommendations/anime",
    "entry"
  );

  function generateRandomNumbersWithGap() {
    const min = 1;
    const max = recommendedAnime.length;
    const gap = 8;

    let firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let secondNumber = firstNumber + gap;
    if (secondNumber > max) {
      secondNumber = max;
      firstNumber = max - gap;
    }

    return [firstNumber, secondNumber];
  }

  const [firstNumber, secondNumber] = generateRandomNumbersWithGap();

  recommendedAnime = {
    data: recommendedAnime.slice(firstNumber, secondNumber)
  };

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
