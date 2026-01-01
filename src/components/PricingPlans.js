import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "CSV Product Package",
      price: "₹699",
      features: [
        "Ready-to-use CSV file",
        "Trending product list",
        "Easy upload on seller panels / websites",
      ],
    },
    {
      title: "Amazon Starter Package",
      price: "₹4,999",
      features: [
        "Amazon seller account creation",
        "Product listing",
        "2 months free ads support",
        "Basic onboarding guidance",
      ],
    },
    {
      title: "E-commerce Website Package",
      price: "₹35,000",
      highlight: true,
      features: [
        "Shopify website setup",
        "1-year domain",
        "2 months free ads management",
        "₹3,000 ads credit",
        "4 bill pay integrations",
        "80 product listings per month",
        "Complete website handover",
      ],
    },
    {
      title: "Amazon + Website Combo",
      price: "₹37,000",
      features: [
        "Amazon seller account setup",
        "Amazon product listing",
        "Shopify website setup",
        "Combined Amazon + Website support",
        "Best value combo package",
      ],
    },
    {
      title: "Branding Solution",
      price: "₹1,50,000",
      highlight: true,
      badge: "WHITE LABEL",
      features: [
        "Complete white labeling solution",
        "Your own brand name & identity",
        "Logo, brand guidelines & positioning",
        "Ready-to-sell branded setup",
        "Backend operations handled by us",
        "You focus only on sales & scaling",
      ],
    },
  ];

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        .pricing-section {
          padding: 90px 20px;
          background: linear-gradient(180deg, #f9fafb, #ffffff);
        }

        .pricing-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .pricing-title {
          text-align: center;
          font-size: 38px;
          font-weight: 800;
          color: #111;
          margin-bottom: 10px;
        }

        .pricing-subtitle {
          text-align: center;
          font-size: 16px;
          color: #666;
          max-width: 760px;
          margin: 0 auto 60px;
          line-height: 1.6;
        }

        /* ===== HORIZONTAL SCROLL ===== */
        .pricing-grid {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          padding-bottom: 20px;
          scroll-behavior: smooth;
        }

        .pricing-grid::-webkit-scrollbar {
          height: 8px;
        }

        .pricing-grid::-webkit-scrollbar-thumb {
          background: #ff6b35;
          border-radius: 10px;
        }

        /* ===== CARD ===== */
        .pricing-card {
          min-width: 320px;
          max-width: 320px;
          background: #ffffff;
          border-radius: 20px;
          padding: 34px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
          position: relative;
          flex-shrink: 0;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(0,0,0,0.12);
        }

        .pricing-card.highlight {
          border: 2px solid #ff6b35;
          background: linear-gradient(180deg, #fff7f3, #ffffff);
        }

        /* ===== BADGE ===== */
        .badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff6b35;
          color: #fff;
          padding: 6px 18px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* ===== CONTENT ===== */
        .plan-title {
          font-size: 21px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .plan-price {
          font-size: 30px;
          font-weight: 800;
          color: #ff6b35;
          margin-bottom: 22px;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          flex-grow: 1;
        }

        .plan-features li {
          font-size: 15px;
          color: #333;
          margin-bottom: 12px;
          padding-left: 26px;
          position: relative;
          line-height: 1.5;
        }

        .plan-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #ff6b35;
          font-weight: bold;
        }

        /* ===== BUTTON ===== */
        .plan-btn {
          background: #ff6b35;
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .plan-btn:hover {
          background: #e55a2b;
          transform: translateY(-2px);
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .pricing-title {
            font-size: 28px;
          }

          .pricing-section {
            padding: 60px 15px;
          }

          .pricing-card {
            min-width: 100%;
            max-width: 100%;
          }
        }
      `}</style>

      {/* ================= JSX ================= */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <h2 className="pricing-title">Our Pricing Plans</h2>
          <p className="pricing-subtitle">
            Transparent pricing with no hidden charges. Choose the plan that fits
            your business goals and scale confidently with SeekhoBecho.
          </p>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${
                  plan.highlight ? "highlight" : ""
                }`}
              >
                {plan.badge && <div className="badge">{plan.badge}</div>}

                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-price">{plan.price}</div>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button className="plan-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
