import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({
  image,
  username,
  date,
  review,
  user_url,
  review_url,
  score,
  is_spoiler
}) => {
  return (
    <div className="card card-compact w-full bg-neutral shadow-xl">
      <div className="card-body flex flex-row">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <Image
              src={image}
              alt={`https://placehold.co/400x400?text=${username.substring(
                0,
                1
              )}`}
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">
            <Link href={user_url}>{username}</Link> • {moment(date).fromNow()}
          </h2>
          <p className="mb-2">
            {review.substring(0, 140)}{" "}
            <Link
              href={review_url}
              className="text-warning font-semibold underline"
            >
              more...
            </Link>
          </p>
          <div className="flex gap-2">
            <div className="badge badge-warning badge-md">
              {score ? score : "-"}/10
            </div>
            {is_spoiler ? (
              <div className="badge badge-error badge-md">Spoiler</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
