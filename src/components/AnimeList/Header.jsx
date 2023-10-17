import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="w-full p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold font-mono">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={`/${linkHref}`}
          className="link font-mono text-sm transition-all hover:link-warning"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
