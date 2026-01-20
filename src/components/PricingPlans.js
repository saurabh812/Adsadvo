import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const cardWidth = 352; // card + gap
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const plans = [
    {
      title: "CSV Product Package",
      price: "₹699",
      desc: "Perfect for beginners testing product ideas",
      features: [
        "Ready-to-use CSV file",
        "Trending & validated products",
        "Easy upload on seller panels",
        "Beginner-friendly format",
      ],
    },
    {
      title: "Amazon Starter Package",
      price: "₹4,999",
      desc: "Launch your Amazon journey with confidence",
      features: [
        "Amazon seller account creation",
        "Professional product listing",
        "2 months free ads support",
        "Step-by-step onboarding",
      ],
    },
    {
      title: "E-commerce Website Package",
      price: "₹35,000",
      highlight: true,
      badge: "MOST POPULAR",
      desc: "Everything you need to build & sell online",
      features: [
        "Shopify premium website setup",
        "1-year domain + SSL",
        "₹3,000 ads credit",
        "4 bill pay integrations",
        "80 product listings/month",
        "Complete website handover",
      ],
    },
    {
      title: "Amazon + Website Combo",
      price: "₹37,000",
      desc: "Maximum reach with dual-channel selling",
      features: [
        "Amazon seller account setup",
        "Amazon product listing",
        "Shopify website setup",
        "Unified Amazon + Website support",
        "High ROI combo solution",
      ],
    },
    {
      title: "Branding Solution",
      price: "₹1,50,000",
      highlight: true,
      badge: "WHITE LABEL",
      desc: "Build your own brand, we run the backend",
      features: [
        "Complete white-label branding",
        "Custom logo & brand identity",
        "Ready-to-sell brand setup",
        "Operations handled by experts",
        "You focus only on sales & scaling",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .pricing-section {
          padding: 120px 20px;
          background: radial-gradient(circle at top, #fff7ed, #f8fafc);
        }

        .pricing-container {
          max-width: 1400px;
          margin: auto;
        }

        .pricing-title {
          text-align: center;
          font-size: 44px;
          font-weight: 900;
          color: #0f172a;
        }

        .pricing-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 80px;
        }

        .pricing-slider-outer {
          position: relative;
          max-width: 1300px;
          margin: auto;
        }

        .pricing-slider-wrapper {
          overflow-x: auto;
          overflow-y: visible;
          scrollbar-width: none;
        }

        .pricing-slider-wrapper::-webkit-scrollbar {
          display: none;
        }

        .pricing-slider {
          display: flex;
          gap: 32px;
          padding: 20px 0;
        }

        .pricing-card {
          min-width: 320px;
          max-width: 320px;
          background: #fff;
          border-radius: 28px;
          padding: 44px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .pricing-card.highlight {
          border: 2px solid #ff7a18;
          box-shadow: 0 25px 60px rgba(255,122,24,0.25);
        }

        .badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff7a18, #ff9f1c);
          color: white;
          padding: 8px 22px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          z-index: 20;
        }

        .plan-title {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .plan-desc {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 20px;
        }

        .plan-price {
          font-size: 34px;
          font-weight: 900;
          color: #ff7a18;
          margin-bottom: 26px;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .plan-features li {
          padding-left: 28px;
          position: relative;
          margin-bottom: 14px;
        }

        .plan-features li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: 900;
        }

        /* ANIMATED CTA BUTTON */
        .plan-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ff7a18, #ff9f1c);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 14px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(255, 122, 24, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .plan-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          transition: left 0.6s ease;
        }

        .plan-btn:hover::before {
          left: 120%;
        }

        .plan-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(255, 122, 24, 0.5);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #0f172a;
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 22px;
          z-index: 30;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .nav-btn.left { left: -70px; }
        .nav-btn.right { right: -70px; }

        @media (max-width: 768px) {
          .nav-btn { display: none; }
        }
      `}</style>

      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <h2 className="pricing-title">Powerful Pricing for Every Stage</h2>
          <p className="pricing-subtitle">
            Choose the plan that fits your business and scale with confidence.
          </p>

          <div className="pricing-slider-outer">
            <button className="nav-btn left" onClick={() => scroll("left")}>
              ‹
            </button>

            <div className="pricing-slider-wrapper" ref={sliderRef}>
              <div className="pricing-slider">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
                  >
                    {plan.badge && <div className="badge">{plan.badge}</div>}

                    <h3 className="plan-title">{plan.title}</h3>
                    <p className="plan-desc">{plan.desc}</p>
                    <div className="plan-price">{plan.price}</div>

                    <ul className="plan-features">
                      {plan.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <motion.button
                      className="plan-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => navigate("/contact")}
                    >
                      Get Started Now
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="nav-btn right" onClick={() => scroll("right")}>
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
