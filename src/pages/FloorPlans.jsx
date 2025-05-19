// FloorPlan.jsx
// This section is used to display the three different floor plans that are currently being entertained for the Car Condo complex.

import React, { useState } from "react";
import "../styles/floor-plans.css";
import Button from "../components/Button";
import floorPlansDetails from '../assets/data/FloorPlanDetails.js';

function FloorPlans() {
  // Uing this state to identify which floor plan the user selected "view details" on
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Activates modal view
  const openModal = (plan) => {
    setSelectedPlan(plan);
  };

  // Updates the state to close the modal
  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    // Maps through a list of details that sorrespond to each floor plan: id, title, image
    <section className="floor-plans"id="floor-plans">
      {floorPlansDetails.map((plan) => (
        <div key={plan.id} className="floor-plan-card">
          <h3 className="floor-plan-card__title">{plan.title}</h3>
          <img src={plan.imageSrc} alt={plan.title} className="floor-plan-card__image" />
          <Button text={"View Details"} modifier={"primary"} onClick={() => openModal(plan)} />
        </div>
      ))}

      {/* Use for the modal view, checks if the SelectedPlan is set to decide on whether the modal is rendered */}
      {selectedPlan && (
        <div className="floor-plan-modal">
          <div className="floor-plan-modal__content">
            <Button text={"✖"} modifier={"secondary"} onClick={closeModal} />
            <h2 className="floor-plan-modal__title">{selectedPlan.title}</h2>
            <div className="floor-plan-modal__body">
              <img src={selectedPlan.imageSrc} alt={selectedPlan.title} className="floor-plan-modal__image" />
              <ul className="floor-plan-modal__details">
                {selectedPlan.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FloorPlans;
