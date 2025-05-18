import React from "react";
import "../styles/location-section.css";
import location from '../assets/images/location.jpeg';
import details from "../assets/data/LocationDetails.js";

function LocationSection() {
  return (
    <section className="location">
      {/* Left: Lot Image */}
      <div className="location__image">
        <img src={location} alt='Location lot image' />
      </div>

      {/* Right: Location Details */}
      <div className="location__details">
        <h2 className="location__title">Exclusive Car Condo Lot in the Heart of Tucson, AZ</h2>
        <div className="location__content">
          <ul className="location__list">
            {details.map((detail) => (
              <li key={detail.id} className="location__list-item">
                <i className={detail.icon}></i>{detail.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
