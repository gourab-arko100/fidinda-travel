import { NextResponse } from "next/server";

// Receives travel enquiries from the contact form and forwards them to Telegram.
//
// Required environment variables (put them in .env.local — see .env.example):
//   TELEGRAM_BOT_TOKEN  – token from @BotFather, e.g. 123456789:ABC-xyz...
//   TELEGRAM_CHAT_ID    – the chat/group/channel that should receive enquiries
//                         (several IDs can be comma-separated)

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (v: unknown, max = 500) => String(v ?? "").trim().slice(0, max);

/** Escape text for Telegram's HTML parse mode. */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 160);
  const message = str(body.message, 3000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email and trip details." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (body.consent !== "yes") {
    return NextResponse.json({ error: "Please confirm the service information checkbox." }, { status: 400 });
  }

  const services = Array.isArray(body.services) ? body.services.map((s) => str(s, 80)).filter(Boolean) : [];

  const rows: [string, string][] = [
    ["👤 Name", name],
    ["✉️ Email", email],
    ["📞 Phone / WhatsApp", str(body.phone, 60)],
    ["🌍 Country", str(body.country, 80)],
    ["🧳 Services", services.join(", ")],
    ["🧭 Type of travel", str(body.travelType, 80)],
    ["📍 Destination(s)", str(body.destination, 200)],
    ["🛫 Departure", str(body.departDate, 20)],
    ["🛬 Return", str(body.returnDate, 20)],
    ["👥 Travellers", str(body.travellers, 10)],
    ["🎯 Purpose", str(body.purpose, 80)],
    ["💰 Budget", str(body.budget, 80)],
  ];

  const time = new Date().toLocaleString("en-GB", { timeZone: "Asia/Phnom_Penh", dateStyle: "medium", timeStyle: "short" });

  const text = [
    "✈️ <b>New travel enquiry — Fidinda Travel Solutions</b>",
    "",
    ...rows.filter(([, v]) => v).map(([k, v]) => `<b>${k}:</b> ${esc(v)}`),
    "",
    "<b>📝 Preferences &amp; details:</b>",
    esc(message),
    "",
    `<i>Received ${esc(time)} (Phnom Penh time)</i>`,
  ].join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_ID || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    console.error("[Fidinda Travel] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set. Enquiry was:\n" + text);
    return NextResponse.json(
      { error: "Sorry, our enquiry service is temporarily unavailable. Please contact us on WhatsApp or Telegram." },
      { status: 500 }
    );
  }

  try {
    const results = await Promise.all(
      chatIds.map((chat_id) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id, text, parse_mode: "HTML", disable_web_page_preview: true }),
          cache: "no-store",
        }).then(async (r) => ({ ok: r.ok, detail: r.ok ? "" : await r.text() }))
      )
    );

    const failed = results.filter((r) => !r.ok);
    if (failed.length) {
      console.error("[Fidinda Travel] Telegram send failed:", failed.map((r) => r.detail).join(" | "));
    }
    if (failed.length === results.length) {
      return NextResponse.json(
        { error: "Sorry, we couldn't send your enquiry right now. Please try again or message us on WhatsApp." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[Fidinda Travel] Telegram request error:", err);
    return NextResponse.json(
      { error: "Sorry, we couldn't send your enquiry right now. Please try again or message us on WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
