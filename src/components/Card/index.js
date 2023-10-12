import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, image, rating }) => {
  return (
    <Link
      href={`/${id}`}
      className="card card-compact w-full h-full bg-base-100 shadow-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-[103%]"
    >
      <figure>
        <Image
          src={image}
          alt={title}
          width={400}
          height={600}
          className="w-full max-h-64 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-sm font-bold font-mono text-center uppercase">
          {title}
        </h2>
        <div className="card-actions">
          <div class="badge badge-warning text-white badge-xl">{rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
