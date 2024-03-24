import type { Metadata } from "next";

import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Grab",
  description: "Grab main site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="prose dark:prose-invert prose-invert prose-md xl:prose-lg 2xl:prose-xl max-w-none h-full prose-img:m-0">
        <div className="fixed top-1/2 right-0 flex flex-col bg-[#808080] text-xl -translate-y-1/2 z-50">
          <i className="fa-brands fa-facebook text-white px-5 pt-5 cursor-pointer"></i>
          <div className="divider w-full my-2.5"></div>
          <i className="fa-brands fa-twitter text-white px-5 pt-2.5 cursor-pointer"></i>
          <div className="divider w-full my-2.5"></div>
          <i className="fa-brands fa-instagram text-white px-5 pt-2.5 cursor-pointer"></i>
          <div className="divider w-full my-2.5"></div>
          <i className="fa-brands fa-youtube text-white px-5 pt-2.5 cursor-pointer"></i>
          <div className="divider w-full my-2.5"></div>
          <i className="fa-brands fa-tiktok text-white px-5 pt-2.5 pb-5 cursor-pointer"></i>
        </div>
        <header className="bg-themegreen h-8 lg:h-14 flex items-center justify-between md:justify-center  md:gap-16">
          <span className="font-bold text-lg lg:text-4xl uppercase text-white  h-8 lg:h-14 bg-red-500 py-1 flex gap-3 px-1 items-center">
            Live
            <i className="fa-solid fa-satellite-dish text-lg lg:!text-3xl"></i>
          </span>
          <span className="text-xs sm:text-xl lg:text-4xl text-white text-nowrap">
            Lorem ipsum dolor sit amet
          </span>
          <span className="bg-black/25 hover:bg-white/45 transition-all hover:cursor-pointer flex items-center justify-center h-8 lg:h-14 px-4 py-1 font-bold text-white text-xs lg:text-2xl uppercase">
            Join Now &nbsp;&nbsp;
            <i className="fa-solid fa-circle-play text-lg lg:!text-3xl"></i>
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}
