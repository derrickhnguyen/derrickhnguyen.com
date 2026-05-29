import React from "react";
import Reveal from "./Reveal";
import {Squiggle} from "./Doodles";
import {FACTS} from "../data/portfolio";

export default function About() {
  return (
    <section className="sec sec-light pad wrap" id="about">
      <div
        className="float-doodle"
        style={{right: "2%", top: "8%", width: "clamp(80px,10vw,140px)", opacity: 0.9}}
      >
        <Squiggle style={{width: "100%"}} />
      </div>
      <Reveal className="sec-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="num">01</span> About
        </span>
        <h2 className="sec-title">The short version.</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-body" as="div">
          <p>
            I&apos;m a senior software engineer who loves building data-heavy web apps. Frontend is
            my specialty, but I happily tinker across the stack.
          </p>
          <p>
            Over the past several years I&apos;ve shipped products used by millions : Axon Academy
            for 500K+ officers, the headspace.com platform, and Compass&apos;s Marketing Center for
            30K+ agents. At Headspace I stepped up to Engineering Manager, leading a team of five.
          </p>
        </Reveal>
        <Reveal className="about-aside" as="dl" delay={80}>
          {FACTS.map((f, i) => (
            <div className="fact" key={i}>
              <dt>{f.dt}</dt>
              <dd>
                {f.dd}
                <br />
                <span>{f.sub}</span>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
