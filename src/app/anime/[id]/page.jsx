import { getAnimeResponse } from "@/services/api-services";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import ReviewCard from "@/components/ReviewCard";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const reviews = await getAnimeResponse(`anime/${id}/reviews`);
  
  return (
    <section className="pt-20 pb-6 px-4">
      <h1 className="text-2xl font-black mb-3">
        {anime.data.title} {"•"} {anime.data.year ? anime.data.year : "-"}
      </h1>
      <div className="w-full overflow-x-auto">
        <div className="stats bg-neutral shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Rank</div>
            <div className="stat-value text-primary">
              {anime.data.rank ? anime.data.rank : "-"}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Score</div>
            <div className="stat-value text-secondary">
              {anime.data.score ? anime.data.score : "-"}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Favorites</div>
            <div className="stat-value text-accent">
              {anime.data.favorites ? anime.data.favorites : "-"}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Episodes</div>
            <div className="stat-value">
              {anime.data.episodes ? anime.data.episodes : "-"}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Duration</div>
            <div className="stat-value">
              {anime.data.duration ? anime.data.duration : "-"}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Status</div>
            <div className="stat-value">
              {anime.data.status ? anime.data.status : "-"}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-content justify-normal px-0 flex-col items-start md:flex-row">
        <Image
          src={anime.data.images.webp.large_image_url}
          alt={anime.data.images.jpg.large_image_url}
          width={240}
          height={600}
          priority={true}
          className="w-full h-auto rounded-lg shadow-2xl md:w-60"
        />
        <div>
          <h1 className="text-lg font-bold">Synopsis</h1>
          <p className="py-2">{anime.data.synopsis}</p>
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="text-2xl font-black mb-3">Reviews</h1>
      {reviews.data.length ? null : (
        <div className="w-full flex justify-center">
          <h3>– No Reviews –</h3>
        </div>
      )}
      <div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-3 overflow-x-hidden">
        {reviews.data.map(review => {
          return (
            <ReviewCard
              image={review.user.images.webp.image_url}
              username={review.user.username}
              date={review.date}
              review={review.review}
              user_url={review.user.url}
              review_url={review.url}
              score={review.score}
              is_spoiler={review.is_spoiler}
            />
          );
        })}
      </div>
      <div>
        <VideoPlayer videoId={anime.data.trailer.youtube_id} />
      </div>
    </section>
  );
};

export default Page;
