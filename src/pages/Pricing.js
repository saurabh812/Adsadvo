import React from "react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const packages = [
    {
      id: "csv-product",
      name: "CSV Product Package",
      tagline: "Ready-to-use CSV file",
      yearlyPrice: 699,
      features: [
        "Ready-to-use CSV file",
        "Trending product list",
        "Easy upload on seller panels / websites",
        "Monthly updates included",
        "Customer support"
      ],
      ctaText: "Get CSV Package",
      color: "#8b5cf6",
      accentColor: "#7c3aed"
    },
    {
      id: "amazon-starter",
      name: "Amazon Starter Package",
      tagline: "Complete Amazon setup",
      yearlyPrice: 4999,
      popular: true,
      features: [
        "Amazon seller account creation",
        "Product listing",
        "2 months free ads support",
        "Basic onboarding guidance",
        "Account health monitoring",
        "Inventory setup"
      ],
      ctaText: "Start Amazon Journey",
      color: "#ff7a18",
      accentColor: "#f97316"
    },
    {
      id: "ecommerce-website",
      name: "E-commerce Website Package",
      tagline: "Shopify website setup",
      yearlyPrice: 35000,
      features: [
        "Shopify website setup",
        "1-year domain included",
        "2 months free ads management",
        "₹3,000 ads credit",
        "4 bill pay integrations",
        "80 product listings per month",
        "Complete website handover"
      ],
      ctaText: "Launch Your Website",
      color: "#10b981",
      accentColor: "#059669"
    },
    {
      id: "amazon-website-combo",
      name: "Amazon + Website Combo",
      tagline: "Complete business solution",
      yearlyPrice: 37000,
      features: [
        "Amazon seller account setup",
        "Amazon product listing",
        "Shopify website setup",
        "Combined Amazon + Website support",
        "Best value combo package",
        "Dedicated account manager"
      ],
      ctaText: "Get Combo Package",
      color: "#3b82f6",
      accentColor: "#2563eb"
    },
    {
      id: "white-label",
      name: "Branding Solution",
      tagline: "White Label Service",
      yearlyPrice: 150000,
      premium: true,
      features: [
        "Complete white labeling solution",
        "Your own brand name & identity",
        "Logo, brand guidelines & positioning",
        "Ready-to-sell branded setup",
        "Backend operations handled by us",
        "You focus only on sales & scaling",
        "Dedicated support team"
      ],
      ctaText: "Book Consultation",
      color: "#0f172a",
      accentColor: "#1e293b"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Choose Your Business Growth Plan</h1>
          <p style={styles.headerSubtitle}>
            Invest in your success with our yearly packages designed for maximum growth
          </p>
        </div>
      </div>

      {/* Horizontal Cards Container with Scroll */}
      <div style={styles.cardsWrapper}>
        <div style={styles.cardsContainer}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                ...styles.pricingCard,
                borderTop: `4px solid ${pkg.color}`,
                transform: pkg.popular ? "scale(1.05)" : "scale(1)",
                zIndex: pkg.popular ? 2 : 1,
                boxShadow: pkg.popular ? "0 20px 40px rgba(0, 0, 0, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.08)",
                marginTop: pkg.popular ? "0px" : "20px",
                flexShrink: 0,
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div style={{
                  ...styles.popularBadge,
                  backgroundColor: pkg.color
                }}>
                  <svg style={styles.fireIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  MOST POPULAR
                </div>
              )}

              {/* Premium Badge */}
              {pkg.premium && (
                <div style={{
                  ...styles.premiumBadge,
                  backgroundColor: pkg.color
                }}>
                  <svg style={styles.starIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  PREMIUM
                </div>
              )}

              {/* Card Header */}
              <div style={styles.cardHeader}>
                <h3 style={styles.packageName}>{pkg.name}</h3>
                <p style={styles.packageTagline}>{pkg.tagline}</p>
                
                {/* Yearly Price */}
                <div style={styles.priceDisplay}>
                  <div style={styles.priceContainer}>
                    <span style={styles.priceCurrency}>₹</span>
                    <span style={styles.priceAmount}>{pkg.yearlyPrice.toLocaleString()}</span>
                  </div>
                  <div style={styles.pricePeriod}>/ year</div>
                </div>

                {/* Monthly Equivalent */}
                <div style={styles.monthlyEquivalent}>
                  ≈ ₹{(pkg.yearlyPrice / 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })} per month
                </div>
              </div>

              {/* Features List */}
              <div style={styles.cardBody}>
                <div style={styles.featuresList}>
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={styles.featureItem}>
                      <svg style={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span style={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    ...styles.ctaButton,
                    backgroundColor: pkg.color,
                    border: `2px solid ${pkg.accentColor}`,
                    marginTop: 'auto'
                  }}
                >
                  {pkg.ctaText}
                </motion.button>

                {/* Yearly Benefits */}
                <div style={styles.yearlyBenefits}>
                  <svg style={styles.giftIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 11v7h4a2 2 0 002-2v-5h-6z" />
                  </svg>
                  <span style={styles.benefitsText}>Yearly benefits included</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <svg style={styles.scrollIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
        <span style={styles.scrollText}>Scroll horizontally to see more packages</span>
        <svg style={styles.scrollIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.ctaCard}
        >
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Need Help Choosing?</h2>
            <p style={styles.ctaText}>
              Book a free 30-minute consultation with our experts to find the perfect package for your business.
            </p>
            <div style={styles.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaPrimaryButton}
              >
                Book Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "40px 20px",
    overflowX: "hidden",
  },
  
  // Header
  header: {
    padding: "40px 0 60px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  headerContent: {
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "16px",
    color: "#0f172a",
    background: "linear-gradient(90deg, #ff7a18, #3b82f6, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  headerSubtitle: {
    fontSize: "18px",
    color: "#64748b",
    lineHeight: "1.6",
  },
  
  // Cards Wrapper - Horizontal scroll container
  cardsWrapper: {
    width: "100%",
    overflowX: "auto",
    padding: "20px 0 10px",
    margin: "0 auto",
    position: "relative",
  },
  
  // Cards Container - Horizontal layout
  cardsContainer: {
    display: "flex",
    gap: "32px",
    padding: "20px 40px 40px",
    width: "max-content",
    margin: "0 auto",
  },
  
  // Individual Card
  pricingCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    width: "350px",
    minHeight: "700px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "all 0.3s ease",
  },
  
  // Badges
  popularBadge: {
    position: "absolute",
    top: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
    padding: "8px 24px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    zIndex: "2",
  },
  
  premiumBadge: {
    position: "absolute",
    top: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
    padding: "8px 24px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    zIndex: "2",
  },
  
  fireIcon: {
    width: "14px",
    height: "14px",
  },
  
  starIcon: {
    width: "14px",
    height: "14px",
  },
  
  // Card Header
  cardHeader: {
    textAlign: "center",
    marginBottom: "32px",
    paddingBottom: "24px",
    borderBottom: "1px solid #e2e8f0",
  },
  
  packageName: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "8px",
    lineHeight: "1.3",
  },
  
  packageTagline: {
    color: "#64748b",
    fontSize: "16px",
    marginBottom: "24px",
    fontWeight: "500",
  },
  
  // Price Display
  priceDisplay: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "8px",
  },
  
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
  },
  
  priceCurrency: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#0f172a",
  },
  
  priceAmount: {
    fontSize: "52px",
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: "1",
  },
  
  pricePeriod: {
    fontSize: "18px",
    color: "#64748b",
    fontWeight: "500",
    marginLeft: "4px",
  },
  
  monthlyEquivalent: {
    fontSize: "15px",
    color: "#64748b",
    backgroundColor: "#f1f5f9",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    display: "inline-block",
  },
  
  // Card Body
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  
  featuresList: {
    flex: "1",
    marginBottom: "24px",
  },
  
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "10px 0",
    color: "#475569",
    fontSize: "15px",
    lineHeight: "1.5",
  },
  
  featureText: {
    flex: "1",
  },
  
  checkIcon: {
    width: "18px",
    height: "18px",
    color: "#10b981",
    flexShrink: "0",
    marginTop: "2px",
  },
  
  // CTA Button
  ctaButton: {
    color: "#ffffff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
  },
  
  // Yearly Benefits
  yearlyBenefits: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "16px",
    padding: "16px",
    backgroundColor: "#f0f9ff",
    borderRadius: "10px",
    color: "#0369a1",
    fontSize: "15px",
  },
  
  giftIcon: {
    width: "20px",
    height: "20px",
    color: "#0369a1",
    flexShrink: "0",
  },
  
  benefitsText: {
    fontWeight: "600",
  },
  
  // Scroll Indicator
  scrollIndicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "500",
    opacity: 0.8,
  },
  
  scrollIcon: {
    width: "24px",
    height: "24px",
    color: "#3b82f6",
  },
  
  scrollText: {
    textAlign: "center",
  },
  
  // CTA Section
  ctaSection: {
    padding: "80px 0 0",
    maxWidth: "800px",
    margin: "0 auto",
  },
  
  ctaCard: {
    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    borderRadius: "24px",
    overflow: "hidden",
  },
  
  ctaContent: {
    padding: "48px",
    textAlign: "center",
    color: "#ffffff",
  },
  
  ctaTitle: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  
  ctaText: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "32px",
    lineHeight: "1.6",
  },
  
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  
  ctaPrimaryButton: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "18px 36px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },
};

// Custom scrollbar styles
const mediaQuery = `
  /* Custom scrollbar styling */
  .cardsWrapper::-webkit-scrollbar {
    height: 12px;
    background-color: #f1f5f9;
    border-radius: 10px;
    margin: 0 40px;
  }
  
  .cardsWrapper::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
    margin: 0 40px;
  }
  
  .cardsWrapper::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #ff7a18, #3b82f6, #10b981);
    border-radius: 10px;
    border: 2px solid #f1f5f9;
  }
  
  .cardsWrapper::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #ff6b00, #2563eb, #059669);
  }
  
  .cardsWrapper {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #f1f5f9;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 20px 16px;
    }
    
    .header {
      padding: 30px 0 40px;
    }
    
    .headerTitle {
      font-size: 36px;
    }
    
    .headerSubtitle {
      font-size: 16px;
    }
    
    .cardsContainer {
      gap: 24px;
      padding: 20px 30px 40px;
    }
    
    .pricingCard {
      width: 320px;
      min-height: 680px;
      padding: 28px;
    }
    
    .priceAmount {
      font-size: 46px;
    }
    
    .ctaContent {
      padding: 32px 24px;
    }
    
    .ctaTitle {
      font-size: 28px;
    }
    
    /* Mobile scrollbar */
    .cardsWrapper::-webkit-scrollbar {
      height: 8px;
    }
  }
  
  @media (max-width: 480px) {
    .headerTitle {
      font-size: 28px;
    }
    
    .headerSubtitle {
      font-size: 16px;
    }
    
    .cardsContainer {
      gap: 20px;
      padding: 20px 25px 40px;
    }
    
    .pricingCard {
      width: 300px;
      min-height: 660px;
      padding: 24px;
    }
    
    .packageName {
      font-size: 22px;
    }
    
    .priceAmount {
      font-size: 42px;
    }
    
    .featureItem {
      font-size: 14px;
    }
    
    .scrollText {
      font-size: 12px;
    }
    
    .scrollIcon {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 380px) {
    .pricingCard {
      width: 280px;
      min-height: 640px;
      padding: 20px;
    }
    
    .priceAmount {
      font-size: 38px;
    }
  }
`;

export default function App() {
  return (
    <>
      <style>{mediaQuery}</style>
      <PricingPage />
    </>
  );
}