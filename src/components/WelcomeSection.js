import React from 'react';
import './WelcomeSection.css';

export default function WelcomeSection() {
  return (
    <section className="welcome-section" >
      <div className="welcome-inner">
        <h2 className="welcome-title">Welcome!</h2>

        <div className="welcome-divider">
          <span /><span className="w-ornament">❧</span><span />
        </div>

        <p className="welcome-text">
          From the golden light of day to the magic of a starlit night,
          our love story has been a beautiful journey. We invite you to
          celebrate as the sun sets on our single lives and rises on our
          new beginning.
        </p>

        <div className="welcome-divider">
          <span /><span className="w-ornament">❧</span><span />
        </div>


      </div>
    </section>
  );
}
