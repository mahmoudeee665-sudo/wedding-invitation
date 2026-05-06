import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-inner">
        <h2 className="welcome-title">Welcome!</h2>

        <div className="welcome-divider">
          <span />
          <span className="w-ornament">❧</span>
          <span />
        </div>

        <p className="welcome-text">
          From our first sunrise together to the countless stars we’ve counted
          since, our journey has led us to this moment. Please join us as we
          exchange vows at twilight, closing one chapter and beginning our
          forever under the evening sky.
        </p>

        <div className="welcome-divider">
          <span />
          <span className="w-ornament">❧</span>
          <span />
        </div>
      </div>
    </section>
  );
}
