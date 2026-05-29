import React, {useEffect} from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import {SEO} from "../data/portfolio";

export default function Portfolio() {
  // Apply default "stoke" palette on mount
  useEffect(() => {
    document.body.setAttribute("data-dir", "stoke");
  }, []);

  return (
    <>
      <Head>
        <title>Derrick Nguyen — Senior Software Engineer</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="google-site-verification"
          content="VJ860SdsIWkH2-SjCcZr0jNG6N0Oh0UduhHAeGIs9WU"
        />
        <link rel="canonical" href={SEO.siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.siteUrl} />
        <meta property="og:title" content="Derrick Nguyen — Senior Software Engineer" />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Derrick Nguyen" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derrick Nguyen — Senior Software Engineer" />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.ogImage} />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(SEO.jsonLd)}}
        />
      </Head>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
