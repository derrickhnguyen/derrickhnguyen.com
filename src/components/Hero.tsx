import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import {Sun, Snowboarder, Mountains, Surfer, Climber, Sparkle, CursorDown} from "./Doodles";
import {LINKS} from "../data/portfolio";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      {/* Background doodle scene — right side, behind a left-to-centre scrim */}
      <div className="hero-bg">
        <div className="layer" style={{top: "16%", right: "4%", width: "clamp(88px,11vw,150px)"}}>
          <Sun style={{width: "100%"}} />
        </div>
        <div className="layer" style={{right: "12%", top: "17%", width: "clamp(105px,13vw,175px)"}}>
          <Snowboarder style={{width: "100%"}} />
        </div>
        <div
          className="layer"
          style={{right: "-3%", bottom: "-2%", width: "clamp(380px,50vw,680px)"}}
        >
          <Mountains style={{width: "100%"}} />
        </div>
        <div className="layer" style={{right: "26%", top: "42%", width: "clamp(115px,14vw,190px)"}}>
          <Surfer style={{width: "100%"}} />
        </div>
        <div className="layer" style={{left: "0%", top: "31%", width: "clamp(80px,10vw,128px)"}}>
          <Climber style={{width: "100%"}} />
        </div>
        <div className="layer" style={{right: "44%", top: "13%", width: 26}}>
          <Sparkle style={{width: "100%"}} />
        </div>
        <div className="layer" style={{right: "8%", top: "54%", width: 22}}>
          <Sparkle style={{width: "100%"}} />
        </div>
        <div className="layer" style={{right: "33%", bottom: "16%", width: 18}}>
          <Sparkle style={{width: "100%"}} />
        </div>
      </div>

      <div className="hero-inner wrap">
        <Reveal as="h1" className="hero-name" delay={60}>
          <span className="ln">Derrick</span>
          <span className="ln ln2">
            Nguyen<span className="dot">.</span>
          </span>
        </Reveal>
        <Reveal className="hero-role" delay={150} as="p">
          <span className="tick" />
          Senior Software Engineer
          <span className="tick" />
          Frontend at scale
        </Reveal>
        <Reveal className="hero-lede" delay={210} as="p">
          I build <strong>data-heavy web apps used by millions</strong> — from a learning platform
          for half a million officers to consumer products at Headspace. I pair deep frontend craft
          with the <strong>people skills to lead teams</strong>, and I&apos;m never done learning:
          now going deep on <strong>AI at Georgia Tech</strong>.
        </Reveal>
        <Reveal className="hero-actions" delay={270} as="div">
          <a className="btn btn-primary" href="#experience">
            See my work <Icon name="arrow" />
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" /> GitHub
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" /> LinkedIn
          </a>
        </Reveal>
      </div>

      <a className="scroll-cue" href="#about">
        scroll <CursorDown />
      </a>
    </header>
  );
}
