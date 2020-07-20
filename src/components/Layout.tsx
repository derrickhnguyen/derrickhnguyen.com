import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen bg-teal-600 text-white p-8">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
