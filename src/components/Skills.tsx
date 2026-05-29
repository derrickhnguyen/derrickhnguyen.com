import React from "react";
import Reveal from "./Reveal";
import {Snowboarder} from "./Doodles";
import {SKILLS} from "../data/portfolio";

export default function Skills() {
  return (
    <section className="sec sec-dark pad wrap" id="skills">
      <div
        className="float-doodle"
        style={{right: "2%", top: "20%", width: "clamp(110px,14vw,190px)", opacity: 0.55}}
      >
        <Snowboarder style={{width: "100%"}} />
      </div>
      <Reveal className="sec-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="num">04</span> Toolkit
        </span>
        <h2 className="sec-title">What I build with.</h2>
      </Reveal>
      <Reveal className="skill-groups" as="div" delay={50}>
        {SKILLS.map((g, i) => (
          <div className="skill-group" key={i}>
            <h4>{g.group}</h4>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
