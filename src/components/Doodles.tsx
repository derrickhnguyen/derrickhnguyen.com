import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

export function Surfer(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 240 170" {...p}>
      <g className="d-bob">
        <path
          className="fill-pop2 stroke thin"
          d="M8 150 C8 96 64 64 112 76 C150 85 168 56 150 42 C182 58 184 110 156 130 C124 152 44 158 8 150 Z"
        />
        <path className="stroke thin fill-none" d="M150 44 C162 50 164 66 152 72" />
        <path className="stroke thin fill-none" d="M40 132 C56 140 84 142 104 136" />
      </g>
      <g className="d-bob2" transform="translate(104 30)">
        <ellipse
          className="fill-pop stroke thin"
          cx="2"
          cy="44"
          rx="34"
          ry="8"
          transform="rotate(-12 2 44)"
        />
        <line className="stroke" x1="2" y1="36" x2="6" y2="16" />
        <circle className="fill-fg stroke" cx="8" cy="7" r="8" />
        <line className="stroke" x1="3" y1="22" x2="-16" y2="14" />
        <line className="stroke" x1="5" y1="22" x2="26" y2="10" />
        <line className="stroke" x1="2" y1="36" x2="-12" y2="44" />
        <line className="stroke" x1="6" y1="36" x2="18" y2="46" />
      </g>
    </svg>
  );
}

export function Snowboarder(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 210 200" {...p}>
      <g className="d-carve" transform="translate(96 104)">
        <rect
          className="fill-pop stroke thin"
          x="-66"
          y="34"
          width="132"
          height="15"
          rx="7"
          transform="rotate(-26 0 41)"
        />
        <line className="stroke" x1="-26" y1="22" x2="-44" y2="50" />
        <line className="stroke" x1="6" y1="20" x2="30" y2="36" />
        <line className="stroke" x1="-8" y1="-22" x2="-10" y2="20" />
        <circle className="fill-fg stroke" cx="-4" cy="-34" r="11" />
        <path className="fill-pop2 stroke thin" d="M-16 -38 A12 12 0 0 1 8 -38 Z" />
        <line className="stroke" x1="-8" y1="-12" x2="-40" y2="-26" />
        <line className="stroke" x1="-9" y1="-8" x2="22" y2="-22" />
      </g>
    </svg>
  );
}

export function Climber(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 170 210" {...p}>
      <circle className="fill-pop2" cx="120" cy="34" r="11" />
      <circle className="fill-pop2" cx="40" cy="84" r="9" />
      <circle className="fill-pop2" cx="132" cy="118" r="9" />
      <circle className="fill-pop2" cx="58" cy="168" r="11" />
      <g transform="translate(78 110)">
        <line className="stroke" x1="0" y1="-22" x2="6" y2="34" />
        <circle className="fill-fg stroke" cx="-2" cy="-34" r="11" />
        <path className="stroke fill-none" d="M-2 -14 C-22 -10 -34 -18 -38 -26" />
        <path className="stroke fill-none" d="M6 30 C-8 40 -16 50 -22 58" />
        <path className="stroke fill-none" d="M6 30 C24 42 30 52 38 60" />
        <g className="d-reach">
          <path className="stroke fill-none" d="M2 -16 C20 -28 32 -52 42 -76" />
        </g>
      </g>
    </svg>
  );
}

export function Lifter(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 170 210" {...p}>
      <g transform="translate(85 96)">
        <line className="stroke" x1="-4" y1="44" x2="-22" y2="92" />
        <line className="stroke" x1="2" y1="44" x2="20" y2="92" />
        <line className="stroke" x1="-2" y1="-6" x2="-1" y2="46" />
        <circle className="fill-fg stroke" cx="-1" cy="-20" r="12" />
        <g className="d-rep">
          <line className="stroke" x1="-2" y1="-4" x2="-22" y2="-44" />
          <line className="stroke" x1="0" y1="-4" x2="22" y2="-44" />
          <line className="stroke" x1="-54" y1="-46" x2="54" y2="-46" />
          <rect className="fill-pop stroke thin" x="-58" y="-60" width="14" height="28" rx="3" />
          <rect className="fill-pop stroke thin" x="44" y="-60" width="14" height="28" rx="3" />
          <rect className="fill-pop2 stroke thin" x="-44" y="-55" width="9" height="18" rx="2" />
          <rect className="fill-pop2 stroke thin" x="35" y="-55" width="9" height="18" rx="2" />
        </g>
      </g>
    </svg>
  );
}

export function Sun(p: SvgProps) {
  const rays = Array.from({length: 10}, (_, i) => {
    const a = (i * Math.PI * 2) / 10;
    return {
      x1: 60 + Math.cos(a) * 34,
      y1: 60 + Math.sin(a) * 34,
      x2: 60 + Math.cos(a) * 52,
      y2: 60 + Math.sin(a) * 52,
    };
  });
  return (
    <svg className="doodle" viewBox="0 0 120 120" {...p}>
      <g className="d-spin">
        {rays.map((r, i) => (
          <line key={i} className="stroke" x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
      <circle className="fill-pop stroke thin" cx="60" cy="60" r="26" />
    </svg>
  );
}

export function Mountains(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 260 130" {...p}>
      <path className="fill-pop2 stroke thin" d="M4 124 L70 28 L120 86 L150 50 L210 124 Z" />
      <path className="fill-pop stroke thin" d="M120 124 L186 36 L256 124 Z" />
      <path className="stroke thin fill-none" d="M58 44 L70 28 L82 44" />
      <path className="stroke thin fill-none" d="M174 52 L186 36 L198 52" />
    </svg>
  );
}

export function Sparkle(p: SvgProps) {
  return (
    <svg className="doodle d-twinkle" viewBox="0 0 44 44" {...p}>
      <path
        className="fill-pop"
        d="M22 2 C24 16 28 20 42 22 C28 24 24 28 22 42 C20 28 16 24 2 22 C16 20 20 16 22 2 Z"
      />
    </svg>
  );
}

export function Bolt(p: SvgProps) {
  return (
    <svg className="doodle d-bob2" viewBox="0 0 44 64" {...p}>
      <path className="fill-pop stroke thin" d="M26 2 L8 36 L22 36 L16 62 L40 24 L24 24 Z" />
    </svg>
  );
}

export function Squiggle(p: SvgProps) {
  return (
    <svg className="doodle" viewBox="0 0 120 24" {...p}>
      <path
        className="stroke fill-none"
        d="M4 12 C16 0 28 0 40 12 C52 24 64 24 76 12 C88 0 100 0 112 12"
      />
    </svg>
  );
}

export function CursorDown(p: SvgProps) {
  return (
    <svg
      viewBox="0 0 22 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M11 3 L11 26 M3 18 L11 27 L19 18" />
    </svg>
  );
}
