import React, { useRef, useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection({ active }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <section className="hero-section">
      {/* ── Background video (plays after intro fades to site) ── */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          src="/hero-video.mp4"
          muted={muted}
          playsInline
          preload="auto"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p
          className="hero-bismillah arabic-text"
          style={{ animationDelay: "0.2s" }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        <p className="hero-pre-title" style={{ animationDelay: "0.5s" }}>
          We're Getting Married
        </p>

        <h1 className="hero-names" style={{ animationDelay: "0.8s" }}>
          Mostafa <span className="ampersand">&amp;</span> Raghad
        </h1>

        <p
          className="hero-arabic-sub arabic-text"
          style={{ animationDelay: "1.1s" }}
        >
          فِي الدُّنْيَا وَالآخِرَة
        </p>

        <p className="hero-date" style={{ animationDelay: "1.4s" }}>
          20 June 2026
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
