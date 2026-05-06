import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Rings Illustration */}
      <div className="footer-rings fade-up">
        <img
          src="/rings-illustration.png"
          alt="Wedding Rings"
        />
      </div>

      <p className="footer-names fade-up" >Mostafa &amp; Raghad</p>

      <p className="footer-date fade-up" >
        20 · 06 · 2026
      </p>

      <p className="footer-arabic arabic-text fade-up" >
        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </p>

      <p className="footer-verse fade-up">
        And He placed between you affection and mercy — Quran 30:21
      </p>

      <div className="footer-divider">
        <span />
        <span className="f-ornament">✦</span>
        <span />
      </div>

      <p className="footer-copy">
        Made with love · {new Date().getFullYear()}
      </p>

    </footer>
  );
}