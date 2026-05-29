import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import {Climber} from "./Doodles";
import {EDUCATION} from "../data/portfolio";

export default function Education() {
  return (
    <section className="sec sec-light pad wrap" id="education">
      <div
        className="float-doodle"
        style={{right: "4%", top: "5%", width: "clamp(74px,9vw,118px)", opacity: 0.85}}
      >
        <Climber style={{width: "100%"}} />
      </div>
      <Reveal className="sec-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="num">03</span> Education
        </span>
        <h2 className="sec-title">Always expanding.</h2>
      </Reveal>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <Reveal className="edu-card" as="div" key={i} delay={i * 70}>
            <span className={`badge${e.current ? "" : " muted"}`}>
              {e.current ? (
                <>
                  <Icon name="spark" width={13} height={13} /> In progress
                </>
              ) : (
                "Completed"
              )}
            </span>
            <h3>{e.school}</h3>
            <div className="degree">{e.degree}</div>
            <div className="when">{e.when}</div>
            <div className="focus" dangerouslySetInnerHTML={{__html: e.focus}} />
            <div className="bignum">&apos;{e.num}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
