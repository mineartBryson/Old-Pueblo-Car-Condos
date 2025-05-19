// HeroSection.jsx
// This section holds the rotating gallery at the top of the website and houses a small text overlay to make the website look modern
// and add in a quick catch phrase to help draw in investors and leave a lasting impression on the possibilities.

import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import "../styles/hero-section.css";

function HeroSection() {

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content--photos">
          <Gallery />
        </div>
        <div className="hero__content--text">
          <h1 className="hero__title">Luxury Car Condos</h1>
          <p className="hero__subtitle">DESIGNED FOR COLLECTORS</p>
          <p className="hero__subtitle">BUILT FOR PRESTIGE</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
