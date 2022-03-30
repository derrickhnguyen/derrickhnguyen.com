import React from "react";
import Link from "next/link";

interface NavigationProps {
  active: "home" | "film" | "resume";
}

const Navigation = ({active}: NavigationProps) => (
  <nav className="flex justify-center items-center content-center pt-3 pb-8 uppercase">
    <Link href="/">
      <a
        className={`mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "home" ? "text-orange-600 underline" : ""
        }`}
        href="/"
      >
        home
      </a>
    </Link>
    <Link href="/film">
      <a
        className={`mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "film" ? "text-orange-600 underline" : ""
        }`}
        href="/film"
      >
        film
      </a>
    </Link>
    <Link href="/resume">
      <a
        className={`hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "resume" ? "text-orange-600 underline" : ""
        }`}
        href="/resume"
      >
        resume
      </a>
    </Link>
  </nav>
);

export default Navigation;
