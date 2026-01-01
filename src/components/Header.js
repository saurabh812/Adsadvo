import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">SeekhoBecho</span>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">

          {/* DROPDOWN */}
          <div className="nav-item dropdown">
            <span>
              Dropshipping <span className="dropdown-arrow">▼</span>
            </span>

            <div className="dropdown-menu">
              <div className="dropdown-column">

                {/* AMAZON */}
                <div className="dropdown-item amazon-parent">
                  <div className="dropdown-icon amazon-icon">a</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">Amazon</div>
                    <div className="dropdown-description">
                      Earn income online, no inventory required
                    </div>
                  </div>
                  <div className="dropdown-arrow-right">›</div>

                  <div className="amazon-submenu">
                    <a href="#amazon-india" className="submenu-item">
                      <div className="dropdown-icon amazon-icon">a</div>
                      <div className="dropdown-content">
                        <div className="dropdown-title">Amazon India</div>
                        <div className="dropdown-description">
                          More profit, lower costs, happy customers
                        </div>
                      </div>
                    </a>

                    <a href="#amazon-international" className="submenu-item">
                      <div className="dropdown-icon amazon-icon">a</div>
                      <div className="dropdown-content">
                        <div className="dropdown-title">
                          Amazon International
                        </div>
                        <div className="dropdown-description">
                          Earn income online, no experience required
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* OTHER DROPDOWN ITEMS */}
                <a href="#flipkart" className="dropdown-item">
                  <div className="dropdown-icon flipkart-icon">📦</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">Flipkart</div>
                    <div className="dropdown-description">
                      Everything you need to launch your store
                    </div>
                  </div>
                </a>

                <a href="#meesho" className="dropdown-item">
                  <div className="dropdown-icon meesho-icon">👨‍🍳</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">Meesho</div>
                    <div className="dropdown-description">
                      Top trending products made easy
                    </div>
                  </div>
                </a>

                <a href="#ecom-website" className="dropdown-item">
                  <div className="dropdown-icon ecom-icon">🌐</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">E-Com Website</div>
                    <div className="dropdown-description">
                      Launch your business fast
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* ROUTED LINKS */}
          <Link to="/pricing" className="nav-item">Pricing</Link>
          <Link to="/about" className="nav-item">About Us</Link>

          {/* NORMAL LINKS */}
          <a href="#contact" className="nav-item">Contact Us</a>
          <a href="#blog" className="nav-item">Blogs</a>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="header-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-get-started">Get Started</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
