import React from "react";
import "./OrderSection.css";

const timeline = [
  {
    title: "Starts",
    desc: "The celebration begins.",
  },
  {
    title: "Dinner",
    desc: "A special dinner with live music.",
  },
  {
    title: "Ends",
    desc: "Dancing into the early hours.",
  },
];

export default function OrderSection() {
  return (
    <section className="order-section">
      {/* Top illustration */}
      <div className="order-top-image fade-up">
        <img src="/couple-dancing-new.png" alt="Couple Dancing" />
      </div>

      {/* Heading */}
      <div className="order-header fade-up">
        <h2 className="order-title" >Order of the Day</h2>
        <p className="order-subtitle">
          WHAT WE HAVE PLANNED FOR YOU
        </p>
      </div>

      {/* Venue Illustration + Timeline */}
      <div className="order-venue-wrapper ">
        <img
          src="/entrada-venue.png"
          alt="Venue Entrance"
          className="order-venue-image"
        />

        <div className="order-timeline fade-up">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {index !== timeline.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}