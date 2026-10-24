import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow, Notice, PageHero, Steps } from "@/components/Blocks";
import Icon from "@/components/Icons";
import { services } from "@/lib/content";
import Photo from "@/components/Photo";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air ticketing, visa application assistance, personalised travel planning, attraction & experience bookings and tour packages from Fidinda Travel Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        no="03"
        eyebrow="Our services"
        title="Air ticketing, visas, planning & experiences"
        lead="Air travel, visa preparation, itineraries and attractions can be planned together — so you see the whole journey instead of isolated bookings."
        image={photos.windowSunset}
        imageAlt="View from an aeroplane window"
        crumb="Services"
      />

      <nav className="service-jump" aria-label="Services on this page">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span>{s.no}</span> {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section">
        <div className="container service-list">
          {services.map((s) => (
            <article id={s.id} className="service-detail" key={s.id}>
              <div className="service-media" data-reveal>
                <Photo id={s.image} alt={s.title} sizes="(max-width: 960px) 100vw, 45vw" width={1100} />
                <span className="service-media-no">{s.no}</span>
                <span className="service-media-icon">
                  <Icon name={s.icon} size={30} />
                </span>
              </div>
              <div className="service-detail-body" data-reveal>
                <h2>{s.title}</h2>
                <p className="lead-dark">{s.intro}</p>
                <ul className="checklist">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} />
                      {p}
                    </li>
                  ))}
                </ul>
                {s.note &&
                  (s.id === "visa-assistance" ? (
                    <Notice>{s.note}</Notice>
                  ) : (
                    <Notice label="Please note">{s.note}</Notice>
                  ))}
                <Link href="/contact" className="text-link">
                  Enquire about {s.title.toLowerCase()} <Icon name="arrow" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="how-it-works">
        <div className="container">
          <div className="section-head">
            <Eyebrow no="06">Customer journey</Eyebrow>
            <h2>How our service works</h2>
          </div>
          <Steps />
          <div className="roles">
            <h3>Decision-making and provider roles</h3>
            <p>
              Clients make their own travel decisions. Tickets, hotel stays, activities, transport and visa processes may
              be delivered by independent suppliers or public authorities, each subject to their own rules and terms.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to plan your trip?" />
    </>
  );
}
