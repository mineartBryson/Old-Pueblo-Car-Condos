import React, { useState } from "react";
import "../styles/floor-plan-card.css";
import FloorPlan1 from "../assets/images/FloorPlan1.jpeg";
import FloorPlan2 from "../assets/images/FloorPlan2.jpeg";
import FloorPlan3 from "../assets/images/FloorPlan3.jpeg";

function FloorPlanCard({ imageSrc, title, specs }) {
  const [showModal, setShowModal] = useState(false);
    console.log("Imag source: ", imageSrc )

  return (
    <div className="floor-plan">
        <div className="floor-plan-card">
            <img src={FloorPlan1} alt='Floor Plan One' className="floor-plan-card__image" />
            <h3 className="floor-plan-card__title">{title}</h3>
            <button onClick={() => setShowModal(true)} className="floor-plan-card__button">
                View Details
            </button>
        </div>
        <div className="floor-plan-card">
            <img src={FloorPlan2} alt='Floor Plan One' className="floor-plan-card__image" />
            <h3 className="floor-plan-card__title">{title}</h3>
            <button onClick={() => setShowModal(true)} className="floor-plan-card__button">
                View Details
            </button>
        </div>
        <div className="floor-plan-card">
            <img src={FloorPlan3} alt='Floor Plan One' className="floor-plan-card__image" />
            <h3 className="floor-plan-card__title">{title}</h3>
            <button onClick={() => setShowModal(true)} className="floor-plan-card__button">
                View Details
            </button>
        </div>

      {showModal && (
        <div className="floor-plan-modal">
          <div className="floor-plan-modal__content">
            <h2>{title} Specifications</h2>
            <ul>
              {specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)} className="floor-plan-modal__close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloorPlanCard;
