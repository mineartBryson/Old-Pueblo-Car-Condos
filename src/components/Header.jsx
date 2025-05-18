import React from "react";
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Old Pueblo Car Condos</div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/">Home</a></li>
          <li className="nav__item"><a href="/floor-plans">Floor Plans</a></li>
          <li className="nav__item"><a href="/investors">Investors</a></li>
          <li className="nav__item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
