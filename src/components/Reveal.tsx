import React, {useEffect, useRef, useState} from "react";

interface RevealProps {
  as?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

export default function Reveal({
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
    if (rect.top < window.innerHeight * 0.92 || typeof IntersectionObserver === "undefined") {
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
    {ref, className: `reveal${shown ? " in" : ""}${className ? " " + className : ""}`, ...rest},
    children,
  );
}
