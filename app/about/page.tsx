import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero } from "@/components/Blocks";
import Maze from "@/components/Maze";
import Icon from "@/components/Icons";
import { divisions } from "@/lib/content";
import Photo from "@/components/Photo";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fidinda Travel Solutions is the travel services division of Fidinda Solutions, a Cambodia-based service company in Phnom Penh.",
};

const vmItems = [
  {
    label: "Our purpose",
    title: "Why we exist",
    icon: "compass",
    text: "To make travel preparation less complicated and help clients make informed choices about routes, schedules, destinations, budgets and travel arrangements.",
  },
  {
    label: "Our vision",
    title: "Where we’re heading",
    icon: "eye",
    text: "To become a trusted Cambodia-based travel solutions provider recognised for clear guidance, dependable coordination and personalised travel experiences.",
  },
  {
    label: "Our mission",
    title: "How we get there",
    icon: "target",
    text: "To help travellers plan and arrange suitable journeys through responsive service, transparent communication, careful attention to detail and a practical understanding of each traveller’s purpose, preferences and budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        no="01"
        eyebrow="About us"
        title="Travel support built around your journey"
        lead="One point of coordination. Clear options. Travel plans shaped around the traveller."
        image={photos.angkorPath}
        imageAlt="Travellers walking toward Angkor Wat"
        crumb="About"
      />

      <section className="section">
        <div className="container split">
          <div data-reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2>A Cambodia-based travel solutions division</h2>
            <div className="frame-photo">
              <Photo id={photos.phnomPenh} alt="Rooftop architecture in Phnom Penh, Cambodia" sizes="(max-width: 960px) 100vw, 40vw" width={1000} />
            </div>
          </div>
          <div className="prose" data-reveal>
            <p>
              Fidinda Travel Solutions is the travel services division of Fidinda Solutions, a Cambodia-based service
              company that has expanded from financial and management services into healthcare facilitation and travel
              solutions.
            </p>
            <p>
              We help individuals, families, business travellers and organisations plan and coordinate travel with clear
              information, practical assistance and attention to individual preferences. Our scope includes flight
              ticketing, visa application assistance, itinerary and travel planning, attraction bookings, and inbound and
              outbound travel packages.
            </p>
            <p>
              For visitors travelling to Cambodia, we support the organisation of enjoyable and practical itineraries.
              For Cambodia-based travellers going overseas, we assist with planning the journey, understanding
              documentation needs and coordinating travel arrangements.
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="section section-tint vm-section">
        <Maze className="vm-maze" accent={false} />
        <div className="container">
          <div className="section-head center">
            <Eyebrow>Our direction</Eyebrow>
            <h2>
              Purpose, vision <span className="u-red">&amp; mission</span>
            </h2>
            <p className="lead">What we do, where we are heading, and how we help every traveller get there.</p>
          </div>

          <div className="vm-grid">
            <span className="vm-route" aria-hidden="true">
              <span className="vm-route-plane">
                <Icon name="plane" size={18} />
              </span>
            </span>
            {vmItems.map((v, i) => (
              <article
                className={`vm-card${i === 1 ? " vm-card-featured" : ""}`}
                key={v.label}
                data-reveal
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <span className="vm-ghost" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="vm-icon">
                  <Icon name={v.icon} size={28} />
                </span>
                <span className="vm-label">{v.label}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
                <span className="vm-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section">
        <div className="container split">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2>Plan first. Book second.</h2>
          </div>
          <div className="approach">
            {[
              ["Planning before booking", "We map out the journey before anything is committed."],
              ["Practical advice before commitment", "Options, conditions and costs are explained up front."],
              ["Timely communication", "We keep you updated as arrangements progress."],
            ].map(([t, d], i) => (
              <div className="approach-row" key={t} data-reveal>
                <span className="approach-no">0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="group" className="section section-tint">
        <div className="container split">
          <div>
            <Eyebrow>Our position within Fidinda Solutions</Eyebrow>
            <h2>Part of a wider service ecosystem</h2>
            <p className="muted-text">
              Fidinda Travel Solutions operates alongside Fidinda Financial Solutions, Fidinda Management Solutions and
              Fidinda Health Solutions. This wider service ecosystem allows appropriate coordination across different
              client needs, without treating travel arrangements and specialist professional services as
              interchangeable.
            </p>
          </div>
          <div className="divisions">
            <div className="divisions-root">Fidinda Solutions</div>
            <ul>
              {divisions.map((d) => (
                <li key={d.name} className={d.current ? "is-current" : undefined}>
                  {d.name}
                  {d.current && <span className="tag tag-red">You are here</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
