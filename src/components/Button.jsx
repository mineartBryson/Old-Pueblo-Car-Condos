import React from "react";
import "../styles/buttons.css";

function Button({ text, modifier, onClick }) {
  return (
    <button className={`button ${modifier ? `button--${modifier}` : ""}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
