# Fidinda Travel Solutions — Website

Next.js 15 (App Router) + TypeScript website for **Fidinda Travel Solutions**, a service division of Fidinda Solutions, Phnom Penh.
All copy comes from the *Fidinda Travel Solutions Business Profile (October 2026)*.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build: `npm run build && npm start`

## Pages

| Route           | Content |
|-----------------|---------|
| `/`             | Photo hero + trip planner, marquee, about collage, photo service cards, Four Fs, destination gallery, inbound/outbound, timeline, why Fidinda, photo CTA |
| `/about`        | About, purpose, vision, mission, Four Fs (full), brand promise, approach, position in Fidinda Solutions |
| `/services`     | Air ticketing, visa assistance, travel planning, attraction bookings, tour packages + 6-step process |
| `/destinations` | Inbound Cambodia, outbound travel, who we serve, partner opportunities |
| `/contact`      | Travel enquiry form, contact details, services at a glance, important service info |

## Brand colours

| Token     | Hex       | RGB          | Use |
|-----------|-----------|--------------|-----|
| `--navy`  | `#1C095A` | 28, 9, 90    | Main text, logo lines, dark sections |
| `--red`   | `#E1041C` | 225, 4, 28   | Highlights, buttons, accents |

Defined at the top of `app/globals.css`. Fonts: Montserrat (headings, matches the logo) and Inter (body), via `next/font/google`.

## Editing content

All text lives in **`lib/content.ts`** — services, Four Fs, steps, audiences, partner types, disclaimers.
Edit there and every page updates.

## Enquiry form → Telegram

Every enquiry is sent as a formatted message to Telegram by `app/api/enquiry/route.ts`
(name, email, phone, services, travel type, destination, dates, travellers, purpose, budget and details).

**One-time setup (≈5 minutes):**

1. In Telegram, open **@BotFather** → send `/newbot` → choose a name (e.g. *Fidinda Travel Enquiries*)
   and a username ending in `bot`. Copy the **token** it gives you.
2. Decide where enquiries should arrive:
   - **Your own chat:** open your new bot and press **Start**.
   - **A team group:** add the bot to the group and send any message in the group.
3. Open this URL in a browser (replace `<TOKEN>`):
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
   Find `"chat":{"id": ...}` — that number is your **chat ID** (group IDs start with `-`).
4. Copy `.env.example` to `.env.local` and fill in both values:
   ```
   TELEGRAM_BOT_TOKEN=123456789:ABCdef...
   TELEGRAM_CHAT_ID=123456789
   ```
   To notify several chats, separate IDs with commas.
5. Restart `npm run dev`, submit the form, and the enquiry appears in Telegram.

When deploying (e.g. Vercel), add the same two variables under **Project → Settings → Environment Variables**.
Never commit `.env.local` — it is already in `.gitignore`.

If the variables are missing, the form shows a friendly error and the enquiry is printed in the server console.
A hidden "honeypot" field silently blocks simple spam bots.

## Contact details, socials & chat buttons

Phone numbers, email, WhatsApp, Telegram, social links, registration/VAT numbers and all footer links live in
**`lib/content.ts`** (`site`, `contact`, `socials`, `footerColumns`). Change them once and the footer, contact page
and the floating WhatsApp/Telegram buttons (`components/FloatingContact.tsx`) all update.

## Photos

Photos are free Unsplash images, listed by ID in **`lib/images.ts`** and loaded through `next/image`
(`images.unsplash.com` is allowed in `next.config.mjs`). To use your own photos, drop them in `/public`
and swap the IDs/paths there. An internet connection is needed for the photos to load in development.

## Motion

- Hero photo slowly zooms (Ken Burns), plane flies along a dashed route, boarding pass floats
- Service marquee, hover zoom on photo cards, scroll-reveal animations (`components/Reveal.tsx`)
- All motion is switched off for visitors with "reduce motion" enabled

## Logo files (`/public`)

- `logo.png` — full colour, transparent background
- `logo-white.png` — white + red, for dark backgrounds
- `mark.png` — icon only; `app/icon.png` is the favicon
