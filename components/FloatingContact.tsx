import BrandIcon from "./BrandIcons";
import { contact, links } from "@/lib/content";

/** Floating WhatsApp & Telegram buttons, bottom-right on every page. */
export default function FloatingContact() {
  return (
    <div className="float-contact" role="complementary" aria-label="Chat with Fidinda Travel">
      <a
        href={links.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-telegram"
        aria-label={`Chat on Telegram ${contact.telegram}`}
      >
        <BrandIcon name="telegram" size={26} />
        <span className="float-tip">
          Telegram <small>{contact.telegram}</small>
        </span>
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        aria-label={`Chat on WhatsApp ${contact.whatsapp}`}
      >
        <BrandIcon name="whatsapp" size={28} />
        <span className="float-tip">
          WhatsApp <small>{contact.whatsapp}</small>
        </span>
      </a>
    </div>
  );
}
