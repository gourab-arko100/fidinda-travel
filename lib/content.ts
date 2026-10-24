import { photos } from "./images";

// All copy is taken from the Fidinda Travel Solutions Business Profile (October 2026).

export const site = {
  name: "Fidinda Travel Solutions",
  parent: "Fidinda Solutions",
  tagline: "Travel Made Simpler. Journeys Made Personal.",
  location: "Phnom Penh, Kingdom of Cambodia",
  website: "www.fidindasolutions.com",
  websiteUrl: "https://www.fidindasolutions.com",
  legalEntity: "Fidinda Financial and Management Solutions Co., Ltd.",
  registrationNo: "10003371",
  vatTin: "K007-902305537",
};

// Contact details — edit here and they update across the whole site
// (footer, contact page and the floating WhatsApp / Telegram buttons).
export const contact = {
  phoneKhmer: "+855 16 812 444",
  phoneEnglish: "+855 17 457 244",
  telegram: "+855 16 812 444",
  whatsapp: "+855 17 457 244",
  email: "info@fidindasolutions.com",
};

/** "+855 16 812 444" -> "85516812444" */
export const digits = (n: string) => n.replace(/\D/g, "");

export const links = {
  tel: (n: string) => `tel:+${digits(n)}`,
  whatsapp: `https://wa.me/${digits(contact.whatsapp)}?text=${encodeURIComponent(
    "Hello Fidinda Travel Solutions, I would like help planning a trip."
  )}`,
  telegram: `https://t.me/+${digits(contact.telegram)}`,
  email: `mailto:${contact.email}`,
};

export const socials = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/share/19r5ibhQkV/" },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/fidinda.solutions?utm_source=qr&dlrf=MWU3N3g3ZmV5ZGcxMA==",
  },
  { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@fidinda.solutions?_r=1&_t=ZS-9AnXoqbmtSW" },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Air Ticketing", href: "/services#air-ticketing" },
      { label: "Visa Assistance", href: "/services#visa-assistance" },
      { label: "Travel Planning", href: "/services#travel-planning" },
      { label: "Attraction Bookings", href: "/services#attraction-bookings" },
      { label: "Tour Packages", href: "/services#tour-packages" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Inbound Cambodia", href: "/destinations#inbound" },
      { label: "Outbound Travel", href: "/destinations#outbound" },
      { label: "Angkor Wat & Siem Reap", href: "/destinations#ideas" },
      { label: "Phnom Penh", href: "/destinations#ideas" },
      { label: "City Breaks Abroad", href: "/destinations#ideas" },
      { label: "Beach Escapes", href: "/destinations#ideas" },
      { label: "All Destinations", href: "/destinations" },
    ],
  },
  {
    title: "For Travellers",
    links: [
      { label: "How It Works", href: "/services#how-it-works" },
      { label: "Plan a Trip", href: "/contact#enquiry" },
      { label: "Flight Options", href: "/services#air-ticketing" },
      { label: "Visa Guidance", href: "/services#visa-assistance" },
      { label: "Itineraries", href: "/services#travel-planning" },
      { label: "Who We Serve", href: "/destinations#who-we-serve" },
      { label: "Send an Enquiry", href: "/contact#enquiry" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "The Four Fs", href: "/about#four-fs" },
      { label: "Our Approach", href: "/about#approach" },
      { label: "Fidinda Solutions Group", href: "/about#group" },
      { label: "Partnerships", href: "/destinations#partners" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact" },
];

export const serviceStrip = [
  "Air Ticketing",
  "Visa Assistance",
  "Travel Planning",
  "Attraction Bookings",
  "Inbound & Outbound Tours",
];

export type Service = {
  id: string;
  no: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
  note?: string;
  icon: "plane" | "passport" | "map" | "ticket" | "suitcase";
  image: string;
};

export const services: Service[] = [
  {
    id: "air-ticketing",
    no: "01",
    title: "Air Ticketing",
    short: "Flight options for domestic, regional and international journeys.",
    intro:
      "We assist travellers in searching for and arranging appropriate flight options for domestic, regional and international journeys.",
    points: [
      "Reviewing preferred travel dates, routes, destinations and passenger requirements.",
      "Comparing available airlines, schedules, transit routes and fare options.",
      "Assisting with one-way, round-trip and multi-city ticket arrangements.",
      "Explaining important fare conditions, baggage allowances and change or cancellation terms before booking.",
      "Supporting travel itinerary and booking confirmation coordination.",
    ],
    icon: "plane",
    image: photos.airliner,
  },
  {
    id: "visa-assistance",
    no: "02",
    title: "Visa Application Assistance",
    short: "Preparing and organising visa applications in line with stated requirements.",
    intro:
      "We help travellers prepare and organise travel visa applications in line with the publicly stated requirements of the relevant destination and visa category.",
    points: [
      "Providing general guidance on commonly requested application documents and procedural steps.",
      "Helping organise application information, travel plans and supporting records.",
      "Assisting with appointment and submission preparation, where relevant.",
      "Helping travellers understand requirements for tourist, business or other relevant travel purposes, as applicable.",
    ],
    note:
      "Visa eligibility, document requirements, processing times and final decisions are determined by the relevant embassy, consulate or immigration authority. Fidinda does not guarantee visa approval.",
    icon: "passport",
    image: photos.passport,
  },
  {
    id: "travel-planning",
    no: "03",
    title: "Personalised Travel Planning",
    short: "Turning travel ideas into a workable, day-by-day itinerary.",
    intro:
      "Whether it is a short holiday, family visit, business trip or multi-destination journey, our aim is to translate travel ideas into a workable itinerary.",
    points: [
      "Destination selection and travel timing considerations.",
      "Day-by-day itineraries based on interests, available time and budget.",
      "Route planning and coordination of transport and accommodation options.",
      "Guidance on practical travel preparations and destination considerations.",
      "Arrangements for individual travellers, families and small groups, subject to availability.",
    ],
    icon: "map",
    image: photos.mapPointing,
  },
  {
    id: "attraction-bookings",
    no: "04",
    title: "Attraction & Experience Bookings",
    short: "Sightseeing, tours and experiences sequenced into your plan.",
    intro:
      "We help clients identify and arrange visits to relevant attractions and experiences as part of their overall travel plan.",
    points: [
      "Sightseeing activities, cultural landmarks and popular attractions.",
      "Tours, excursions and destination experiences.",
      "Entry tickets and scheduled attraction bookings, when available through providers.",
      "Sequencing attractions to reduce avoidable travel time and scheduling conflicts.",
    ],
    icon: "ticket",
    image: photos.angkorPath,
  },
  {
    id: "tour-packages",
    no: "05",
    title: "Tour Packages",
    short: "Tailored and packaged itineraries for inbound and outbound travel.",
    intro:
      "We assist with tailored and packaged itineraries combining appropriate travel components, according to available suppliers and traveller preferences.",
    points: [
      "Inbound Cambodia travel packages.",
      "Outbound international travel packages.",
    ],
    note:
      "The final components, inclusions, exclusions and service conditions are confirmed in the individual quotation or booking information.",
    icon: "suitcase",
    image: photos.flatLay,
  },
];

export const fourFs = [
  {
    letter: "F",
    word: "Faith",
    title: "Building Trust Through Transparency",
    text:
      "We believe trust is the foundation of every successful journey. We are committed to providing honest guidance, transparent pricing, clear booking conditions, and accurate information about travel documentation and visa requirements, enabling travellers to make informed decisions with confidence.",
    promise: "Faith in Our Integrity.",
  },
  {
    letter: "F",
    word: "Friendship",
    title: "Building Lasting Relationships",
    text:
      "We treat our travellers as valued partners rather than one-time customers. Through friendly communication, personalised attention, and genuine care, we aim to build lasting relationships while supporting families, first-time travellers, business travellers, and individuals requiring additional assistance.",
    promise: "Friendship in Our Relationships.",
  },
  {
    letter: "F",
    word: "Flexibility",
    title: "Travel Solutions That Adapt to You",
    text:
      "Every traveller has unique preferences, expectations, schedules, and budgets. We offer flexible travel planning and explore suitable options for flights, accommodation, itineraries, attractions, and tour packages, adapting our recommendations to individual needs and changing circumstances, subject to availability.",
    promise: "Flexibility in Our Solutions.",
  },
  {
    letter: "F",
    word: "Focus",
    title: "Your Journey, Our Priority",
    text:
      "We remain focused on understanding each traveller's objectives and coordinating the essential elements of their journey. From ticketing and visa assistance to travel planning, attraction bookings, and tour arrangements, we strive for accuracy, efficiency, timely communication, and attention to detail throughout the process.",
    promise: "Focus on Your Journey.",
  },
];

export const steps = [
  {
    no: "01",
    title: "Share your requirements",
    text: "Tell us your destination, dates, purpose, number of travellers, preferences and expected budget.",
  },
  {
    no: "02",
    title: "Explore suitable options",
    text: "We help identify travel routes, package ideas, documentation steps and possible experiences.",
  },
  {
    no: "03",
    title: "Review the plan and costs",
    text: "We share the proposed itinerary or options with relevant estimates, inclusions, exclusions and conditions.",
  },
  {
    no: "04",
    title: "Confirm your selections",
    text: "You choose the preferred arrangements; bookings proceed only following relevant confirmation and payment requirements.",
  },
  {
    no: "05",
    title: "Prepare for departure",
    text: "We help organise confirmations and key practical information for the journey.",
  },
  {
    no: "06",
    title: "Stay coordinated",
    text: "Where included in the agreed scope, we assist with booking-related queries or coordination with relevant travel providers.",
  },
];

export const inbound = {
  title: "Inbound travel to Cambodia",
  intro:
    "We support international visitors who wish to explore Cambodia, helping plan trips around their interests, length of stay, pace and budget.",
  points: [
    "Cambodia itinerary planning for first-time and returning visitors.",
    "Coordination of sightseeing and attractions in selected destinations.",
    "Support with appropriate local travel and accommodation arrangements through service providers.",
    "Customised plans for leisure travellers, families, groups and visitors combining business and tourism.",
  ],
};

export const outbound = {
  title: "Outbound travel from Cambodia",
  intro:
    "We help Cambodia-based clients organise international journeys for holidays, family visits, professional travel and other permitted travel purposes.",
  points: [
    "Destination and route options based on traveller preferences.",
    "International flight and travel planning coordination.",
    "Visa application guidance where relevant.",
    "Tour package and attraction booking assistance, subject to availability.",
  ],
};

export const destinationsNote =
  "Destinations and itinerary availability depend on supplier coverage, entry rules, season, cost and each traveller’s requirements. No particular destination or package is guaranteed.";

export const audiences = [
  { title: "Individuals & families", text: "Planning holidays, visits or multi-destination trips." },
  { title: "Cambodia-based residents", text: "Seeking international travel coordination." },
  { title: "International visitors", text: "Arranging inbound travel experiences in Cambodia." },
  { title: "Business travellers", text: "Who need organised itineraries and booking support." },
  { title: "Small groups & organisations", text: "Planning travel programmes or visits." },
  {
    title: "Patients & accompanying family",
    text: "Requiring travel coordination alongside healthcare journeys, through the appropriate Fidinda service division.",
  },
];

export const partnerTypes = [
  "Airlines and ticketing providers",
  "Tour operators",
  "Hotels",
  "Transport operators",
  "Attraction and experience providers",
  "Corporate clients",
  "Other relevant travel partners",
];

export const whyFidinda = [
  {
    title: "Travel support centred on the client",
    text: "We begin by understanding the purpose of travel, timing, group composition and budget rather than proposing a standard package to every traveller.",
  },
  {
    title: "Multiple needs, coordinated",
    text: "Air travel, visa preparation, itineraries and attractions can be planned together, helping clients see the whole journey instead of isolated bookings.",
  },
  {
    title: "Transparent planning",
    text: "We aim to identify relevant price assumptions, inclusions, exclusions and supplier conditions before commitments are made.",
  },
  {
    title: "Cambodia-based service perspective",
    text: "Our positioning is designed for both people travelling from Cambodia and visitors planning their experience within the country.",
  },
  {
    title: "Part of a diversified service group",
    text: "Being part of Fidinda Solutions connects travel services with a broader organisation focused on professional coordination, client support and practical problem-solving.",
  },
];

export const divisions = [
  { name: "Fidinda Financial Solutions", current: false },
  { name: "Fidinda Management Solutions", current: false },
  { name: "Fidinda Health Solutions", current: false },
  { name: "Fidinda Travel Solutions", current: true },
];

export const servicesAtAGlance = [
  "Air ticketing and flight options",
  "Visa application assistance",
  "Personalised travel planning",
  "Attraction and experience booking",
  "Inbound Cambodia travel packages",
  "Outbound international travel packages",
];

export const importantInfo =
  "All travel quotations, availability, schedules, prices and booking conditions are subject to supplier confirmation and may change. Visa and entry decisions rest solely with the relevant authorities. Fidinda Travel Solutions provides travel planning and facilitation support; travel services may be fulfilled by third-party providers.";

// Inspiration gallery — visual ideas only. Availability depends on supplier coverage, entry rules and season.
export const gallery = [
  { title: "Angkor Wat", place: "Siem Reap, Cambodia", tag: "Inbound", image: photos.angkorPath, size: "tall" },
  { title: "Temple trails", place: "Cambodia", tag: "Inbound", image: photos.templeJungle, size: "" },
  { title: "Phnom Penh", place: "Cambodia", tag: "Inbound", image: photos.phnomPenh, size: "" },
  { title: "Khmer heritage", place: "Cambodia", tag: "Inbound", image: photos.stoneFace, size: "" },
  { title: "City breaks", place: "e.g. Singapore", tag: "Outbound", image: photos.singapore, size: "wide" },
  { title: "Beach escapes", place: "Islands & coastlines", tag: "Outbound", image: photos.beach, size: "" },
];
