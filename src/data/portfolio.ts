export interface Fact {
  dt: string;
  dd: string;
  sub: string;
}

export interface Job {
  co: string;
  role: string;
  when: string;
  dur: string;
  where: string;
  bullets: string[];
  tags: string[];
}

export interface Edu {
  school: string;
  degree: string;
  focus: string;
  when: string;
  current: boolean;
  num: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export const LINKS = {
  linkedin: "https://linkedin.com/in/derrickhn",
  github: "https://github.com/derrickhnguyen",
  email: "mailto:derrickhnguyen@outlook.com",
};

export const FACTS: Fact[] = [
  {dt: "Currently", dd: "Senior Software Engineer", sub: "Axon · Remote"},
  {dt: "Studying", dd: "MS Computer Science — AI", sub: "Georgia Tech"},
  {dt: "Specialty", dd: "Data-heavy frontend, at scale", sub: "+ backend & DevOps"},
  {dt: "Based", dd: "Remote", sub: "United States"},
];

export const EXPERIENCE: Job[] = [
  {
    co: "Axon",
    role: "Senior Software Engineer",
    when: "Dec 2024 — Present",
    dur: "1 yr 6 mos",
    where: "Remote",
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
    role: 'Engineering Manager <span class="arr">←</span> Senior Software Engineer',
    when: "Apr 2022 — Nov 2024",
    dur: "2 yrs 8 mos",
    where: "Remote",
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
    bullets: [
      "Designed and built a customizable <b>report-writing framework for Axon Records</b>, improving usability for law-enforcement agencies.",
      "Developed a <b>rich-text editing library in React</b>, improving consistency across multiple web applications.",
      "Mentored junior engineers through pair programming and code reviews.",
    ],
    tags: ["React.js", "Web Interface Design", "Rich Text"],
  },
];

export const EDUCATION: Edu[] = [
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

export const SKILLS: SkillGroup[] = [
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
    items: ["Electron", "DevOps", "Distributed Systems", "AI / Machine Learning"],
  },
];

export const NAV_ITEMS = [
  {id: "about", label: "About"},
  {id: "experience", label: "Experience"},
  {id: "education", label: "Education"},
  {id: "skills", label: "Skills"},
  {id: "contact", label: "Contact"},
];

export const SEO = {
  siteUrl: "https://derrickhnguyen.com",
  ogImage:
    "https://res.cloudinary.com/derrickhnguyen/image/upload/c_fill,g_face,h_630,w_1200/v1595200719/derrickhnguyen/profile-picture.jpg",
  description:
    "Senior software engineer building data-heavy web apps used by millions. Frontend at scale, engineering leadership, and AI at Georgia Tech.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Derrick Nguyen",
    jobTitle: "Senior Software Engineer",
    url: "https://derrickhnguyen.com",
    image:
      "https://res.cloudinary.com/derrickhnguyen/image/upload/c_fill,g_face,h_630,w_1200/v1595200719/derrickhnguyen/profile-picture.jpg",
    sameAs: ["https://linkedin.com/in/derrickhn", "https://github.com/derrickhnguyen"],
    worksFor: {"@type": "Organization", name: "Axon"},
    alumniOf: [
      {"@type": "CollegeOrUniversity", name: "Georgia Institute of Technology"},
      {"@type": "CollegeOrUniversity", name: "California State University, Long Beach"},
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Frontend Engineering",
      "Artificial Intelligence",
    ],
  },
};
