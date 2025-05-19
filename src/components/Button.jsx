//Button.jsx
//Simple component used anytime we needed a button placed on the website.

import React from "react";
import "../styles/buttons.css";

// text - What title the button should have
// modifier - the type of button to place on the website, depending on this, the CSS may change for the button
// onClick - Adding an action handler for when the button is pressed
function Button({ text, modifier, onClick }) {
  return (
    <button className={`button ${modifier ? `button--${modifier}` : ""}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
