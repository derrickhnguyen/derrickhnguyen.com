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
            I&apos;m a senior software engineer who loves building{" "}
            <strong>data-heavy web apps</strong>. Frontend is my specialty, but I happily tinker
            across the stack — backend services, distributed systems, and a bit of DevOps.
          </p>
          <p>
            Over the past several years I&apos;ve shipped products <strong>used by millions</strong>
            : Axon Academy for 500K+ officers, the headspace.com platform, and Compass&apos;s
            Marketing Center for 30K+ agents. At Headspace I stepped up to{" "}
            <strong>Engineering Manager</strong>, leading a team of five — proof I care as much
            about <strong>people and process</strong> as I do clean code.
          </p>
          <p>
            I&apos;m <strong>not a fan of standing still</strong>. I love expanding — which is why
            I&apos;m back in school at Georgia Tech (OMSCS) specializing in{" "}
            <strong>Artificial Intelligence</strong>, growing the next layer of my craft.
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
