"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import Icon from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Fidinda Travel Solutions — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-light" src="/logo-white.png" alt="Fidinda Travel Solutions" width={618} height={126} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-dark" src="/logo.png" alt="" aria-hidden="true" width={618} height={126} />
        </Link>

        <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={isActive(item.href) ? "active" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-red nav-cta">
            Plan your journey <Icon name="arrow" size={16} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
