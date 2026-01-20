import React from "react";
import { motion } from "framer-motion";
// import PricingSection from "../components/PricingSection";
// import ContactForm from "../components/ContactForm";
import PricingPlans from '../components/PricingPlans';

const EcommerceWebsite = () => {
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
              Build Your Own{" "}
              <span style={styles.highlight}>E-commerce Website</span>
            </h1>

            <p style={styles.heroSubtitle}>
              Launch a fully branded online store with payments, products,
              automation, and dropshipping support.
            </p>

            <button
              style={styles.heroButton}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Launch Your Store
            </button>

          </motion.div>
        </section>

        {/* ================= FEATURES ================= */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Complete E-commerce Solution</h2>

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
          title="E-commerce Website Pricing Plans"
          highlight="website"
        /> */}

          <PricingPlans />

        {/* ================= CONTACT ================= */}
        {/* <ContactForm defaultService="E-commerce Website" /> */}
      </main>
    </div>
  );
};

export default EcommerceWebsite;

/* ================= DATA ================= */

const features = [
  {
    icon: "🛒",
    title: "Custom Website",
    description: "Fully branded Shopify / custom e-commerce store.",
  },
  {
    icon: "💳",
    title: "Payment Gateway",
    description: "Razorpay, Stripe, PayPal & COD integration.",
  },
  {
    icon: "🚚",
    title: "Dropshipping Ready",
    description: "Supplier, inventory & order automation.",
  },
  {
    icon: "📦",
    title: "Product Management",
    description: "Bulk upload & product optimization support.",
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    description: "Track sales, traffic & conversions.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description: "Fast hosting, SSL & scalable architecture.",
  },
];

const steps = [
  {
    title: "Choose Design",
    description: "Select a modern, conversion-focused layout.",
  },
  {
    title: "Add Products",
    description: "Upload or import products with pricing.",
  },
  {
    title: "Setup Payments",
    description: "Enable online payments & COD.",
  },
  {
    title: "Launch Store",
    description: "Go live and start selling online.",
  },
];

/* ================= STYLES ================= */

const styles = {
  container: {
    background: "#f8fafc",
  },

  heroSection: {
    padding: "100px 20px",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
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
    color: "#3b82f6",
  },
  heroSubtitle: {
    margin: "20px auto",
    maxWidth: "650px",
    fontSize: "18px",
    color: "#cbd5e1",
  },
  heroButton: {
    marginTop: "30px",
    padding: "16px 42px",
    borderRadius: "14px",
    fontWeight: 800,
    background: "#3b82f6",
    color: "#fff",
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
    color: "#3b82f6",
  },
};
