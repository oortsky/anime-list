import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 px-4 bg-base-100 shadow-sm z-50">
      <div className="flex-1">
        <Link
          href="/"
          className="font-bold font-mono uppercase text-xl transition-all duration-300 hover:scale-105"
        >
          Animelist
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
