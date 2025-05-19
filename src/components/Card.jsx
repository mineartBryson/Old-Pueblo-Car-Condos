// Card.jsx
// Simple component used for any place that a card was needed on the website. Simple title and description input for easy customization
import React from "react";
import '../styles/card.css';

function Card({ title, description }) {
  return (
    <div className="info__card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
