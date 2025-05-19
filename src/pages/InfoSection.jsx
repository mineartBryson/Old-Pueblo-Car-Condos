// InfoSection.jsx
// This section is used to house a quick "Elevator Pitch" that is displayed using the card component. 

import React from "react";
import "../styles/info-section.css";
import Card from "../components/Card";

function InfoSection() {
  return (
    <section className="info">
      <div className="info__content">
        <div className="info__cards">
          <Card title="Secure, Private Ownership" description="Unlike rentals, car condos giv you full customization and investment potential."/>
          <Card title="High-End Amenities" description="Enjoy **climate control, premium flooring, and personal lounge spaces** tailored for collectors."/>
          <Card title="Automotive Community" description="Exclusive access to **events, meetups, and track days** with fellow enthusiasts."/>
          <Card title="Investment Opportunity" description="Car condos **appreciate in value** while offering opportunities to **rent out space for extra income**."/>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;

