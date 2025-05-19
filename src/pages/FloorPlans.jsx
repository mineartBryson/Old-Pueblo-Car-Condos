import React, { useState } from "react";
import "../styles/floor-plans.css";
import Button from "../components/Button";
import floorPlansDetails from '../assets/data/FloorPlanDetails.js';

function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <section className="floor-plans"id="floor-plans">
      {floorPlansDetails.map((plan) => (
        <div key={plan.id} className="floor-plan-card">
          <h3 className="floor-plan-card__title">{plan.title}</h3>
          <img src={plan.imageSrc} alt={plan.title} className="floor-plan-card__image" />
          <Button text={"View Details"} modifier={"primary"} onClick={() => openModal(plan)} />
        </div>
      ))}

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
