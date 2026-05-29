import React, {useState, useEffect, useRef} from "react";
import Head from "next/head";

// ============================================================
// DATA
// ============================================================

const LINKS = {
  linkedin: "https://linkedin.com/in/derrickhn",
  github: "https://github.com/derrickhnguyen",
  email: "mailto:derrickhnguyen@outlook.com",
};

const FACTS = [
  {dt: "Currently", dd: "Senior Software Engineer", sub: "Axon · Remote"},
  {dt: "Studying", dd: "MS Computer Science — AI", sub: "Georgia Tech"},
  {
    dt: "Specialty",
    dd: "Data-heavy frontend, at scale",
    sub: "+ backend & DevOps",
  },
  {dt: "Based", dd: "Remote", sub: "United States"},
];

const EXPERIENCE = [
  {
    co: "Axon",
    role: "Senior Software Engineer",
    when: "Dec 2024 — Present",
    dur: "1 yr 6 mos",
    where: "Remote",
    flagship: "Axon Academy",
    bullets: [
      "Led development of <b>Axon Academy</b>, an LMS serving <b>500,000+ law enforcement officers</b> globally.",
      "Architected the React frontend, integrated .NET APIs, and heavily influenced backend architecture while contributing across the stack.",
      'Awarded the <b>"Own It" value coin twice</b> by peers for leading a high-stakes launch and building a comprehensive internal admin dashboard.',
      "Won <b>1st place at the VR Pillars Hackathon</b>, prototyping an internal LMS to replace a third-party dependency entirely.",
      "Built a cross-platform Electron app from 0→1 letting agency admins bulk-register VR headsets and tablets in a single click.",
    ],
    tags: ["React.js", "TypeScript", "C# / .NET", "Electron", "Redux"],
  },
  {
    co: "Headspace",
    role:
      'Engineering Manager <span class="arr">←</span> Senior Software Engineer',
    when: "Apr 2022 — Nov 2024",
    dur: "2 yrs 8 mos",
    where: "Remote",
    flagship: "headspace.com",
    bullets: [
      "Managed a <b>team of 5 engineers</b> for the Membership squad — sprint planning, performance reviews, and hiring.",
      "Led the migration of <b>headspace.com from Gatsby to Next.js</b>, cutting deployment time from <b>30 minutes to under 10 seconds</b>.",
      "Redesigned checkout flows to enable self-service promotions, boosting deployment velocity and cutting operational overhead.",
      "Launched <b>Headspace Coaching</b>, bringing nationally board-certified coaches to members.",
      "Designed a server-side tagging service with Google Tag Manager to improve performance and security.",
    ],
    tags: ["Next.js", "Gatsby", "Node.js", "React", "GraphQL", "Leadership"],
  },
  {
    co: "Compass",
    role: "Senior Software Engineer",
    when: "Jul 2020 — Mar 2022",
    dur: "1 yr 9 mos",
    where: "Remote",
    flagship: "Marketing Center",
    bullets: [
      "Built <b>Marketing Center</b>, a browser-based design platform letting <b>30,000+ real estate agents</b> create postcards, brochures, and digital marketing materials.",
      "Developed core canvas-editor features — grouping, rotation, resizing, multiselect — with React and the Moveable library.",
      "Implemented a <b>print-to-PDF export pipeline</b> converting digital designs into high-quality print materials.",
      "Established deployment workflows, code-review standards, and onboarding docs for a 4-person team.",
    ],
    tags: ["React", "AngularJS", "Canvas", "Print Pipeline"],
  },
  {
    co: "Axon",
    role: "Software Engineer",
    when: "Jul 2018 — Jul 2020",
    dur: "2 yrs 1 mo",
    where: "Seattle · On-site",
    flagship: "Axon Records",
    bullets: [
      "Designed and built a customizable <b>report-writing framework for Axon Records</b>, improving usability for law-enforcement agencies.",
      "Developed a <b>rich-text editing library in React</b>, improving consistency across multiple web applications.",
      "Mentored junior engineers through pair programming and code reviews.",
    ],
    tags: ["React.js", "Web Interface Design", "Rich Text"],
  },
];

const EDUCATION = [
  {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    focus:
      "Specialization: <b>Artificial Intelligence</b><br><br>Artificial Intelligence · Knowledge-Based AI · Machine Learning · Natural Language Processing · Human Computer Interaction · Software Development Process · Graduate Introduction to Operating Systems · Advanced Operating Systems · Computer Networks · Systems Design for Cloud Computing",
    when: "Jan 2026 — Dec 2028",
    current: true,
    num: "26",
  },
  {
    school: "California State University, Long Beach",
    degree: "Bachelor of Science in Computer Science",
    focus:
      "Computer Architecture · Networks · Security · Data Structures & Algorithms · Database Systems · Distributed Computing · OOP · Operating Systems · Probability & Statistics · Programming Languages · Software Engineering",
    when: "Aug 2014 — Aug 2018",
    current: false,
    num: "18",
  },
];

const SKILLS = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Redux", "Next.js", "Gatsby", "AngularJS"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "C# / .NET", "GraphQL", "MySQL"],
  },
  {
    group: "Building toward",
    items: [
      "Electron",
      "DevOps",
      "Distributed Systems",
      "AI / Machine Learning",
    ],
  },
];

const NAV_ITEMS = [
  {id: "about", label: "About"},
  {id: "experience", label: "Experience"},
  {id: "education", label: "Education"},
  {id: "skills", label: "Skills"},
  {id: "contact", label: "Contact"},
];

// ============================================================
// ICONS
// ============================================================

type IconName = "github" | "linkedin" | "mail" | "arrow" | "down" | "spark";

function Icon({
  name,
  width = 20,
  height = 20,
}: {
  name: IconName;
  width?: number;
  height?: number;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    github: (
      <path
        fill="currentColor"
        d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"
      />
    ),
    linkedin: (
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.97 0 1.78-.78 1.78-1.73V1.73C24 .77 23.19 0 22.22 0z"
      />
    ),
    mail: (
      <>
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3 6.5l9 6 9-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </>
    ),
    arrow: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    ),
    down: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5v14M6 13l6 6 6-6"
      />
    ),
    spark: (
      <path
        fill="currentColor"
        d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"
      />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" width={width} height={height} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

// ============================================================
// REVEAL (scroll-reveal, React-state driven)
// ============================================================

interface RevealProps {
  as?: string;
  delay?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  // allow any other HTML attribute
  [key: string]: unknown;
}

function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    const reveal = () => setTimeout(() => setShown(true), delay);

    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight * 0.92 ||
      typeof IntersectionObserver === "undefined"
    ) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      {threshold: 0.12, rootMargin: "0px 0px -8% 0px"},
    );
    io.observe(el);
    const t = setTimeout(() => setShown(true), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [delay, shown]);

  return React.createElement(
    as,
    {
      ref,
      className: `reveal${shown ? " in" : ""}${
        className ? " " + className : ""
      }`,
      ...rest,
    },
    children,
  );
}

// ============================================================
// HOOKS
// ============================================================

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {rootMargin: "-45% 0px -50% 0px", threshold: 0},
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids.join(",")]);
  return active;
}

// ============================================================
// NAV
// ============================================================

function Nav() {
  const scrolled = useScrolled();
  const active = useActiveSection(["hero", ...NAV_ITEMS.map((n) => n.id)]);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="brand">
          <span className="dot" />
          Derrick Nguyen
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "active" : ""}
            >
              {n.label}
            </a>
          ))}
        </div>
        <a
          className="nav-cta"
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================

function Hero() {
  return (
    <header className="hero wrap" id="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-main">
            <Reveal as="h1" className="hero-name" delay={60}>
              <span className="ln">Derrick</span>
              <span className="ln accent">Nguyen.</span>
            </Reveal>
            <Reveal className="hero-lede" delay={140} as="p">
              I build <strong>data-heavy web apps used by millions</strong>.
              From a learning platform for half a million officers to consumer
              products at Headspace. I pair deep frontend craft with the{" "}
              <strong>people skills to lead teams</strong>, and I&apos;m never
              done learning: now going deep on{" "}
              <strong>AI at Georgia Tech</strong>.
            </Reveal>
            <Reveal className="hero-actions" delay={260} as="div">
              <a className="btn btn-primary" href="#experience">
                See my work <Icon name="arrow" width={16} height={16} />
              </a>
              <a
                className="btn btn-ghost"
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" width={16} height={16} /> GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" width={16} height={16} /> LinkedIn
              </a>
            </Reveal>
          </div>

          <Reveal className="hero-portrait" delay={200} as="div">
            <div className="portrait-frame">
              <img src="/portrait.jpg" alt="Derrick Nguyen" />
              <div className="portrait-tag">
                Hi, I&apos;m <b>Derrick</b>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

// ============================================================
// ABOUT
// ============================================================

function About() {
  return (
    <section className="section wrap" id="about">
      <Reveal className="section-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="idx">01</span> About
        </span>
      </Reveal>
      <div className="about-grid">
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
        <Reveal className="about-body" as="div">
          <p>
            I&apos;m a senior software engineer who loves building{" "}
            <span className="hl">data-heavy web apps</span>. Frontend is my
            specialty, but I happily tinker across the stack.
          </p>
          <p>
            Over the past several years I&apos;ve shipped products{" "}
            <strong>used by millions</strong>: Axon Academy for 500K+ officers,
            the headspace.com platform, and Compass&apos;s Marketing Center for
            30K+ agents. At Headspace I stepped up to{" "}
            <strong>Engineering Manager</strong>, leading a team of five.
          </p>
          <p>
            I&apos;m{" "}
            <span className="hl">not a fan of sticking to one thing</span>. I
            love expanding, which is why I&apos;m back in school at Georgia Tech
            specializing in
            <strong> Artificial Intelligence</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE
// ============================================================

function Experience() {
  return (
    <section className="section wrap" id="experience">
      <Reveal className="section-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="idx">02</span> Experience
        </span>
        <h2 className="section-title">Where I&apos;ve shipped.</h2>
      </Reveal>
      <div className="xp-list">
        {EXPERIENCE.map((x, i) => (
          <Reveal className="xp" as="article" key={i} delay={i * 40}>
            <div className="xp-rail">
              <div className="when">{x.when}</div>
              <div className="where">{x.where}</div>
              <div className="dur">{x.dur}</div>
            </div>
            <div className="xp-body">
              <div className="xp-co">
                <h3>{x.co}</h3>
                <span className="flagship">
                  <Icon name="spark" width={13} height={13} /> {x.flagship}
                </span>
              </div>
              <div
                className="xp-role"
                dangerouslySetInnerHTML={{__html: x.role}}
              />
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

// ============================================================
// EDUCATION
// ============================================================

function Education() {
  return (
    <section className="section wrap" id="education">
      <Reveal className="section-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="idx">03</span> Education
        </span>
        <h2 className="section-title">Always expanding.</h2>
      </Reveal>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <Reveal className="edu-card" as="div" key={i} delay={i * 80}>
            <span className={`badge${e.current ? "" : " muted"}`}>
              {e.current ? (
                <>
                  <Icon name="spark" width={12} height={12} /> In progress
                </>
              ) : (
                "Completed"
              )}
            </span>
            <h3>{e.school}</h3>
            <div className="degree">{e.degree}</div>
            <div className="when">{e.when}</div>
            <div
              className="focus"
              dangerouslySetInnerHTML={{__html: e.focus}}
            />
            <div className="bignum">&apos;{e.num}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// SKILLS
// ============================================================

function Skills() {
  return (
    <section className="section wrap" id="skills">
      <Reveal className="section-head" as="div">
        <span className="eyebrow">
          <span className="bar" />
          <span className="idx">04</span> Toolkit
        </span>
        <h2 className="section-title">What I build with.</h2>
      </Reveal>
      <Reveal className="skill-groups" as="div" delay={60}>
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

// ============================================================
// CONTACT
// ============================================================

function Contact() {
  const year = new Date().getFullYear();
  return (
    <section className="section wrap contact" id="contact">
      <Reveal className="section-head" as="div" style={{marginBottom: "28px"}}>
        <span className="eyebrow">
          <span className="bar" />
          <span className="idx">05</span> Contact
        </span>
      </Reveal>
      <Reveal as="div">
        <h2 className="contact-big">
          Let&apos;s build
          <br />
          something <span className="accent">good.</span>
        </h2>
        <p className="contact-sub">
          I&apos;m always happy to talk shop about shipping at scale,
          engineering leadership, or where AI is taking the craft.
        </p>
        <div className="contact-links">
          <a
            className="btn btn-primary"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" width={16} height={16} /> Connect on LinkedIn
          </a>
          <a className="btn btn-ghost" href={LINKS.email}>
            <Icon name="mail" width={16} height={16} /> Email me
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" width={16} height={16} /> GitHub
          </a>
        </div>
      </Reveal>
      <div className="foot">
        <span>© {year} Derrick Nguyen</span>
      </div>
    </section>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Derrick Nguyen — Senior Software Engineer</title>
        <meta
          name="description"
          content="Derrick Nguyen — senior software engineer building data-heavy web apps used by millions. Frontend at scale, engineering leadership, and AI at Georgia Tech."
        />
        <link rel="icon" href="/favicon.ico" />
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
