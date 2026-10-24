import Link from "next/link";
import BrandIcon from "./BrandIcons";
import { contact, footerColumns, links, site, socials } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand + contact */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Fidinda Travel Solutions — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Fidinda Travel Solutions" width={618} height={126} />
          </Link>
          <p className="footer-about">
            Helping travellers to and from Cambodia plan flights, visas, itineraries and experiences with clear options,
            transparent planning and one point of coordination.
          </p>

          <ul className="footer-contact">
            <li>
              <span>Call (Khmer)</span>
              <a href={links.tel(contact.phoneKhmer)}>{contact.phoneKhmer}</a>
            </li>
            <li>
              <span>Call (English)</span>
              <a href={links.tel(contact.phoneEnglish)}>{contact.phoneEnglish}</a>
            </li>
            <li className="stack">
              <span>Email</span>
              <a href={links.email}>{contact.email}</a>
            </li>
            <li>
              <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer">
                {site.website}
              </a>
            </li>
            <li className="footer-place">{site.location}</li>
          </ul>

          <p className="footer-follow">Follow us</p>
          <ul className="footer-social">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Fidinda on ${s.name}`}>
                  <BrandIcon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <nav className="footer-col" key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">
          © {year} {site.name}. All rights reserved. A division of {site.legalEntity}
        </p>
      </div>
    </footer>
  );
}
