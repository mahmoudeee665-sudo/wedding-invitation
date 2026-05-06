import React, { useRef, useState } from "react";
import "./IntroPoster.css";

export default function IntroPoster({ setPhase }) {

  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);

  const [fadeOut, setFadeOut] = useState(false);

  const [whiteFlash, setWhiteFlash] = useState(false);

  const startVideo = async () => {

    if (!videoRef.current) return;

    /* White splash on click */

    setWhiteFlash(true);

    setTimeout(() => {
      setWhiteFlash(false);
    }, 180);

    setStarted(true);

    try {
      await videoRef.current.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEnded = () => {

    /* White splash before transition */

    setWhiteFlash(true);

    setTimeout(() => {

      setFadeOut(true);

      setTimeout(() => {
        setPhase("site");
      }, 2600);

    }, 300);
  };

  return (

    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>

      {/* White cinematic splash */}

      <div className={`white-flash ${whiteFlash ? "flash-active" : ""}`} />

      {/* Poster */}

      {!started && (
        <img
          src="/poster-photo.jpeg"
          alt="Wedding Invitation"
          className="poster-image"
          onClick={startVideo}
        />
      )}

      {/* Video */}

      <video
        ref={videoRef}
        className={`intro-video ${started ? "show-video" : "hide-video"}`}
        src="/0506.mp4"
        playsInline
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Text */}

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