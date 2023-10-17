import Card from "@/components/Card";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id}>
            <Card
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.webp.image_url}
              rating={anime.score}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
