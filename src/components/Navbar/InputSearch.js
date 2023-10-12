"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword) {
      router.push(`/search/${keyword}`);
    }
    
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm font-mono w-36 md:w-auto"
          ref={searchRef}
          onKeyPress={handleKeyPress}
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
