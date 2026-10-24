import type { ReactNode } from "react";
import Link from "next/link";
import Maze from "./Maze";
import Icon from "./Icons";
import Photo from "./Photo";
import { fourFs, steps, serviceStrip } from "@/lib/content";
import { photos } from "@/lib/images";

export function Eyebrow({ no, children, light }: { no?: string; children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      {no && <span className="eyebrow-no">{no}</span>}
      {children}
    </p>
  );
}

export function PageHero({
  no,
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumb,
}: {
  no: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <Photo id={image} alt={imageAlt} priority />
      </div>
      <Maze className="page-hero-maze" />
      <div className="container page-hero-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <Eyebrow no={no} light>
          {eyebrow}
        </Eyebrow>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function Marquee({ items = serviceStrip }: { items?: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="marquee-row" key={k}>
            {row.map((s, i) => (
              <span key={`${k}-${i}`}>
                <Icon name="plane" size={18} /> {s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Notice({ label = "Important", children }: { label?: string; children: ReactNode }) {
  return (
    <div className="notice" role="note">
      <Icon name="info" size={20} />
      <p>
        <strong>{label}:</strong> {children}
      </p>
    </div>
  );
}

export function FourFs({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`fours${detailed ? " fours-detailed" : ""}`}>
      {fourFs.map((f, i) => (
        <article className="f-card" key={f.word} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
          <span className="f-ghost" aria-hidden="true">
            {f.word.charAt(0)}
          </span>
          <div className="f-head">
            <span className="f-letter" aria-hidden="true">
              F
            </span>
            <span className="f-index">0{i + 1}</span>
          </div>
          <h3>{f.word}</h3>
          <p className="f-sub">{f.title}</p>
          {detailed && <p className="f-text">{f.text}</p>}
        </article>
      ))}
    </div>
  );
}

export function Steps() {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.no} className="step" data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
          <div className="step-top">
            <span className="step-no">{s.no}</span>
            <span className="step-dot" aria-hidden="true">
              <Icon name={i === steps.length - 1 ? "check" : "plane"} size={16} />
            </span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({
  title = "Plan your next journey with Fidinda",
  text = "Whether you are arranging flights, seeking visa application support, organising an inbound Cambodia holiday or planning a journey overseas, Fidinda Travel Solutions welcomes your enquiry.",
  image = photos.windowGolden,
}: {
  title?: string;
  text?: string;
  image?: string;
}) {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <Photo id={image} alt="View from an aeroplane window at golden hour" />
      </div>
      <div className="container cta-inner" data-reveal>
        <Eyebrow light>Get in touch</Eyebrow>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-red btn-lg">
            Send an enquiry <Icon name="arrow" size={18} />
          </Link>
          <Link href="/services" className="btn btn-glass btn-lg">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
