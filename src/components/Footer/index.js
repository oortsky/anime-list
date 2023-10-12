import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content font-mono">
      <aside>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <Link
            href="https://linktr.ee/oortsky/"
            target="_blank"
            className="font-black tracking-tighter"
          >
            BayuAprio.
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
