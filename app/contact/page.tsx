import type { Metadata } from "next";
import { Eyebrow, PageHero } from "@/components/Blocks";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icons";
import BrandIcon from "@/components/BrandIcons";
import { contact, importantInfo, links, servicesAtAGlance, site, socials } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a travel enquiry to Fidinda Travel Solutions, Phnom Penh — flights, visa application support, Cambodia holidays and overseas journeys.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        no="09"
        eyebrow="Get in touch"
        title="Plan your next journey with Fidinda"
        lead="Whether you are arranging flights, seeking visa application support, organising an inbound Cambodia holiday or planning a journey overseas, Fidinda Travel Solutions welcomes your enquiry."
        image={photos.mapPointing}
        imageAlt="Traveller pointing at a map while planning a trip"
        crumb="Contact"
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form-wrap" id="enquiry">
            <Eyebrow>Travel enquiry</Eyebrow>
            <h2>Tell us about your trip</h2>
            <p className="muted-text">
              Share your destination, dates, purpose, number of travellers, preferences and expected budget. We&rsquo;ll
              help identify suitable options.
            </p>
            <EnquiryForm />
          </div>

          <aside className="contact-side">
            <div className="contact-card contact-card-navy">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.png" alt="Fidinda Travel Solutions" width={618} height={126} />
              <p className="contact-div">A service division of {site.parent}</p>
              <ul className="contact-lines">
                <li>
                  <Icon name="phone" size={20} />
                  <span>
                    <a href={links.tel(contact.phoneKhmer)}>{contact.phoneKhmer}</a> <em>(Khmer)</em>
                    <br />
                    <a href={links.tel(contact.phoneEnglish)}>{contact.phoneEnglish}</a> <em>(English)</em>
                  </span>
                </li>
                <li>
                  <Icon name="mail" size={20} />
                  <a href={links.email}>{contact.email}</a>
                </li>
                <li>
                  <Icon name="pin" size={20} />
                  <span>{site.location}</span>
                </li>
                <li>
                  <Icon name="globe" size={20} />
                  <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {site.website}
                  </a>
                </li>
              </ul>
              <div className="chat-btns">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="chat-btn chat-wa">
                  <BrandIcon name="whatsapp" size={20} /> WhatsApp
                </a>
                <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="chat-btn chat-tg">
                  <BrandIcon name="telegram" size={20} /> Telegram
                </a>
              </div>
              <ul className="footer-social contact-social">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Fidinda on ${s.name}`}>
                      <BrandIcon name={s.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-card">
              <h3>Services at a glance</h3>
              <ul className="checklist checklist-tight">
                {servicesAtAGlance.map((s) => (
                  <li key={s}>
                    <Icon name="check" size={18} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-card contact-card-soft">
              <h3>Important service information</h3>
              <p>{importantInfo}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
