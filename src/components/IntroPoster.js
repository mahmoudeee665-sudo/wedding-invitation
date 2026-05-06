import React, { useRef, useEffect, useState } from "react";
import "./IntroPoster.css";

export default function IntroPoster({ phase, setPhase }) {
  const videoRef = useRef(null);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (phase === "intro" && videoRef.current) {
      const video = videoRef.current;
      video.pause();
      video.currentTime = 0;
    }
  }, [phase]);

  const handleIntroClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  };

  const handleVideoEnded = () => {
    setFadingOut(true);
    setTimeout(() => {
      setPhase("site");
    }, 1200);
  };

  return (
    <div className={`intro-overlay ${fadingOut ? "intro-fade-out" : ""}`}>
      <div className="intro-video-wrap" onClick={handleIntroClick}>
        <video
          ref={videoRef}
          className="intro-video"
          src="/0506.mp4  "
          playsInline
          muted={false}
          onEnded={handleVideoEnded}
        />

        <div className="intro-footer-text">
          <p className="intro-footer-arabic">اضغط الختم لفتح الدعوة</p>
          <p className="intro-footer-english">CLICK THE SEAL TO OPEN</p>
        </div>
      </div>
    </div>
  );
}
