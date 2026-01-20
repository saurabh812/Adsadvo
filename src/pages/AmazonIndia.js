import React from "react";
import { motion } from "framer-motion";
import PricingPlans from '../components/PricingPlans';
// import PricingSection from "../components/PricingSection";
// import ContactForm from "../components/ContactForm";

const AmazonIndia = () => {
  return (
    <div style={styles.container}>
      <main>
        {/* ================= HERO ================= */}
        <section style={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heroContent}
          >
            <h1 style={styles.heroTitle}>
              Start Selling on{" "}
              <span style={styles.highlight}>Amazon India</span>
            </h1>

            <p style={styles.heroSubtitle}>
              Launch, scale, and automate your Amazon business with our complete
              dropshipping & branding solutions.
            </p>

            <button
              style={styles.heroButton}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get Started
            </button>

          </motion.div>
        </section>

        {/* ================= FEATURES ================= */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>

          <div style={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>How It Works</h2>

          <div style={styles.stepsGrid}>
            {steps.map((s, i) => (
              <div key={i} style={styles.stepCard}>
                <div style={styles.stepNumber}>{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
   
   <PricingPlans />

        {/* ================= CONTACT ================= */}
        {/* <ContactForm defaultService="Amazon" /> */}
      </main>
    </div>
  );
};

export default AmazonIndia;

/* ================= DATA ================= */

const features = [
  { icon: "📦", title: "No Inventory", description: "Sell without holding stock." },
  { icon: "🛒", title: "Amazon Ready Setup", description: "Seller account & listings." },
  { icon: "📊", title: "Analytics", description: "Track sales, ads & profits." },
  { icon: "🚀", title: "Fast Launch", description: "Go live in 24–48 hours." },
  { icon: "🧾", title: "GST Support", description: "Compliance & billing guidance." },
  { icon: "🎯", title: "Ads Growth", description: "Amazon ads & scaling strategy." },
];

const steps = [
  { title: "Consultation", description: "Understand your business goals." },
  { title: "Account Setup", description: "Seller account creation." },
  { title: "Product Listing", description: "Optimized high-conversion listings." },
  { title: "Scale with Ads", description: "Launch ads and grow sales." },
];

/* ================= STYLES ================= */

const styles = {
  container: {
    background: "#f8fafc",
  },

  heroSection: {
    padding: "100px 20px",
    background: "linear-gradient(135deg,#131921,#232f3e)",
    color: "#fff",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "900px",
    margin: "auto",
  },
  heroTitle: {
    fontSize: "54px",
    fontWeight: 900,
  },
  highlight: {
    color: "#ff9900",
  },
  heroSubtitle: {
    margin: "20px auto",
    maxWidth: "650px",
    fontSize: "18px",
    color: "#e5e7eb",
  },
  heroButton: {
    marginTop: "30px",
    padding: "16px 42px",
    borderRadius: "14px",
    fontWeight: 800,
    background: "#ff9900",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },

  section: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "auto",
  },
  sectionAlt: {
    padding: "80px 20px",
    background: "#f1f5f9",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "50px",
    fontWeight: 900,
    color: "#0f172a",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
  },
  featureCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  featureIcon: {
    fontSize: "40px",
    marginBottom: "15px",
  },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "auto",
  },
  stepCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  stepNumber: {
    fontSize: "26px",
    fontWeight: 900,
    marginBottom: "10px",
    color: "#ff9900",
  },
};
