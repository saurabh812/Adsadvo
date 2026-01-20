import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-text">Pan card club road , Ambrosia galaxy</p>
            <p className="footer-text">Pune, Maharashtra 411045</p>
            <p className="footer-text">📞 +91 7769803579</p>
            <p className="footer-text">✉️ suport@adsadvo.com</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <a href="#home" className="footer-link">Home</a>
            <a href="#why" className="footer-link">Why Adsadvo</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="#partners" className="footer-link">Partners</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <a href="#amazon-setup" className="footer-link">Amazon Store Setup</a>
            <a href="#product-research" className="footer-link">Product Research</a>
            <a href="#seller-support" className="footer-link">Seller Account Support</a>
            <a href="#listing" className="footer-link">Listing Optimization</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Dropshipping</h3>
            <a href="#usa" className="footer-link">USA Dropshipping</a>
            <a href="#india" className="footer-link">India Dropshipping</a>
            <a href="#suppliers" className="footer-link">Verified Suppliers</a>
            <a href="#automation" className="footer-link">Automation Tools</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Centers</h3>
            <a href="#delhi" className="footer-link">Delhi</a>
            <a href="#mumbai" className="footer-link">Mumbai</a>
            <a href="#bangalore" className="footer-link">Bangalore</a>
            <a href="#hyderabad" className="footer-link">Hyderabad</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <div className="logo-icon">S</div>
              <span className="logo-text">Adsadvo</span>
            </div>

            <div className="footer-social">
              <a href="#facebook" className="social-icon">📘</a>
              <a href="#instagram" className="social-icon">📷</a>
              <a href="#pinterest" className="social-icon">📌</a>
              <a href="#linkedin" className="social-icon">💼</a>
            </div>

            <div className="footer-apps">
              <a href="#playstore" className="app-badge">Get it on Google Play</a>
              <a href="#appstore" className="app-badge">Download on the App Store</a>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2024 Adsadvo. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy" className="footer-link-small">Privacy Policy</a>
              <a href="#terms" className="footer-link-small">Terms of Use</a>
              <a href="#refund" className="footer-link-small">Refund Policy</a>
              <a href="#support" className="footer-link-small">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

