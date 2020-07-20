import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center content-center py-3 text-xl">
      <Link href="/">
        <a className="mr-4 underline hover:opacity-75" href="/">
          Home
        </a>
      </Link>
      <Link href="/work">
        <a className="mr-4 underline hover:opacity-75" href="/work">
          Work
        </a>
      </Link>
      <Link href="/photos">
        <a className="underline hover:opacity-75" href="/photos">
          Photos
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
