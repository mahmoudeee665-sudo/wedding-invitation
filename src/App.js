import React, { useState, useRef, useEffect } from "react";

import IntroPoster from "./components/IntroPoster";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import WelcomeSection from "./components/WelcomeSection";
import MomentsSection from "./components/MomentsSection";
import DetailsSection from "./components/DetailsSection";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";
import useFadeUp from "./hooks/useFadeUp";
import "./App.css";


export default function App() {

  const [phase, setPhase] = useState("intro");
  const [muted, setMuted] = useState(false);

  const musicRef = useRef(null);
useFadeUp();
  /* ───────────────────────────── */
  /* Initialize AOS */
  /* ───────────────────────────── */


  /* ───────────────────────────── */
  /* Start music after intro */
  /* ───────────────────────────── */


  
  useEffect(() => {
    if (phase === "site" && musicRef.current) {

      musicRef.current.volume = 0.5;

      musicRef.current.play().catch(() => {});
    }
  }, [phase]);

  /* ───────────────────────────── */
  /* Toggle music */
  /* ───────────────────────────── */

  const toggleMute = () => {

    if (musicRef.current) {
      musicRef.current.muted = !muted;
    }

    setMuted((m) => !m);
  };

  return (
    <div className="app">

      {/* Background music */}

      <audio
        ref={musicRef}
        src="/intro-music.mp3"
        loop
        preload="auto"
      />

      {/* Intro screen */}

      {phase !== "site" && (
        <IntroPoster
          phase={phase}
          setPhase={setPhase}
        />
      )}

      {/* Main website */}

      <main className="site-wrapper">

        <HeroSection active={phase === "site"} />

        <CountdownSection />

        <WelcomeSection />

        <MomentsSection />

        <DetailsSection />

        <OrderSection />

        <Footer />

      </main>

      {/* Floating music button */}

      {phase === "site" && (
        <button
          className={`music-toggle${!muted ? " playing" : ""}`}
          onClick={toggleMute}
          aria-label={
            muted
              ? "Unmute music"
              : "Mute music"
          }
        >

          {muted ? (

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>

              <line x1="23" y1="9" x2="17" y2="15"/>

              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>

          ) : (

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>

              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>

              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>

          )}

        </button>
      )}

    </div>
  );
}