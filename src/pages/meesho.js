import React from "react";
import { motion } from "framer-motion";
// import PricingSection from "../components/PricingSection";
import PricingPlans from '../components/PricingPlans';
// import ContactForm from "../components/ContactForm";

const MeeshoDropshippingPage = () => {
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
              Start Your{" "}
              <span style={styles.highlight}>Meesho</span> Dropshipping Business
            </h1>

            <p style={styles.heroSubtitle}>
              Join India’s social commerce revolution and start selling with
              zero inventory investment.
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
          <h2 style={styles.sectionTitle}>Why Choose Meesho</h2>

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
        {/* <PricingSection
          title="Meesho Pricing Plans"
          highlight="meesho"
        /> */}
         <PricingPlans />

        {/* ================= CONTACT ================= */}
        {/* <ContactForm defaultService="Meesho" /> */}
      </main>
    </div>
  );
};

export default MeeshoDropshippingPage;

/* ================= DATA ================= */

const features = [
  {
    icon: "👥",
    title: "Reseller Network",
    description: "Access millions of resellers across India.",
  },
  {
    icon: "💰",
    title: "Zero Commission",
    description: "Keep 100% of your profit on every sale.",
  },
  {
    icon: "📱",
    title: "WhatsApp Selling",
    description: "Sell directly through WhatsApp & social media.",
  },
  {
    icon: "📦",
    title: "No Inventory",
    description: "Start selling without stocking products.",
  },
  {
    icon: "🚀",
    title: "Fast Setup",
    description: "Seller account & catalog setup in 24–48 hours.",
  },
  {
    icon: "📈",
    title: "High Growth",
    description: "India’s fastest growing social commerce platform.",
  },
];

const steps = [
  {
    title: "Create Seller Account",
    description: "We help you register & verify your Meesho account.",
  },
  {
    title: "Choose Products",
    description: "Select trending & high-demand products.",
  },
  {
    title: "Share & Promote",
    description: "Share product links on WhatsApp & Instagram.",
  },
  {
    title: "Earn Profits",
    description: "Earn commission on every successful order.",
  },
];

/* ================= STYLES ================= */

const styles = {
  container: {
    background: "#f8fafc",
  },

  heroSection: {
    padding: "100px 20px",
    background: "linear-gradient(135deg,#f43397,#d62a82)",
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
    color: "#ffd700",
  },
  heroSubtitle: {
    margin: "20px auto",
    maxWidth: "650px",
    fontSize: "18px",
    color: "#ffe4f0",
  },
  heroButton: {
    marginTop: "30px",
    padding: "16px 42px",
    borderRadius: "14px",
    fontWeight: 800,
    background: "#ffd700",
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
    background: "#fdf2f8",
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
    color: "#f43397",
  },
};
