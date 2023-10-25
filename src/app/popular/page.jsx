"use client";

import { useState, useEffect } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "../services/api-services";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section className="pt-20 pb-6">
      <HeaderMenu title={"MOST POPULAR ANIME"} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </section>
  );
};

export default Page;
