import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANIMELIST • Get Anime Recommendations",
  description: "Places To Find Recommended Anime"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
    <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
    </Head>
      <body
        className={`bg-base-100 ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
