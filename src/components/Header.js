import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ===== HEADER ===== */
        .header {
          background: linear-gradient(180deg, #071a2c, #0b1c2d);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1400px;
          margin: auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 800;
          color: white;
          text-decoration: none;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ===== DESKTOP NAV ===== */
        .nav {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .nav-item {
          color: white;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          position: relative;
        }

        .nav-item:hover {
          color: #ff6b35;
        }

        /* DESKTOP DROPDOWN */
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu {
          position: absolute;
          top: 140%;
          left: 0;
          background: white;
          width: 320px;
          border-radius: 14px;
          padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.25s ease;
          z-index: 2000;
        }

        .dropdown-menu a {
          display: block;
          padding: 12px;
          border-radius: 10px;
          color: #222;
          text-decoration: none;
        }

        .dropdown-menu a:hover {
          background: #f6f7f9;
        }

        .dropdown-menu strong {
          display: block;
          font-size: 15px;
        }

        .dropdown-menu span {
          font-size: 13px;
          color: #666;
        }

        /* ACTIONS */
        .header-actions {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .btn-signin {
          background: none;
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-get-started {
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          color: white;
          padding: 8px 18px;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
        }

        /* ===== MOBILE ===== */
        .hamburger {
          display: none;
          font-size: 26px;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav,
          .header-actions {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }

        /* OVERLAY */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 999;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: linear-gradient(180deg, #071a2c, #0b1c2d);
          padding: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          font-weight: 700;
        }

        .close-btn {
          font-size: 26px;
          cursor: pointer;
        }

        .mobile-menu a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          padding: 12px 0;
        }

        .dropdown-toggle {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          color: white;
          cursor: pointer;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        /* MOBILE DROPDOWN */
        .dropdown-list {
          margin-top: 10px;
          padding-left: 12px;
          border-left: 2px solid rgba(255,255,255,0.1);
        }

        .dropdown-list a {
          display: block;
          padding: 10px 0;
        }

        .dropdown-list strong {
          display: block;
          font-size: 16px;
          color: white;
        }

        .dropdown-list span {
          display: block;
          font-size: 13px;
          color: #b5c0cc;
        }

        .cta {
          margin-top: auto;
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          padding: 14px;
          border-radius: 12px;
          text-align: center;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <div className="logo-icon">A</div>
            Adsadvo
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>

           <div className="nav-item dropdown">
  Dropshipping ▾
  <div className="dropdown-menu">
    <a href="/AmazonIndia">
      <strong>Amazon</strong>
      <span>Sell without inventory</span>
    </a>

    <a href="/Flipkart">
      <strong>Flipkart</strong>
      <span>Launch faster</span>
    </a>

    <a href="/meesho">
      <strong>Meesho</strong>
      <span>Trending products</span>
    </a>

    <a href="/ecom-website">
      <strong>E-Com Website</strong>
      <span>Your own brand</span>
    </a>
  </div>
</div>


            <Link to="/pricing" className="nav-item">Pricing</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="header-actions">
            <button className="btn-signin">Sign In</button>
            <Link to="/pricing" className="btn-get-started">Get Started</Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>☰</div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={closeAll}></div>

          <div className="mobile-menu">
            <div className="mobile-header">
              Menu
              <span className="close-btn" onClick={closeAll}>✕</span>
            </div>

            <Link to="/" onClick={closeAll}>Home</Link>

            <div className="dropdown-toggle" onClick={() => setDropOpen(!dropOpen)}>
              Dropshipping {dropOpen ? "▲" : "▼"}
            </div>

            {dropOpen && (
              <div className="dropdown-list">
                <Link to="/AmazonIndia" onClick={closeAll}><strong>Amazon</strong><span>Sell without inventory</span></Link>
                <Link to="/Flipkart" onClick={closeAll}><strong>Flipkart</strong><span>Launch faster</span></Link>
                <Link to="/meesho" onClick={closeAll}><strong>Meesho</strong><span>Trending products</span></Link>
                <Link to="/ecom-website" onClick={closeAll}><strong>E-Com Website</strong><span>Your own brand</span></Link>
              </div>
            )}

            <Link to="/pricing" onClick={closeAll}>Pricing</Link>
            <Link to="/contact" onClick={closeAll}>Contact</Link>

            <Link to="/pricing" className="cta" onClick={closeAll}>
              Get Started
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
