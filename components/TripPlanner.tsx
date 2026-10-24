"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Icon from "./Icons";

/** Quick trip starter in the hero — passes details to the contact form. */
export default function TripPlanner() {
  const router = useRouter();
  const [type, setType] = useState("Outbound — travelling from Cambodia");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const [k, v] of fd.entries()) {
      if (typeof v === "string" && v.trim()) params.set(k, v.trim());
    }
    router.push(`/contact?${params.toString()}#enquiry`);
  }

  return (
    <form className="planner" onSubmit={onSubmit} aria-label="Start planning your trip">
      <div className="planner-tabs" role="radiogroup" aria-label="Type of travel">
        {[
          ["Outbound — travelling from Cambodia", "From Cambodia"],
          ["Inbound — visiting Cambodia", "Visiting Cambodia"],
        ].map(([value, label]) => (
          <label key={value} className={`planner-tab${type === value ? " is-active" : ""}`}>
            <input
              type="radio"
              name="travelType"
              value={value}
              checked={type === value}
              onChange={() => setType(value)}
            />
            <Icon name={value.startsWith("Outbound") ? "takeoff" : "landing"} size={18} />
            {label}
          </label>
        ))}
      </div>
      <div className="planner-fields">
        <label className="planner-field">
          <span>
            <Icon name="pin" size={16} /> Where to?
          </span>
          <input name="destination" placeholder={type.startsWith("Inbound") ? "Siem Reap, Phnom Penh…" : "Any destination"} />
        </label>
        <label className="planner-field">
          <span>
            <Icon name="calendar" size={16} /> Departure
          </span>
          <input name="departDate" type="date" />
        </label>
        <label className="planner-field planner-field-sm">
          <span>
            <Icon name="users" size={16} /> Travellers
          </span>
          <input name="travellers" type="number" min={1} defaultValue={2} />
        </label>
        <button type="submit" className="btn btn-red planner-btn">
          Start planning <Icon name="arrow" size={18} />
        </button>
      </div>
    </form>
  );
}
