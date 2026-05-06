  import React, { useState, useEffect } from "react";
  import "./CountdownSection.css";


  const WEDDING_DATE = new Date("2026-10-01T18:00:00");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function getTimeLeft() {
    const diff = WEDDING_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  }

  export default function CountdownSection() {
    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
      const id = setInterval(() => setTime(getTimeLeft()), 1000);
      return () => clearInterval(id);
    }, []);

    const units = [
      { label: "Days", value: time.days },
      { label: "Hours", value: pad(time.hours) },
      { label: "Mins", value: pad(time.mins) },
      { label: "Secs", value: pad(time.secs) },
    ];

    return (
      <section className="countdown-section ">
        {/* Decorative monogram */}
<div className="monogram">
  <img
    src="/rings-illustration.png"
    alt="Wedding Rings"
    className="countdown-rings"
  />
</div>

        <h2 className="countdown-title fade-up">Countdown</h2>
        <p className="countdown-sub fade-up">TO THE MOST SPECIAL DAY OF OUR LIVES</p>

        <div className="countdown-grid fade-up ">
          {units.map(({ label, value }) => (
            <div key={label} className="countdown-unit">
              <span className="countdown-number">{value}</span>
              <span className="countdown-label">{label.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Bottom gold leaf ornament */}
        <div className="section-ornament">✦ ✦ ✦</div>
      </section>
    );
  }
