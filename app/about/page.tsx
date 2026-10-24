import type { Metadata } from "next";
import { CtaBand, Eyebrow, FourFs, PageHero } from "@/components/Blocks";
import { divisions } from "@/lib/content";
import Photo from "@/components/Photo";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fidinda Travel Solutions is the travel services division of Fidinda Solutions, a Cambodia-based service company in Phnom Penh.",
};

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

      <section id="vision" className="section section-tint">
        <div className="container">
          <div className="vm-grid">
            <article className="vm-card" data-reveal>
              <span className="vm-label">Our purpose</span>
              <p>
                To make travel preparation less complicated and help clients make informed choices about routes,
                schedules, destinations, budgets and travel arrangements.
              </p>
            </article>
            <article className="vm-card" data-reveal>
              <span className="vm-label">Our vision</span>
              <p>
                To become a trusted Cambodia-based travel solutions provider recognised for clear guidance, dependable
                coordination and personalised travel experiences.
              </p>
            </article>
            <article className="vm-card" data-reveal>
              <span className="vm-label">Our mission</span>
              <p>
                To help travellers plan and arrange suitable journeys through responsive service, transparent
                communication, careful attention to detail and a practical understanding of each traveller&rsquo;s
                purpose, preferences and budget.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="four-fs" className="section">
        <div className="container">
          <div className="section-head">
            <Eyebrow no="02">Our service commitments</Eyebrow>
            <h2>The Four Fs of Fidinda</h2>
            <p className="lead">
              Our services are guided by the four fundamental values represented in the Fidinda logo: Faith, Friendship,
              Flexibility and Focus. These values define how we engage with our clients, understand their travel needs,
              and deliver reliable, personalised travel solutions.
            </p>
          </div>
          <FourFs detailed />
        </div>
      </section>

      <section className="section section-navy promise-section">
        <div className="container promise-wrap">
          <Eyebrow light>Our brand promise</Eyebrow>
          <h2>Four Fs. One Fidinda Commitment.</h2>
          <ul className="promise-list">
            <li>
              <span>Faith</span> in our integrity.
            </li>
            <li>
              <span>Friendship</span> in our relationships.
            </li>
            <li>
              <span>Flexibility</span> in our solutions.
            </li>
            <li>
              <span>Focus</span> on your journey.
            </li>
          </ul>
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
