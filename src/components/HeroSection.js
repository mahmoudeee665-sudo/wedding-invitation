import React, { useRef, useEffect, useState } from "react";
import { COUPLE, WEDDING, BISMILLAH, ARABIC_SUB } from "../constants";
import "./HeroSection.css";

export default function HeroSection({ active }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

useEffect(() => {

  const video = videoRef.current;

  if (!video) return;

  if (active) {

    video.currentTime = 0;

    const playVideo = async () => {

      try {

        await video.play();

      } catch (e) {
        console.log(e);
      }

    };

    playVideo();

  } else {

    video.pause();

    video.currentTime = 0;

  }

}, [active]);

  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 10,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 12,
    color: i % 3 === 0 ? "var(--gold)" : "var(--gold-light)",
    sway: Math.random() * 40 - 20,
  }));

  return (
    <section className="hero-section">
      {/* ── Floating petals ── */}
      <div className="petals-container">
        {petals.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 0.6}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              background: p.color,
              "--sway": `${p.sway}px`,
            }}
          />
        ))}
      </div>

      {/* ── Background video (plays after intro fades to site) ── */}
      <div className="hero-video-container">
<video
  ref={videoRef}
  className="hero-video"
  src="/hero-video-new.mp4"
  muted={muted}
  playsInline
  preload="auto"
  poster="/hero-poster.jpg"
loop
/>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p
          className="hero-bismillah arabic-text"
          style={{ animationDelay: "0.2s" }}
        >
          {BISMILLAH}
        </p>

        <p className="hero-pre-title" style={{ animationDelay: "0.5s" }}>
       We're Getting Engaged
        </p>

        <h1 className="hero-names" style={{ animationDelay: "0.8s" }}>
          {COUPLE.groom} <span className="ampersand">&amp;</span> {COUPLE.bride}
        </h1>

        <p
          className="hero-arabic-sub arabic-text"
          style={{ animationDelay: "1.1s" }}
        >
          {ARABIC_SUB}
        </p>

        <p className="hero-date" style={{ animationDelay: "1.4s" }}>
          {WEDDING.dateDisplay}
        </p>

        <div className="hero-divider" style={{ animationDelay: "1.7s" }}>
          <span className="divider-line" />
          <span className="divider-leaf">✦</span>
          <span className="divider-line" />
        </div>

        <div className="scroll-indicator" style={{ animationDelay: "2s" }}>
          <div className="scroll-icon">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
              <rect
                x="1"
                y="1"
                width="18"
                height="28"
                rx="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                className="scroll-dot"
                cx="10"
                cy="8"
                r="3"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="scroll-label">Scroll Down</p>
        </div>
      </div>
    </section>
  );
}
