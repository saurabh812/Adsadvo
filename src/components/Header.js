import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        body {
          overflow: ${open ? "hidden" : "auto"};
        }

        /* ===== HEADER ===== */
        .header {
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .header-container {
          max-width: 1400px;
          margin: auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ===== LOGO ===== */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.6rem;
          font-weight: 800;
          text-decoration: none;
          color: #1a1a1a;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ===== DESKTOP NAV ===== */
        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-item {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .nav-item:hover {
          color: #ff6b35;
        }

        /* ===== DESKTOP ACTIONS ===== */
        .header-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .btn-signin {
          background: none;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-signin:hover {
          color: #ff6b35;
        }

        .btn-get-started {
          background: linear-gradient(135deg, #ff6b35, #ff944d);
          color: white;
          padding: 0.6rem 1.6rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(255,107,53,0.35);
        }

        /* ===== HAMBURGER ===== */
        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger,
        .hamburger::before,
        .hamburger::after {
          width: 26px;
          height: 2px;
          background: #333;
          position: relative;
          display: block;
        }

        .hamburger::before,
        .hamburger::after {
          content: "";
          position: absolute;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { top: 8px; }

        /* ===== MOBILE OVERLAY ===== */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          opacity: ${open ? 1 : 0};
          pointer-events: ${open ? "auto" : "none"};
          transition: 0.3s;
          z-index: 1999;
        }

        /* ===== MOBILE NAV ===== */
        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 320px;
          background: #fff;
          padding: 1.8rem;
          transform: translateX(${open ? "0" : "100%"});
          transition: 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .close {
          align-self: flex-end;
          background: none;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
        }

        .mobile-links {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }

        .mobile-links a {
          font-size: 1.1rem;
          font-weight: 500;
          text-decoration: none;
          color: #333;
        }

        /* ===== MOBILE CTA (VISIBLE FIX) ===== */
        .mobile-cta {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .nav,
          .header-actions {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-container">

          <Link to="/" className="logo">
            <div className="logo-icon">A</div>
            Adsadvo
          </Link>

          <nav className="nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/services">Services</Link>
            <Link className="nav-item" to="/pricing">Pricing</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <button className="btn-signin">Sign In</button>
            <Link to="/pricing" className="btn-get-started">
              Get Started
            </Link>
          </div>

          <button className="menu-btn" onClick={() => setOpen(true)}>
            <span className="hamburger" />
          </button>

        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className="overlay" onClick={() => setOpen(false)} />

      <div className="mobile-nav">
        <button className="close" onClick={() => setOpen(false)}>✕</button>

        <div className="mobile-links">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

        {/* ✅ SIGN IN + GET STARTED (NOW ALWAYS VISIBLE) */}
        <div className="mobile-cta">
          <button className="btn-signin">Sign In</button>
          <Link to="/pricing" className="btn-get-started">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
