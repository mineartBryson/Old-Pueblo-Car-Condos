import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import "../styles/hero-section.css";
import Button from "../components/Button";




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
          <Button text={"Learn More"} modifier={"primary"}/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
