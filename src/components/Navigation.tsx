import React from "react";
import Link from "next/link";

interface NavigationProps {
  active: "home" | "photos" | "resume";
}

const Navigation = ({ active }: NavigationProps) => {
  return (
    <nav className="flex justify-center items-center content-center pt-3 pb-8 text-xl">
      <Link href="/">
        <a
          className={`mr-4 underline hover:opacity-75 focus:outline-none focus:shadow-outline ${
            active === "home" ? "text-orange-600" : ""
          }`}
          href="/"
        >
          home
        </a>
      </Link>
      <Link href="/photos">
        <a
          className={`mr-4 underline hover:opacity-75 focus:outline-none focus:shadow-outline ${
            active === "photos" ? "text-orange-600" : ""
          }`}
          href="/photos"
        >
          photos
        </a>
      </Link>
      <Link href="/resume">
        <a
          className={`underline hover:opacity-75 focus:outline-none focus:shadow-outline ${
            active === "resume" ? "text-orange-600" : ""
          }`}
          href="/work"
        >
          resume
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
