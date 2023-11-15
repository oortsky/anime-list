import Link from "next/link";
import InputSearch from "./InputSearch";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    // Broken Navbar UI
    <header className="navbar fixed top-0 px-4 bg-warning shadow-lg z-50 flex md:flex-row flex-col justify-between md:items-center gap-2">
      <Link
        href="/"
        className="font-bold font-mono text-base-100 uppercase text-xl transition-all duration-300 hover:scale-105"
      >
        Animelist
      </Link>
      <InputSearch />
      <ActionButton />
    </header>
  );
};

export default Navbar;
