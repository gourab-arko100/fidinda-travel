"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icons";
import { servicesAtAGlance } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill from the trip planner on the home page (?destination=…&departDate=…)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      const el = form.elements.namedItem(key);
      if (el && "value" in el) (el as HTMLInputElement).value = value;
    });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const selected = new FormData(form).getAll("services");
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: selected }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span className="form-success-icon">
          <Icon name="check" size={30} />
        </span>
        <h3>Thank you — your enquiry has been received.</h3>
        <p>
          Our team will review your requirements and get back to you with suitable options. Quotations and availability
          are subject to supplier confirmation.
        </p>
        <button className="btn btn-navy" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="enquiry-form" onSubmit={onSubmit}>
      <fieldset>
        <legend>About you</legend>
        <div className="field-row">
          <label className="field">
            <span>Full name *</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label className="field">
            <span>Email *</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
        </div>
        <div className="field-row">
          <label className="field">
            <span>Phone / WhatsApp</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="field">
            <span>Country of residence</span>
            <input name="country" type="text" autoComplete="country-name" />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Services you need</legend>
        <div className="chip-group">
          {servicesAtAGlance.map((s) => (
            <label className="chip" key={s}>
              <input type="checkbox" name="services" value={s} />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Your trip</legend>
        <div className="field-row">
          <label className="field">
            <span>Type of travel</span>
            <select name="travelType" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Inbound — visiting Cambodia</option>
              <option>Outbound — travelling from Cambodia</option>
              <option>Domestic / regional</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="field">
            <span>Destination(s)</span>
            <input name="destination" type="text" placeholder="e.g. Siem Reap, Bangkok, Singapore" />
          </label>
        </div>
        <div className="field-row field-row-3">
          <label className="field">
            <span>Departure date</span>
            <input name="departDate" type="date" />
          </label>
          <label className="field">
            <span>Return date</span>
            <input name="returnDate" type="date" />
          </label>
          <label className="field">
            <span>Travellers</span>
            <input name="travellers" type="number" min={1} defaultValue={1} />
          </label>
        </div>
        <div className="field-row">
          <label className="field">
            <span>Purpose of travel</span>
            <select name="purpose" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Holiday / leisure</option>
              <option>Family visit</option>
              <option>Business</option>
              <option>Business &amp; tourism</option>
              <option>Group / organisation programme</option>
              <option>Travel alongside a healthcare journey</option>
              <option>Other</option>
            </select>
          </label>
          <label className="field">
            <span>Expected budget</span>
            <input name="budget" type="text" placeholder="e.g. USD 1,500 per person" />
          </label>
        </div>
        <label className="field">
          <span>Preferences & other details *</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about routes, schedules, accommodation, attractions or anything else we should know."
          />
        </label>
      </fieldset>

      {/* Honeypot — hidden from people, catches spam bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />

      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I understand that quotations, availability and prices are subject to supplier confirmation, and that visa and
          entry decisions rest solely with the relevant authorities.
        </span>
      </label>

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-red btn-block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send travel enquiry"}
        {status !== "sending" && <Icon name="arrow" size={18} />}
      </button>
    </form>
  );
}
