import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from "next/font/local";
import clsx from "clsx";

import "@/styles/globals.css";

const f1Font = localFont({
  src: [
    {
      path: "../../public/fonts/Formula1-Regular-1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Formula1-Bold_web.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const [revolve, setRevolve] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");

  const handleImageClick = () => {
    setRevolve(true);
    setIsHome(true);
    setTimeout(() => setRevolve(false), 1000);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <link rel="icon" href="/racing_car.png" type="image/png" />
        <title>F1 Fanatics</title>
      </Head>
      <div className={clsx("min-h-screen bg-gradient-to-br from-gray-900 to-black", f1Font.className)}>
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="w-full fixed inset-0 -z-10 bg-dot-white/[0.2]">
            <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          </div>

          <header className="flex justify-between items-center mb-8 md:mb-16">
            <Link href={`/teams/${currentYear}`} className="flex items-center space-x-4">
              <Image
                src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png"
                className={clsx(
                  "transition duration-1000",
                  revolve && "animate-revolve -hue-rotate-90"
                )}
                onClick={handleImageClick}
                alt="F1 logo"
                height={60}
                width={120}
                unoptimized={true}
                priority
              />
              <span className="hover:text-red-500 transition">FANATICS</span>
            </Link>
            <nav className="flex items-center space-x-6 text-white">
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="appearance-none bg-transparent text-white py-2 pl-3 pr-6 border-b border-white hover:text-red-500 transition cursor-pointer"
                >
                  <option value="" disabled className="text-gray-500">
                    Select Year
                  </option>
                  {Array.from({ length: 7 }, (_, i) => currentYear - i).map((year) => (
                    <option key={year} value={year} className="bg-gray-800 text-white">
                      {year}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </span>
              </div>
              <ul className="flex space-x-6 text-white">
                <li><Link href={`/teams/${selectedYear}`} className="hover:text-red-500 transition">Teams</Link></li>
                <li><Link href={`/drivers/${selectedYear}`} className="hover:text-red-500 transition">Drivers</Link></li>
                <li><Link href={`/races/${selectedYear}`} className="hover:text-red-500 transition">Races</Link></li>
              </ul>
            </nav>
          </header>

          <main className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 md:p-10">
            <Component {...pageProps} />
          </main>

          <footer className="mt-8 md:mt-16 text-center text-gray-400">
            <p>Made with ❤️ by F1 fans for F1 fans</p>
          </footer>
        </div>
      </div>
      <Analytics />
    </>
  );
}
