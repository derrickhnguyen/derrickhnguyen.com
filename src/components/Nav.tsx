import React from "react";
import {useScrolled} from "../hooks/useScrolled";
import {useActiveSection} from "../hooks/useActiveSection";
import {Bolt} from "./Doodles";
import {LINKS, NAV_ITEMS} from "../data/portfolio";

export default function Nav() {
  const scrolled = useScrolled();
  const ids = ["hero", ...NAV_ITEMS.map((n) => n.id)];
  const active = useActiveSection(ids);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="brand">
          <span className="badge">
            <Bolt style={{width: 20, height: 26}} />
          </span>
          DN<span className="slash">/portfolio</span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>
              {n.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
