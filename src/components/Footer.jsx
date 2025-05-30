// Footer.jsx
// Used for the website footer and also houses the contact information and some navigation buttons as well
import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__logo">Old Pueblo Car Condos</div>
      
      {/* Navigation section, same as header. Links to page sections by id */}
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="nav__item"><a href="/">Home</a></li>
          <li className="nav__item"><a href="#location">Location</a></li>
          <li className="nav__item"><a href="#floor-plans">Floor Plans</a></li>
          <li className="nav__item"><a href="#investors">Investors</a></li>
          <li className="nav__item"><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      {/* Using the footr to house contact information instead of adding in a new section */}
      <div className="footer__contact">
        <p><strong>Contact:</strong> Shea Gaffney</p>
        <p><strong>Phone:</strong> (520) 335-0333</p>
        <p><strong>Email:</strong> <a href="mailto:Sheagaffney@gmail.com">Sheagaffney@gmail.com</a></p>
      </div>

      {/* Copyright information for the website */}
      <div className="footer__info">
        <p>&copy; {new Date().getFullYear()} Bryson Mineart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

