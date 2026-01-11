import React from 'react';
import './TransformJourney.css';

const TransformJourney = () => {
  return (
    <section className="transform-journey">
      <div className="container">
        <div className="journey-content">
          <div className="journey-image">
            <div className="image-placeholder">
              <div className="image-content">
                <div className="person-icon">👩</div>
                <div className="phone-icon">📱</div>
                <div className="book-icon">📖</div>
                <div className="logo-overlay">
                  <div className="logo-icon-small">S</div>
                  <span className="logo-text-small">Adsadvo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="journey-text">
            <h2 className="journey-title">Transform Your Amazon Dropshipping Journey</h2>
            <p className="journey-description">
              Learn how Adsadvo helps new and experienced sellers scale quickly with trusted suppliers, optimized listings, and real expert support.
            </p>
            
            <div className="journey-features">
              <div className="journey-feature">
                <div className="feature-icon play-icon">▶</div>
                <div className="feature-content">
                  <h3 className="feature-title">Step-by-Step Training</h3>
                  <p className="feature-description">Understand every part of the Amazon dropshipping system.</p>
                </div>
              </div>
              <div className="journey-feature">
                <div className="feature-icon shield-icon">✓</div>
                <div className="feature-content">
                  <h3 className="feature-title">100% Verified Suppliers</h3>
                  <p className="feature-description">Only trusted & policy-safe vendors for your products.</p>
                </div>
              </div>
              <div className="journey-feature">
                <div className="feature-icon headset-icon">🎧</div>
                <div className="feature-content">
                  <h3 className="feature-title">Real Support, Real Growth</h3>
                  <p className="feature-description">Our expert team guides you through challenges and scaling.</p>
                </div>
              </div>
            </div>
            
            <button className="btn-orange">Watch Full Video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformJourney;

