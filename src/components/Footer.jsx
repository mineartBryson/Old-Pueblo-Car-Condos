import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__logo">Old Pueblo Car Condos</div>
      
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="nav__item"><a href="/">Home</a></li>
          <li className="nav__item"><a href="#location">Location</a></li>
          <li className="nav__item"><a href="#floor-plans">Floor Plans</a></li>
          <li className="nav__item"><a href="#investors">Investors</a></li>
          <li className="nav__item"><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      <div className="footer__contact">
        <p><strong>Contact:</strong> Bryson Mineart</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> <a href="mailto:bryson@oldpueblo.com">bryson@oldpueblo.com</a></p>
      </div>

      <div className="footer__info">
        <p>&copy; {new Date().getFullYear()} Bryson Mineart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

