"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = event => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search..."
          className="input input-bordered input-sm font-mono bg-white text-black w-36 pr-8 md:w-auto"
          ref={searchRef}
          onKeyPress={handleSearch}
        />
        <button
          className="absolute top-1.5 end-2 cursor-pointer"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={20} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
