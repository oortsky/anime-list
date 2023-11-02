"use client";

import { FileX } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
      <FileX size={50} color="#fbbd23" weight="fill" className="mb-5" />
      <span className="text-lg text-warning font-mono font-bold uppercase">
        404 • Not Found
      </span>
    </div>
  );
};

export default NotFound;
