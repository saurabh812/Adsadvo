import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-icon">A</div>
          Adsadvo
        </Link>

        {/* NAV */}
        <nav className="nav">

          <Link to="/" className="nav-item">Home</Link>

          {/* DROPSHIPPING DROPDOWN */}
          <div className="nav-item dropdown">
            <span className="dropdown-label">
              Dropshipping ▾
            </span>

            <div className="dropdown-menu">
              <Link to="/dropshipping">
                <strong>Amazon</strong>
                <span>Earn income online, no inventory required</span>
              </Link>

              <Link to="/dropshipping">
                <strong>Flipkart</strong>
                <span>Everything you need to launch your store</span>
              </Link>

              <Link to="/dropshipping">
                <strong>Meesho</strong>
                <span>Trending products made easy</span>
              </Link>

              <Link to="/dropshipping">
                <strong>E-Com Website</strong>
                <span>Launch your own brand fast</span>
              </Link>
            </div>
          </div>

          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/pricing" className="nav-item">Pricing</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <button className="btn-signin">Sign In</button>
          <Link to="/pricing" className="btn-get-started">
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
