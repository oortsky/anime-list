import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <div className="pt-20">
      <Navbar />
      <div className="w-full p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold font-mono">Popular Anime</h1>
        <Link href="/popular" className="link font-mono text-sm link-primary">
          More
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <Card
                id={data.mal_id}
                title={data.title}
                image={data.images.webp.image_url}
                rating={data.score}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
