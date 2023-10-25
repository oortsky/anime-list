import Image from "next/image";
import Link from "next/link";

const DetailAnime = () => {
  return (
    <section className="pt-20 pb-6">
      <div className="hero">
        <div className="hero-content flex-col md:flex-row">
          <Image
            src="https://placehold.co/400x600/png"
            width={300}
            height={500}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailAnime;
