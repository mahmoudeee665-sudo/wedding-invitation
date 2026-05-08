import React from 'react';
import { COUPLE, WEDDING, QURAN_VERSE_ARABIC, QURAN_VERSE_ENGLISH } from '../constants';
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

      <p className="footer-names fade-up" >{COUPLE.groom} &amp; {COUPLE.bride}</p>

      <p className="footer-date fade-up" >
        {WEDDING.dateFooter}
      </p>

      <p className="footer-arabic arabic-text fade-up" >
        {QURAN_VERSE_ARABIC}
      </p>

      <p className="footer-verse fade-up">
        {QURAN_VERSE_ENGLISH}
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