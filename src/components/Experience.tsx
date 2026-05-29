import React from "react";
import Reveal from "./Reveal";
import {Lifter} from "./Doodles";
import {EXPERIENCE} from "../data/portfolio";

export default function Experience() {
  return (
    <section className="sec sec-dark pad wrap" id="experience">
      <div
        className="float-doodle"
        style={{right: "1%", bottom: "1%", width: "clamp(90px,11vw,150px)", opacity: 0.5}}
      >
        <Lifter style={{width: "100%"}} />
      </div>
      <Reveal className="sec-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="num">02</span> Experience
        </span>
        <h2 className="sec-title">Where I&apos;ve shipped.</h2>
      </Reveal>
      <div className="xp-list">
        {EXPERIENCE.map((x, i) => (
          <Reveal className="xp" as="article" key={i} delay={i * 30}>
            <div className="xp-rail">
              <div className="when">{x.when}</div>
              <div className="where">{x.where}</div>
              <div className="dur">{x.dur}</div>
            </div>
            <div className="xp-body">
              <div className="xp-co">
                <h3>{x.co}</h3>
              </div>
              <div className="xp-role" dangerouslySetInnerHTML={{__html: x.role}} />
              <ul className="xp-bullets">
                {x.bullets.map((b, j) => (
                  <li key={j} dangerouslySetInnerHTML={{__html: b}} />
                ))}
              </ul>
              <div className="xp-tags">
                {x.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
