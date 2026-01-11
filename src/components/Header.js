import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-icon">A</div>
          <span className="logo-text">Adsadvo</span>
        </Link>

        {/* NAVIGATION */}
        <nav className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
          {/* ... existing navigation links ... */}
        </nav>

        {/* ACTIONS & TOGGLE */}
        <div className="header-right">
          <div className="header-actions">
            <button className="btn-signin">Sign In</button>
            <Link to="/pricing" className="btn-get-started">
              Get Started
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
