import React from "react";
import HeroSection from "./HeroSection"; // Example component
import InfoSection from "./InfoSection";
import FloorPlans from "./FloorPlans.jsx";
import LocationSection from "./LocationSection.jsx";
import Investment from "./InvestmentSection.jsx";
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