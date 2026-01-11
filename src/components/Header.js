import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">Adsadvo</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="nav">

          {/* DROPDOWN */}
          <div className="nav-item dropdown">
            <span className="dropdown-trigger">
              Dropshipping <span className="dropdown-arrow">▼</span>
            </span>

            <div className="dropdown-menu">
              <div className="dropdown-column">

                {/* AMAZON PARENT */}
                <div className="dropdown-item amazon-parent">
                  <div className="dropdown-icon amazon-icon">a</div>

                  <div className="dropdown-content">
                    <div className="dropdown-title">Amazon</div>
                    <div className="dropdown-description">
                      Earn income online, no inventory required
                    </div>
                  </div>

                  <div className="dropdown-arrow-right">›</div>

                  {/* AMAZON SUBMENU */}
                  <div className="amazon-submenu">

                    <Link to="/amazon-india" className="submenu-item">
                      <div className="dropdown-icon amazon-icon">a</div>
                      <div className="dropdown-content">
                        <div className="dropdown-title">Amazon India</div>
                        <div className="dropdown-description">
                          More profit, lower costs, happy customers
                        </div>
                      </div>
                    </Link>

                    <Link to="/amazon-international" className="submenu-item">
                      <div className="dropdown-icon amazon-icon">a</div>
                      <div className="dropdown-content">
                        <div className="dropdown-title">
                          Amazon International
                        </div>
                        <div className="dropdown-description">
                          Earn income online, no experience required
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>

                {/* FLIPKART */}
                <Link to="/flipkart" className="dropdown-item">
                  <div className="dropdown-icon flipkart-icon">📦</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">Flipkart</div>
                    <div className="dropdown-description">
                      Everything you need to launch your store
                    </div>
                  </div>
                </Link>

                {/* MEESHO */}
                <Link to="/meesho" className="dropdown-item">
                  <div className="dropdown-icon meesho-icon">👨‍🍳</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">Meesho</div>
                    <div className="dropdown-description">
                      Top trending products made easy
                    </div>
                  </div>
                </Link>

                {/* E-COM WEBSITE */}
                <Link to="/ecom-website" className="dropdown-item">
                  <div className="dropdown-icon ecom-icon">🌐</div>
                  <div className="dropdown-content">
                    <div className="dropdown-title">E-Com Website</div>
                    <div className="dropdown-description">
                      Launch your business fast
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </div>

          {/* MAIN ROUTES */}
          <Link to="/pricing" className="nav-item">Pricing</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/contact" className="nav-item">Contact Us</Link>
          <Link to="/blog" className="nav-item">Blogs</Link>

        </nav>

        {/* ACTION BUTTONS */}
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
