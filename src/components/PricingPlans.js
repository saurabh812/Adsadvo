import React from "react";
import { motion } from "framer-motion";

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
      <style>{`
        .pricing-section {
          padding: 100px 20px;
          background: #f8fafc;
        }

        .pricing-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .pricing-title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .pricing-subtitle {
          text-align: center;
          font-size: 18px;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto 80px;
          line-height: 1.6;
        }

        .pricing-grid {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          padding: 20px 10px 40px;
          scroll-behavior: smooth;
        }

        .pricing-grid::-webkit-scrollbar {
          height: 8px;
        }

        .pricing-grid::-webkit-scrollbar-thumb {
          background: #ff7a18;
          border-radius: 10px;
        }

        .pricing-card {
          min-width: 340px;
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          flex-shrink: 0;
          border: 1px solid #e2e8f0;
        }

        .pricing-card.highlight {
          border: 2px solid #ff7a18;
          box-shadow: 0 20px 40px rgba(255, 122, 24, 0.1);
        }

        .badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff7a18;
          color: #fff;
          padding: 8px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(255, 122, 24, 0.3);
        }

        .plan-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .plan-price {
          font-size: 36px;
          font-weight: 900;
          color: #ff7a18;
          margin-bottom: 30px;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          flex-grow: 1;
        }

        .plan-features li {
          font-size: 16px;
          color: #475569;
          margin-bottom: 16px;
          padding-left: 32px;
          position: relative;
          line-height: 1.5;
        }

        .plan-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: 900;
          font-size: 18px;
        }

        .plan-btn {
          background: #ff7a18;
          color: #fff;
          border: none;
          padding: 16px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(255, 122, 24, 0.2);
        }

        @media (max-width: 768px) {
          .pricing-title {
            font-size: 32px;
          }
          .pricing-grid {
            gap: 20px;
          }
          .pricing-card {
            min-width: 300px;
            padding: 30px;
          }
        }
      `}</style>

      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="pricing-title">Our Pricing Plans</h2>
            <p className="pricing-subtitle">
              Transparent pricing with no hidden charges. Choose the plan that fits
              your business goals and scale confidently with Adsadvo.
            </p>
          </motion.div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
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

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="plan-btn"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
