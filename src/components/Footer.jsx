import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Old Pueblo Car Condos</div>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item"><a href="/">Home</a></li>
          <li className="footer__item"><a href="/floor-plans">Floor Plans</a></li>
          <li className="footer__item"><a href="/investors">Investors</a></li>
          <li className="footer__item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="footer__info">
        <p>&copy; {new Date().getFullYear()} Bryson Mineart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
