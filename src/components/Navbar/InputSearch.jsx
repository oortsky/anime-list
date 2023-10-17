"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
      setTimeout(function () {
        searchRef.current.value = "";
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search..."
          className="input input-bordered input-sm font-mono w-36 md:w-auto"
          ref={searchRef}
          onKeyPress={handleSearch}
        />
        <button
          className="absolute top-1.5 end-1.5 cursor-pointer"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={20} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
