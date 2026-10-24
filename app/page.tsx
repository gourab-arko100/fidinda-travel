import Link from "next/link";
import Icon from "@/components/Icons";
import Maze from "@/components/Maze";
import Photo from "@/components/Photo";
import TripPlanner from "@/components/TripPlanner";
import { CtaBand, Eyebrow, FourFs, Marquee, Steps } from "@/components/Blocks";
import { services, inbound, outbound, whyFidinda, gallery } from "@/lib/content";
import { photos } from "@/lib/images";

const highlights = [
  { value: "5", label: "Core travel services" },
  { value: "6", label: "Step planning process" },
  { value: "2", label: "Directions — inbound & outbound" },
  { value: "1", label: "Point of coordination" },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg">
          <Photo id={photos.heroAngkor} alt="Angkor Wat temple, Cambodia" priority />
        </div>
        <Maze className="hero-maze" accent={false} />

        <svg className="flight-path" viewBox="0 0 800 400" aria-hidden="true">
          <path id="fp" d="M20 360 C 220 340, 300 120, 520 140 S 760 60, 790 20" />
          <g className="flight-plane">
            <path d="M-12 0 12 -2 16 0 12 2Z M-2 -1 -8 -10 -4 -10 6 -1Z M-2 1 -8 10 -4 10 6 1Z M-12 0 -15 -5 -12 -5 -9 0Z" />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp" />
            </animateMotion>
          </g>
        </svg>

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-badge">
              <span className="pulse" aria-hidden="true" />
              Phnom Penh · A service division of Fidinda Solutions
            </p>
            <h1>
              Travel made <em>simpler.</em>
              <br />
              Journeys made <em>personal.</em>
            </h1>
            <p className="lead">
              Flights, visa application support, itineraries, attractions and tour packages — planned together, with clear
              options and one point of coordination.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-red btn-lg">
                Plan your journey <Icon name="arrow" size={18} />
              </Link>
              <Link href="/services" className="btn btn-glass btn-lg">
                Explore services
              </Link>
            </div>
          </div>

          <aside className="hero-pass" aria-label="Fidinda at a glance">
            <div className="hp-top">
              <div>
                <span className="hp-label">From</span>
                <strong>PNH</strong>
                <span className="hp-city">Phnom Penh</span>
              </div>
              <div className="hp-route" aria-hidden="true">
                <span />
                <Icon name="plane" size={20} />
                <span />
              </div>
              <div className="hp-right">
                <span className="hp-label">To</span>
                <strong>ANY</strong>
                <span className="hp-city">Your journey</span>
              </div>
            </div>
            <ul className="hp-list">
              {["Air ticketing", "Visa assistance", "Travel planning", "Attraction bookings", "Inbound & outbound tours"].map(
                (s) => (
                  <li key={s}>
                    <Icon name="check" size={14} /> {s}
                  </li>
                )
              )}
            </ul>
            <div className="hp-barcode" aria-hidden="true" />
          </aside>
        </div>

        <div className="container hero-planner">
          <TripPlanner />
        </div>
      </section>

      <Marquee />

      {/* ================= ABOUT ================= */}
      <section className="section about-home">
        <div className="container about-grid">
          <div className="collage" data-reveal>
            <div className="collage-main">
              <Photo id={photos.airportLuggage} alt="Traveller with luggage watching a plane at the airport" sizes="(max-width: 960px) 90vw, 40vw" width={1000} />
            </div>
            <div className="collage-small">
              <Photo id={photos.mapHands} alt="Traveller holding a map" sizes="(max-width: 960px) 50vw, 20vw" width={700} />
            </div>
            <div className="collage-badge">
              <strong>4 Fs</strong>
              <span>One Fidinda commitment</span>
            </div>
            <Maze className="collage-maze" />
          </div>

          <div data-reveal>
            <Eyebrow no="01">About us</Eyebrow>
            <h2>
              Travel support built around <span className="u-red">your journey</span>
            </h2>
            <p className="big-p">
              Fidinda Travel Solutions is the travel services division of Fidinda Solutions, a Cambodia-based service company
              that has expanded from financial and management services into healthcare facilitation and travel solutions.
            </p>
            <p>
              We help individuals, families, business travellers and organisations plan and coordinate travel with clear
              information, practical assistance and attention to individual preferences.
            </p>
            <div className="mini-cards">
              <div>
                <Icon name="landing" size={22} />
                <span>
                  <strong>Visiting Cambodia?</strong> Enjoyable, practical itineraries.
                </span>
              </div>
              <div>
                <Icon name="takeoff" size={22} />
                <span>
                  <strong>Going overseas?</strong> Planning, documents & arrangements.
                </span>
              </div>
            </div>
            <Link href="/about" className="text-link">
              More about Fidinda <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="stats" data-reveal>
            {highlights.map((h) => (
              <div className="stat" key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <Eyebrow no="02">Our services</Eyebrow>
              <h2>Everything your trip needs, coordinated in one place</h2>
            </div>
            <Link href="/services" className="text-link">
              All services <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Link
                href={`/services#${s.id}`}
                className={`svc-card${i === 0 ? " svc-card-lg" : ""}`}
                key={s.id}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="svc-img">
                  <Photo id={s.image} alt={s.title} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" width={900} />
                  <span className="svc-no">{s.no}</span>
                </div>
                <div className="svc-body">
                  <span className="svc-icon">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="svc-more">
                    Learn more <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            ))}
            <Link href="/contact" className="svc-card svc-cta" data-reveal>
              <Maze className="svc-cta-maze" accent={false} />
              <h3>Not sure where to start?</h3>
              <p>Tell us your destination, dates and budget — we&rsquo;ll help shape the options.</p>
              <span className="btn btn-white">
                Send an enquiry <Icon name="arrow" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOUR Fs ================= */}
      <section className="section section-navy fours-section">
        <Maze className="fours-maze" accent={false} />
        <div className="container">
          <div className="section-head center">
            <Eyebrow no="03" light>
              The Four Fs of Fidinda
            </Eyebrow>
            <h2>
              Four Fs. <span className="u-red">One Fidinda commitment.</span>
            </h2>
            <p className="lead">Our services are guided by the four fundamental values represented in the Fidinda logo.</p>
          </div>
          <FourFs />
          <p className="promise-line">
            <span>Faith</span> in our integrity · <span>Friendship</span> in our relationships · <span>Flexibility</span> in
            our solutions · <span>Focus</span> on your journey
          </p>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <Eyebrow no="04">Destinations</Eyebrow>
              <h2>Into Cambodia, or out to the world</h2>
            </div>
            <p className="head-note">Ideas to inspire your plan — every itinerary is shaped around your interests, pace and budget.</p>
          </div>

          <div className="bento">
            {gallery.map((g, i) => (
              <Link
                href="/destinations"
                key={g.title}
                className={`bento-item${g.size ? ` bento-${g.size}` : ""}`}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <Photo id={g.image} alt={`${g.title}, ${g.place}`} sizes="(max-width: 640px) 100vw, 40vw" width={1000} />
                <span className={`bento-tag${g.tag === "Outbound" ? " out" : ""}`}>{g.tag}</span>
                <span className="bento-cap">
                  <strong>{g.title}</strong>
                  <span>
                    <Icon name="pin" size={14} /> {g.place}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="io-grid">
            {[
              { d: inbound, icon: "landing", tag: "Inbound", img: photos.templeJungle },
              { d: outbound, icon: "takeoff", tag: "Outbound", img: photos.airliner },
            ].map(({ d, icon, tag, img }) => (
              <article className="io-card" key={tag} data-reveal>
                <div className="io-bg">
                  <Photo id={img} alt="" sizes="(max-width: 960px) 100vw, 50vw" width={1200} />
                </div>
                <div className="io-content">
                  <span className="io-icon">
                    <Icon name={icon} size={26} />
                  </span>
                  <span className="io-tag">{tag}</span>
                  <h3>{d.title}</h3>
                  <p>{d.intro}</p>
                  <Link href="/destinations" className="io-link">
                    Explore {tag.toLowerCase()} travel <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head center">
            <Eyebrow no="05">Customer journey</Eyebrow>
            <h2>How our service works</h2>
            <p className="lead">
              Planning before booking, practical advice before commitment, and timely communication as arrangements
              progress.
            </p>
          </div>
          <Steps />
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="section">
        <div className="container why-wrap">
          <div className="why-photo" data-reveal>
            <Photo id={photos.windowSunset} alt="Aeroplane window view at golden hour" sizes="(max-width: 960px) 100vw, 45vw" width={1100} />
            <div className="why-photo-card">
              <span>Our promise</span>
              <p>
                Thoughtful planning, understandable options and careful coordination — with your travel decisions always in
                your hands.
              </p>
            </div>
          </div>
          <div>
            <Eyebrow no="06">Why Fidinda</Eyebrow>
            <h2>Practical guidance, personal attention</h2>
            <ul className="why-list">
              {whyFidinda.map((w, i) => (
                <li key={w.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="why-no">0{i + 1}</span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
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
