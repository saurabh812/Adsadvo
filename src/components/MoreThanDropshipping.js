import React from "react";
import globalSupplier from "../assets/global-supplier.png";
import lr1 from "../assets/lr1.png";
import lr3 from "../assets/lr3.png";

const MoreThanDropshipping = () => {
  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        .more-section {
          padding: 70px 20px;
          background: #fafafa;
        }

        .more-container {
          max-width: 1100px;
          margin: auto;
        }

        .more-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .more-heading h2 {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .more-heading span {
          color: #ff6b35;
        }

        .more-heading p {
          font-size: 15px;
          color: #777;
          max-width: 650px;
          margin: auto;
        }

        .feature-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          background: #fff;
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          align-items: center;
        }

        .feature-card.reverse {
          direction: rtl;
        }

        .feature-card.reverse * {
          direction: ltr;
        }

        .feature-image {
          background: #fff3eb;
          border-radius: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .feature-image img {
          max-width: 90%;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-image img {
          transform: scale(1.03);
        }

        .feature-content h3 {
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .feature-content p {
          font-size: 14.5px;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .feature-list li {
          font-size: 14.5px;
          margin-bottom: 8px;
          position: relative;
          padding-left: 22px;
        }

        .feature-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #ff6b35;
          font-weight: bold;
        }

        .feature-btn {
          background: #ff6b35;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 13.5px;
          border-radius: 6px;
          cursor: pointer;
          box-shadow: 0 6px 14px rgba(255,107,53,0.25);
          transition: all 0.3s ease;
        }

        .feature-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(255,107,53,0.35);
        }

        @media (max-width: 900px) {
          .feature-card {
            grid-template-columns: 1fr;
            padding: 30px;
          }

          .feature-card.reverse {
            direction: ltr;
          }
        }
      `}</style>

      {/* ================= SECTION ================= */}
      <section className="more-section">
        <div className="more-container">
          <div className="more-heading">
            <h2>
              More Than Dropshipping <span>Your Growth Partner</span>
            </h2>
            <p>
              Adsadvo gives you the complete business engine — high-margin
              products, verified suppliers, automated fulfillment & expert
              support to scale like a real brand.
            </p>
          </div>

          {/* CARD 1 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={lr1} alt="Profit Margins" />
            </div>
            <div className="feature-content">
              <h3>Earn Massive Profit Margins</h3>
              <p>
                Sell trending products without inventory or upfront investment
                and keep maximum profit.
              </p>
              <ul className="feature-list">
                <li>High profit margins</li>
                <li>No inventory cost</li>
                <li>No unsold stock risk</li>
              </ul>
              <button className="feature-btn">Start Earning Today</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="feature-card reverse">
            <div className="feature-image">
              <img src={globalSupplier} alt="Global Supplier" />
            </div>
            <div className="feature-content">
              <h3>Grow With Global Supplier Ecosystem</h3>
              <p>
                Access 100,000+ verified suppliers across India, USA, UK, Europe
                & China.
              </p>
              <ul className="feature-list">
                <li>Lightning-fast sourcing</li>
                <li>Premium quality control</li>
                <li>Multiple suppliers per product</li>
              </ul>
              <button className="feature-btn">Explore Supplier Network</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={lr3} alt="Shipping" />
            </div>
            <div className="feature-content">
              <h3>Free Shipping Pan India</h3>
              <p>
                Automated order processing with fast shipping, tracking &
                transparent pricing.
              </p>
              <ul className="feature-list">
                <li>2800+ pin codes covered</li>
                <li>Live tracking dashboard</li>
                <li>Free returns handling</li>
              </ul>
              <button className="feature-btn">See How It Works</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreThanDropshipping;
