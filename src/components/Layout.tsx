import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

interface LayoutProps {
  active: "about" | "employment" | "education";
  children: React.ReactNode;
  title: string;
}

const Layout = ({active, children, title}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col min-h-screen bg-white text-black p-8">
      <Navigation active={active} />
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
