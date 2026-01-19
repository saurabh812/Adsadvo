import React from "react";
import { motion } from "framer-motion";
import PricingSection from "../components/PricingSection";
import ContactForm from "../components/ContactForm";

const FlipkartDropshippingPage = () => {
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
              <span style={styles.highlight}>Flipkart</span> Dropshipping Business
            </h1>

            <p style={styles.heroSubtitle}>
              Launch and scale your online store on India’s fastest growing
              marketplace with zero inventory.
            </p>

            <button style={styles.heroButton}>Get Started</button>
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
        <PricingSection
          title="Flipkart Pricing Plans"
          highlight="flipkart"
        />

        {/* ================= CONTACT ================= */}
        <ContactForm defaultService="Flipkart" />
      </main>
    </div>
  );
};

export default FlipkartDropshippingPage;

/* ================= DATA ================= */

const features = [
  {
    icon: "🛒",
    title: "Flipkart Seller Hub",
    description: "Complete Flipkart seller onboarding & dashboard setup.",
  },
  {
    icon: "📦",
    title: "Zero Inventory",
    description: "Sell products without stocking inventory.",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    description: "Fast & reliable Flipkart logistics network.",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description: "Track orders, revenue & growth in real-time.",
  },
  {
    icon: "🎯",
    title: "Ads Support",
    description: "Flipkart ads setup to boost visibility & sales.",
  },
  {
    icon: "🚀",
    title: "Quick Launch",
    description: "Go live within 24–48 hours.",
  },
];

const steps = [
  {
    title: "Seller Registration",
    description: "We help create & verify your Flipkart seller account.",
  },
  {
    title: "Product Selection",
    description: "Choose high-demand & profitable products.",
  },
  {
    title: "Listing Optimization",
    description: "SEO-optimized listings for higher conversions.",
  },
  {
    title: "Start Selling",
    description: "Orders, payments & shipping handled seamlessly.",
  },
];

/* ================= STYLES ================= */

const styles = {
  container: {
    background: "#f8fafc",
  },

  heroSection: {
    padding: "100px 20px",
    background: "linear-gradient(135deg,#2874f0,#1a5dc1)",
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
    color: "#ff9f00",
  },
  heroSubtitle: {
    margin: "20px auto",
    maxWidth: "650px",
    fontSize: "18px",
    color: "#e3f2fd",
  },
  heroButton: {
    marginTop: "30px",
    padding: "16px 42px",
    borderRadius: "14px",
    fontWeight: 800,
    background: "#ff9f00",
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
    color: "#2874f0",
  },
};
