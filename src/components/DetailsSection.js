import React from "react";
import { WEDDING, VENUE } from "../constants";
import "./DetailsSection.css";
 
export default function DetailsSection() {
  const handleMapClick = () => {
    window.open(
      VENUE.mapsUrl,
      "_blank",
      "noopener noreferrer"
    );
  };
 
  return (
    <section className="details-section">
      {/* ── Header ── */}
      <div className="details-header fade-up">
        <img src="/dog-bouquet.webp" className="details-icon" alt="" />
        <h2 className="details-title">The Details</h2>
        <p className="details-subtitle">EVERYTHING YOU NEED TO KNOW</p>
      </div>
 
      {/* ── Card ── */}
      <div className="details-card">
 
        {/* Hotel image */}
        <div className="details-image-wrap">
          <img
            src="/finca-biniagual-illustration.webp"
            className="details-hotel-img"
            alt="."
          />
          <div className="details-image-overlay" />
          <span className="details-image-badge">THE VENUE</span>
        </div>
 
        {/* Body */}
        <div className="details-body">
          <h3 className="details-venue-name">{VENUE.name}</h3>
 
          <div className="details-info-grid">
            <div className="details-info-row">
              <span className="details-info-icon" aria-hidden="true">📅</span>
              <span className="details-info-label">DATE</span>
                <span className="details-info-value">{WEDDING.dateFull}</span>
            </div>
 
            <div className="details-info-row">
              <span className="details-info-icon" aria-hidden="true">🕔</span>
              <span className="details-info-label">TIME</span>
                <span className="details-info-value">{WEDDING.time}</span>
            </div>
 
            <div className="details-info-row">
              <span className="details-info-icon" aria-hidden="true">📍</span>
              <span className="details-info-label">WHERE</span>
                <span className="details-info-value">{VENUE.address}</span>
            </div>
          </div>
 
          <button className="details-map-btn" onClick={handleMapClick}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Google Maps
          </button>
        </div>
      </div>
 
      {/* ── Ornament ── */}
      <div className="details-ornament">
        <span className="details-ornament-line" />
        <span className="details-ornament-gem">✦</span>
        <span className="details-ornament-line" />
      </div>
    </section>
  );
}
 