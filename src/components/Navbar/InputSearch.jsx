"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = event => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="form-control">
      <div className="relative">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            className="input input-bordered input-sm font-mono bg-white text-black w-full pr-8 md:max-w-sm"
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
    </div>
  );
};

export default InputSearch;
