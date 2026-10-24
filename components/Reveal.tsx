"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades elements marked with data-reveal into view as they scroll in.
 * Content stays fully visible if JavaScript is unavailable.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
