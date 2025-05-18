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
