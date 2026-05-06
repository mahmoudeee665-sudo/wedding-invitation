import React, { useRef, useState } from "react";
import "./IntroPoster.css";

export default function IntroPoster({ setPhase }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const startVideo = async () => {
    if (!videoRef.current) return;

    setStarted(true);

    try {
      await videoRef.current.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEnded = () => {
    setFadeOut(true);

    setTimeout(() => {
      setPhase("site");
    }, 800);
  };

  return (
    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>

      {/* Poster before click */}
      {!started && (
        <img
          src="/poster-photo.jpeg"
          alt="Wedding Invitation"
          className="poster-image"
          onClick={startVideo}
        />
      )}

      {/* Video after click */}
      <video
        ref={videoRef}
        className={`intro-video ${started ? "show-video" : "hide-video"}`}
        src="/0506.mp4"
        playsInline
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Bottom text */}
      {!started && (
        <div className="intro-text">
          <p className="intro-ar">
            اضغط لفتح الدعوة
          </p>

          <p className="intro-en">
            CLICK THE SEAL TO OPEN
          </p>
        </div>
      )}

    </div>
  );
}