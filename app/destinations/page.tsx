import type { Metadata } from "next";
import { CtaBand, Eyebrow, Notice, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icons";
import Link from "next/link";
import { audiences, destinationsNote, gallery, inbound, outbound, partnerTypes } from "@/lib/content";
import Photo from "@/components/Photo";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Inbound travel to Cambodia and outbound international travel from Cambodia — itineraries, flights, visas and packages from Fidinda Travel Solutions.",
};

const audienceIcons = ["home", "takeoff", "landing", "briefcase", "group", "heart"];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        no="05"
        eyebrow="Destinations"
        title="Inbound Cambodia & outbound travel"
        lead="Our positioning is designed for both people travelling from Cambodia and visitors planning their experience within the country."
        image={photos.templeJungle}
        imageAlt="Ancient temple entrance in the Cambodian jungle"
        crumb="Destinations"
      />

      <section className="section">
        <div className="container">
          <div className="dual dual-lg">
            {[
              { d: inbound, icon: "landing", tag: "Inbound · Visiting Cambodia", img: photos.angkorPath },
              { d: outbound, icon: "takeoff", tag: "Outbound · From Cambodia", img: photos.singapore },
            ].map(({ d, icon, tag, img }) => (
              <article className="dual-card" key={tag} id={tag.startsWith("Inbound") ? "inbound" : "outbound"} data-reveal>
                <div className="dual-photo">
                  <Photo id={img} alt={d.title} sizes="(max-width: 960px) 100vw, 50vw" width={1100} />
                </div>
                <div className="dual-top">
                  <span className="dual-icon">
                    <Icon name={icon} size={30} />
                  </span>
                  <span className="tag">{tag}</span>
                </div>
                <h2>{d.title}</h2>
                <p>{d.intro}</p>
                <ul className="checklist">
                  {d.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="section-head section-head-row gallery-head" id="ideas">
            <div>
              <h2>Ideas to inspire your plan</h2>
            </div>
            <Link href="/contact" className="text-link">
              Ask about a destination
            </Link>
          </div>
          <div className="bento">
            {gallery.map((g) => (
              <div key={g.title} className={`bento-item${g.size ? ` bento-${g.size}` : ""}`} data-reveal>
                <Photo id={g.image} alt={`${g.title}, ${g.place}`} sizes="(max-width: 640px) 100vw, 40vw" width={1000} />
                <span className={`bento-tag${g.tag === "Outbound" ? " out" : ""}`}>{g.tag}</span>
                <span className="bento-cap">
                  <strong>{g.title}</strong>
                  <span>
                    <Icon name="pin" size={14} /> {g.place}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <Notice label="Please note">{destinationsNote}</Notice>
        </div>
      </section>

      <section className="section section-tint" id="who-we-serve">
        <div className="container">
          <div className="section-head">
            <Eyebrow no="07">Clients & partners</Eyebrow>
            <h2>Who we serve</h2>
          </div>
          <div className="aud-grid">
            {audiences.map((a, i) => (
              <article className="aud-card" key={a.title} data-reveal>
                <span className="aud-icon">
                  <Icon name={audienceIcons[i]} size={24} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="container split">
          <div>
            <Eyebrow>Potential collaboration opportunities</Eyebrow>
            <h2>Partner with Fidinda</h2>
            <p className="muted-text">
              Fidinda Travel Solutions welcomes discussions with travel partners. Our focus is on reliable
              communication, clear service responsibilities, transparent quotations and arrangements that match the
              expectations of travellers.
            </p>
            <p className="fine">
              Any partnership, rate, preferred-provider status or booking inventory would be subject to a separate
              agreement.
            </p>
          </div>
          <ul className="partner-list">
            {partnerTypes.map((p) => (
              <li key={p}>
                <Icon name="arrow" size={18} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Where would you like to go?" />
    </>
  );
}
