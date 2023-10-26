import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANIMELIST • Get Anime Recommendations",
  description: "Places To Find Recommended Anime"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
