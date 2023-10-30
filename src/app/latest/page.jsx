"use client";

import { useState, useEffect } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/services/api-services";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [latestAnime, setLatestAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("seasons/now", `page=${page}`);
    setLatestAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section className="pt-20 pb-6">
      <HeaderMenu title={"MOST LATEST ANIME"} />
      <AnimeList api={latestAnime} />
      <Pagination
        page={page}
        lastPage={latestAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </section>
  );
};

export default Page;
