import React, { useRef, useState, useEffect } from "react";
import "./IntroPoster.css";

export default function IntroPoster({ setPhase }) {

  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  /* Preload video immediately */

  useEffect(() => {

    const video = videoRef.current;

    if (!video) return;

    video.load();

  }, []);

  /* Start intro video */

  const startVideo = async () => {

    if (!videoRef.current) return;

    setStarted(true);

    try {

      videoRef.current.currentTime = 0;

      await videoRef.current.play();

    } catch (e) {

      console.log(e);

    }

  };

  /* Finish intro */

  const handleEnded = () => {

    setFadeOut(true);

  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName === "opacity" && fadeOut) setPhase("site");
  };

  return (

    <div
      className={`intro-screen ${fadeOut ? "fade-out" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >

      {/* Poster before click */}

      {!started && (

        <img
          src="/poster-photo.jpeg"
          alt="Wedding Invitation"
          className="poster-image"
          onClick={startVideo}
        />

      )}

      {/* Intro video */}

      <video
        ref={videoRef}
        className={`intro-video ${started ? "show-video" : "hide-video"}`}
        src="/0506.mp4"
        playsInline
        webkit-playsinline="true"
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