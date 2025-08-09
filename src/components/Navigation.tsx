import React from "react";
import Link from "next/link";

interface NavigationProps {
  active: "about" | "employment" | "education";
}

const Navigation = ({active}: NavigationProps) => (
  <nav className="flex justify-center items-center content-center pt-3 pb-8 uppercase">
    <Link href="/">
      <a
        className={`mr-4 hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "about" ? "text-orange-600 underline" : ""
        }`}
        href="/"
      >
        about
      </a>
    </Link>
    <Link href="/employment">
      <a
        className={`hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "employment" ? "text-orange-600 underline" : ""
        }`}
        href="/employment"
      >
        employment
      </a>
    </Link>
    <Link href="/education">
      <a
        className={`ml-4 hover:opacity-50 focus:outline-none focus:shadow-outline ${
          active === "education" ? "text-orange-600 underline" : ""
        }`}
        href="/education"
      >
        education
      </a>
    </Link>
  </nav>
);

export default Navigation;
