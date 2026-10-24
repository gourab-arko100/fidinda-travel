type BrandProps = { name: "facebook" | "instagram" | "tiktok" | "whatsapp" | "telegram" | string; size?: number };

export default function BrandIcon({ name, size = 20 }: BrandProps) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const };

  switch (name) {
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.9}>
          <rect x="3" y="3" width="18" height="18" rx="5.2" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.6 2.5c.3 2.4 1.7 4 4.1 4.2v3.2c-1.5.1-2.8-.4-4.1-1.2v6.1c0 3.8-2.7 6.7-6.3 6.7S4 18.7 4 15.3c0-3.6 3-6.4 6.9-6.1v3.3c-.4-.1-.7-.2-1.1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3c1.9 0 3.2-1.2 3.2-3.5V2.5h3.6Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="none">
          <path
            d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L3 21l4.4-1.1A9.2 9.2 0 1 0 12 2.8Z"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <path
            fill="currentColor"
            d="M8.7 7.3c.2-.3.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.9c.1.2 0 .4-.1.6l-.5.7c-.1.1-.2.3-.1.5.4.8 1 1.5 1.7 2.1.6.5 1.2.9 1.9 1.2.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.2.1.3.2.3.4 0 .5-.1 1.1-.5 1.5-.5.6-1.3.9-2.1.9-1 0-2.6-.5-4.3-2-1.9-1.6-2.9-3.5-3.1-4.4-.2-.9.1-1.8.6-2.4Z"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.7 3.6 2.9 10.5c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.4c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.2-2.2 4.6 3.4c.9.5 1.5.2 1.7-.8l3-14.3c.3-1.3-.5-1.9-1.6-1.6ZM17.5 7 9.7 14l-.3 3.3-1.5-4.6L17 6.7c.4-.3.8-.1.5.3Z" />
        </svg>
      );
    default:
      return null;
  }
}
