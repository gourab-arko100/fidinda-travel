import type { ReactNode } from "react";

type IconProps = { name: string; size?: number; className?: string };

const paths: Record<string, ReactNode> = {
  plane: (
    <path d="M2.5 13.5 21 6.5c.9-.3 1.6.7.9 1.4L15 14l-1.5 6.2c-.2.8-1.3.9-1.6.1L10 15.5l-4.5-1-1 2.5H3l.6-3.2-1.1-.3Z" />
  ),
  passport: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <circle cx="12" cy="10" r="3.2" />
      <path d="M8.8 10h6.4M12 6.8c-1 .9-1.4 2-1.4 3.2s.4 2.3 1.4 3.2c1-.9 1.4-2 1.4-3.2S13 7.7 12 6.8ZM9 17h6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 7.5V5h18v2.5a2.5 2.5 0 0 0 0 5V15H3v-2.5a2.5 2.5 0 0 0 0-5Z" transform="translate(0 2)" />
      <path d="M14 7v2M14 11v2M14 15v2" />
    </>
  ),
  suitcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V4.5h6V7M3 12h18M8 7v13M16 7v13" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5v.01" />
    </>
  ),
  landing: <path d="M2.5 19.5h19M4 12.6l2-1 2.6 2.2 4-1.4-3.7-6 2.2-.8 6 5.2 3.5-1.3c.9-.3 1.8.3 1.7 1.2-.1.6-.5 1-1 1.2L6.4 17 4 12.6Z" />,
  takeoff: <path d="M2.5 19.5h19M3.5 14.5l1.7-.9 2.4 1.5 3.5-1.9-3.6-5 2-1 5.6 4 3.2-1.7c.8-.4 1.8 0 2 .9.1.6-.2 1.2-.7 1.5L6.2 18 3.5 14.5Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V4.5h6V7M3 13h18" />
    </>
  ),
  heart: <path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" />,
  home: <path d="M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z" />,
  group: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <circle cx="5" cy="10" r="2.2" />
      <circle cx="19" cy="10" r="2.2" />
      <path d="M6.5 20c.4-3.4 2.6-5.5 5.5-5.5s5.1 2.1 5.5 5.5M1.8 18c.3-2 1.5-3.4 3.2-3.6M22.2 18c-.3-2-1.5-3.4-3.2-3.6" />
    </>
  ),
};

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
