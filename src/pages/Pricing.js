import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("annual");

  // Product Packages with correct yearly pricing calculation
  const packages = [
    {
      id: "csv-product",
      name: "CSV Product Package",
      tagline: "Ready-to-use CSV file",
      monthlyPrice: 699,
      yearlyPrice: () => Math.round(699 * 12 * 0.95), // 5% discount on yearly total
      features: [
        "Trending product list",
        "Easy upload on seller panels",
        "Monthly CSV updates",
        "Basic product research"
      ],
      ctaText: "Get Started",
      color: "#8b5cf6",
      accentColor: "#7c3aed"
    },
    {
      id: "amazon-starter",
      name: "Amazon Starter",
      tagline: "Complete Amazon setup",
      monthlyPrice: 4999,
      yearlyPrice: () => Math.round(4999 * 12 * 0.95), // 5% discount on yearly total
      features: [
        "Amazon seller account creation",
        "Product listing",
        "2 months free ads support",
        "Basic onboarding guidance",
        "Inventory management"
      ],
      ctaText: "Get Started",
      color: "#ff7a18",
      accentColor: "#f97316"
    },
    {
      id: "ecommerce-website",
      name: "E-commerce Website",
      tagline: "Shopify website setup",
      monthlyPrice: 35000,
      yearlyPrice: () => Math.round(35000 * 12 * 0.95), // 5% discount on yearly total
      popular: true,
      features: [
        "Shopify website setup",
        "1-year domain included",
        "2 months free ads management",
        "₹3,000 ads credit",
        "4 bill pay integrations",
        "80 product listings monthly"
      ],
      ctaText: "Get Started",
      color: "#10b981",
      accentColor: "#059669"
    },
    {
      id: "amazon-website-combo",
      name: "Amazon + Website Combo",
      tagline: "Complete business solution",
      monthlyPrice: 37000,
      yearlyPrice: () => Math.round(37000 * 12 * 0.95), // 5% discount on yearly total
      popular: false,
      features: [
        "Amazon seller account setup",
        "Shopify website setup",
        "Combined support",
        "Best value package",
        "Dedicated account manager"
      ],
      ctaText: "Get Started",
      color: "#3b82f6",
      accentColor: "#2563eb"
    },
    {
      id: "white-label",
      name: "WHITE LABEL",
      tagline: "Complete branding solution",
      monthlyPrice: 150000,
      yearlyPrice: () => Math.round(150000 * 12 * 0.95), // 5% discount on yearly total
      features: [
        "Your own brand identity",
        "Logo & brand guidelines",
        "Ready-to-sell branded setup",
        "Backend operations handled",
        "Focus only on sales & scaling"
      ],
      ctaText: "Contact Sales",
      color: "#0f172a",
      accentColor: "#1e293b"
    }
  ];

  const getCurrentPrice = (pkg) => {
    if (billingCycle === "annual") {
      const yearlyTotal = pkg.yearlyPrice();
      // Display monthly equivalent for comparison
      return Math.round(yearlyTotal / 12);
    }
    return pkg.monthlyPrice;
  };

  const getYearlyTotal = (pkg) => {
    return pkg.yearlyPrice();
  };

  const getSavingsAmount = (pkg) => {
    const monthlyTotal = pkg.monthlyPrice * 12;
    const yearlyTotal = pkg.yearlyPrice();
    return monthlyTotal - yearlyTotal;
  };

  const getSavingsPercentage = (pkg) => {
    const monthlyTotal = pkg.monthlyPrice * 12;
    const yearlyTotal = pkg.yearlyPrice();
    return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Choose Your Business Package</h1>
          <p style={styles.headerSubtitle}>
            Start your e-commerce journey with our specialized packages. 
            <span style={{ color: "#10b981", fontWeight: "bold", marginLeft: "8px" }}>
              Save 5% with yearly billing!
            </span>
          </p>
        </div>
      </header>

      <main style={styles.mainContent}>
        {/* Billing Toggle - Centered */}
        <section style={styles.billingSection}>
          <div style={styles.billingContainer}>
            <span style={styles.billingLabel}>Monthly Billing</span>
            <button 
              style={styles.toggleButton}
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
            >
              <div style={{
                ...styles.toggleKnob,
                left: billingCycle === "annual" ? "calc(100% - 28px)" : "4px",
                backgroundColor: billingCycle === "annual" ? "#10b981" : "#94a3b8"
              }} />
            </button>
            <span style={styles.billingLabel}>
              Yearly Billing 
              <span style={styles.discountBadge}>Save 5%</span>
            </span>
          </div>
          {billingCycle === "annual" && (
            <p style={styles.discountNote}>
              ✅ Yearly billing includes 5% discount on total annual amount
            </p>
          )}
        </section>

        {/* Pricing Cards - Side by Side */}
        <section style={styles.pricingSection}>
          <div style={styles.cardsContainer}>
            {packages.map((pkg, index) => {
              const currentMonthlyPrice = getCurrentPrice(pkg);
              const yearlyTotal = getYearlyTotal(pkg);
              const savingsAmount = getSavingsAmount(pkg);
              const savingsPercentage = getSavingsPercentage(pkg);
              const isYearly = billingCycle === "annual";
              
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    ...styles.pricingCard,
                    transform: pkg.popular ? "translateY(-10px)" : "none",
                    boxShadow: pkg.popular ? "0 20px 40px rgba(0, 0, 0, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.08)",
                    borderTop: `4px solid ${pkg.color}`
                  }}
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
                      Most Popular
                    </div>
                  )}

                  {/* Card Header */}
                  <div style={styles.cardHeader}>
                    <div style={{
                      ...styles.packageIcon,
                      backgroundColor: `${pkg.color}20`,
                      border: `2px solid ${pkg.color}40`
                    }}>
                      <span style={{ color: pkg.color, fontWeight: "bold", fontSize: "20px" }}>
                        {pkg.name.charAt(0)}
                      </span>
                    </div>
                    <h3 style={styles.packageName}>{pkg.name}</h3>
                    <p style={styles.packageTagline}>{pkg.tagline}</p>
                    
                    {/* Price Display */}
                    <div style={styles.priceDisplay}>
                      {isYearly ? (
                        <>
                          <div style={styles.yearlyPriceContainer}>
                            <div style={styles.priceContainer}>
                              <span style={styles.priceCurrency}>₹</span>
                              <span style={styles.priceAmount}>{currentMonthlyPrice.toLocaleString()}</span>
                              <span style={styles.pricePeriod}>/month</span>
                            </div>
                            <div style={styles.yearlyTotal}>
                              <span style={styles.yearlyLabel}>Total Yearly: </span>
                              <span style={styles.yearlyAmount}>₹{yearlyTotal.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div style={styles.savingsContainer}>
                            <div style={styles.originalPrice}>
                              Without discount: ₹{(pkg.monthlyPrice * 12).toLocaleString()}
                            </div>
                            <div style={styles.savingsBadge}>
                              Save ₹{savingsAmount.toLocaleString()} ({savingsPercentage}%)
                            </div>
                          </div>
                        </>
                      ) : (
                        <div style={styles.priceContainer}>
                          <span style={styles.priceCurrency}>₹</span>
                          <span style={styles.priceAmount}>{pkg.monthlyPrice.toLocaleString()}</span>
                          <span style={styles.pricePeriod}>/month</span>
                        </div>
                      )}
                    </div>
                    
                    {!isYearly && (
                      <div style={styles.monthlyNote}>
                        <svg style={styles.infoIcon} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Switch to yearly to save 5%
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div style={styles.cardBody}>
                    <h4 style={styles.featuresTitle}>What's included:</h4>
                    <ul style={styles.featuresList}>
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={styles.featureItem}>
                          <svg style={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: `0 10px 25px ${pkg.color}40` }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        ...styles.ctaButton,
                        backgroundColor: pkg.color,
                        border: `2px solid ${pkg.accentColor}`
                      }}
                    >
                      {pkg.ctaText}
                    </motion.button>

                    {/* Yearly Benefit */}
                    {isYearly && (
                      <div style={styles.yearlyBenefit}>
                        <svg style={styles.giftIcon} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 11v7h4a2 2 0 002-2v-5h-6z" />
                        </svg>
                        <span>Includes 5% discount & priority support</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Summary Section */}
        <section style={styles.summarySection}>
          <div style={styles.summaryCard}>
            <h3 style={styles.summaryTitle}>Yearly Billing Benefits</h3>
            <div style={styles.summaryPoints}>
              <div style={styles.summaryPoint}>
                <div style={styles.pointIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4>5% Discount</h4>
                  <p>Save 5% on total yearly amount compared to monthly billing</p>
                </div>
              </div>
              <div style={styles.summaryPoint}>
                <div style={styles.pointIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4>Priority Support</h4>
                  <p>Get faster response times and dedicated support</p>
                </div>
              </div>
              <div style={styles.summaryPoint}>
                <div style={styles.pointIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4>Cost Predictability</h4>
                  <p>Lock in your rate for 12 months with no price increases</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.ctaCard}
          >
            <div style={styles.ctaContent}>
              <h2 style={styles.ctaTitle}>Need help choosing?</h2>
              <p style={styles.ctaText}>Book a free 30-minute consultation with our experts to find the perfect package for your business.</p>
              <div style={styles.ctaButtons}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={styles.ctaPrimaryButton}
                >
                  Schedule Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={styles.ctaSecondaryButton}
                >
                  View All Features
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

// Updated Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  // Header
  header: {
    padding: "80px 20px 60px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    textAlign: "center",
    color: "#ffffff",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "16px",
    background: "linear-gradient(90deg, #f0f9ff, #cffafe)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headerSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    lineHeight: "1.6",
  },
  
  // Main Content
  mainContent: {
    padding: "0 20px 80px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  
  // Billing Section
  billingSection: {
    padding: "40px 0 60px",
    textAlign: "center",
  },
  billingContainer: {
    display: "inline-flex",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#ffffff",
    padding: "12px 24px",
    borderRadius: "50px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
    marginBottom: "16px",
  },
  billingLabel: {
    fontWeight: "600",
    color: "#475569",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  discountBadge: {
    backgroundColor: "#10b981",
    color: "#ffffff",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
  },
  toggleButton: {
    width: "64px",
    height: "32px",
    backgroundColor: "#e2e8f0",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    padding: "0",
  },
  toggleKnob: {
    position: "absolute",
    top: "4px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  },
  discountNote: {
    color: "#10b981",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: "12px",
  },
  
  // Pricing Cards Section
  pricingSection: {
    padding: "20px 0 80px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    overflowX: "auto",
    padding: "20px 10px 40px",
    scrollbarWidth: "thin",
    scrollbarColor: "#cbd5e1 transparent",
  },
  
  // Individual Card
  pricingCard: {
    flex: "0 0 320px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "680px",
    transition: "all 0.3s ease",
  },
  
  // Popular Badge
  popularBadge: {
    position: "absolute",
    top: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
    padding: "8px 24px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    zIndex: "2",
  },
  fireIcon: {
    width: "16px",
    height: "16px",
  },
  
  // Card Header
  cardHeader: {
    textAlign: "center",
    marginBottom: "32px",
    paddingBottom: "24px",
    borderBottom: "1px solid #e2e8f0",
  },
  packageIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  packageName: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "8px",
  },
  packageTagline: {
    color: "#64748b",
    fontSize: "15px",
    marginBottom: "24px",
    fontWeight: "500",
  },
  
  // Price Display
  priceDisplay: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
  },
  priceCurrency: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0f172a",
  },
  priceAmount: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: "1",
  },
  pricePeriod: {
    fontSize: "16px",
    color: "#64748b",
    fontWeight: "500",
  },
  yearlyPriceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  yearlyTotal: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#f0f9ff",
    padding: "8px 16px",
    borderRadius: "10px",
    marginTop: "8px",
  },
  yearlyLabel: {
    fontSize: "14px",
    color: "#0369a1",
    fontWeight: "500",
  },
  yearlyAmount: {
    fontSize: "18px",
    color: "#0369a1",
    fontWeight: "700",
  },
  savingsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    marginTop: "12px",
  },
  originalPrice: {
    fontSize: "13px",
    color: "#94a3b8",
    textDecoration: "line-through",
  },
  savingsBadge: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "8px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "700",
  },
  monthlyNote: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    marginTop: "16px",
    padding: "8px 12px",
    backgroundColor: "#fef3c7",
    borderRadius: "8px",
    color: "#92400e",
    fontSize: "13px",
    fontWeight: "500",
  },
  infoIcon: {
    width: "16px",
    height: "16px",
    color: "#92400e",
  },
  
  // Card Body
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  featuresTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "16px",
  },
  featuresList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "32px",
    flex: "1",
  },
  featureItem: {
    padding: "10px 0",
    color: "#475569",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    fontSize: "14px",
    lineHeight: "1.5",
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
    padding: "16px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "auto",
    transition: "all 0.3s ease",
  },
  
  // Yearly Benefit
  yearlyBenefit: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    padding: "12px",
    backgroundColor: "#f0f9ff",
    borderRadius: "10px",
    color: "#0369a1",
    fontSize: "13px",
    fontWeight: "500",
  },
  giftIcon: {
    width: "16px",
    height: "16px",
    color: "#0369a1",
    flexShrink: "0",
  },
  
  // Summary Section
  summarySection: {
    padding: "40px 0 60px",
  },
  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  summaryTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "32px",
    textAlign: "center",
  },
  summaryPoints: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  summaryPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  pointIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#f0f9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0369a1",
    flexShrink: "0",
  },
  
  // CTA Section
  ctaSection: {
    padding: "80px 0 0",
  },
  ctaCard: {
    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    borderRadius: "24px",
    overflow: "hidden",
  },
  ctaContent: {
    padding: "60px",
    textAlign: "center",
    color: "#ffffff",
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "900",
    marginBottom: "16px",
  },
  ctaText: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "32px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
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
  ctaSecondaryButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #3b82f6",
    padding: "18px 36px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },
};

// Responsive adjustments
const mediaQuery = `
  @media (max-width: 768px) {
    .cardsContainer {
      flex-direction: column;
      overflow-x: visible;
    }
    .pricingCard {
      flex: 1;
      min-width: 100%;
    }
    .headerTitle {
      font-size: 36px;
    }
    .ctaContent {
      padding: 40px 20px;
    }
    .summaryPoints {
      grid-template-columns: 1fr;
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