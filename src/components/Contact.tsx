import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import {Sun, Lifter} from "./Doodles";
import {LINKS} from "../data/portfolio";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section className="sec sec-light pad wrap contact" id="contact">
      <div
        className="float-doodle"
        style={{right: "4%", top: "0%", width: "clamp(80px,9vw,130px)", opacity: 0.9}}
      >
        <Sun style={{width: "100%"}} />
      </div>
      <div
        className="float-doodle"
        style={{right: "7%", bottom: "20%", width: "clamp(100px,12vw,160px)", opacity: 0.85}}
      >
        <Lifter style={{width: "100%"}} />
      </div>
      <Reveal className="sec-head" as="div" style={{marginBottom: "24px"}}>
        <span className="eyebrow">
          <span className="bar" />
          <span className="num">05</span> Contact
        </span>
      </Reveal>
      <Reveal as="div">
        <h2 className="contact-big">
          Let&apos;s build
          <br />
          something good<span className="dot">.</span>
        </h2>
        <p className="contact-sub">
          I&apos;m always happy to talk shop about shipping at scale, engineering leadership, or
          where AI is taking the craft.
        </p>
        <div className="contact-links">
          <a
            className="btn btn-primary"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" /> Connect on LinkedIn
          </a>
          <a className="btn btn-ghost" href={LINKS.email}>
            <Icon name="mail" /> Email me
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" /> GitHub
          </a>
        </div>
      </Reveal>
      <div className="foot">
        <span>© {year} Derrick Nguyen</span>
        <span className="scrawl">made to move.</span>
      </div>
    </section>
  );
}
