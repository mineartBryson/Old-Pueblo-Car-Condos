// Home.jsx
// This file is what holds all of the other sections on the website that are not the header and footer

import React from "react";
import HeroSection from "./HeroSection"; // Example component
import InfoSection from "./InfoSection";
import FloorPlans from "./FloorPlans.jsx";
import LocationSection from "./LocationSection.jsx";
import InvestmentSection from "./InvestmentSection.jsx";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <InfoSection />
      <LocationSection />
      <FloorPlans />
      <InvestmentSection/>
    </div>
  );
}

export default Home;