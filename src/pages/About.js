import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-padding" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "48px", fontWeight: "900", textAlign: "center", marginBottom: "40px", color: "#0f172a" }}
        >
          About <span style={{ color: "#ff7a18" }}>Adsadvo</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ background: "#fff", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#475569", marginBottom: "30px" }}>
            Adsadvo is India's most trusted dropshipping platform, dedicated to turning aspiring entrepreneurs into successful business owners. We provide a comprehensive ecosystem that simplifies the complexities of e-commerce.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>Our Mission</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#475569", marginBottom: "30px" }}>
            To empower 1 million Indians to start and scale their own online businesses without the traditional barriers of inventory, warehousing, or technical expertise.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>Why Choose Us?</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Verified high-margin products",
              "Automated order fulfillment",
              "Expert business mentorship",
              "End-to-end logistics support"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                style={{ fontSize: "18px", color: "#475569", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ color: "#22c55e", fontWeight: "bold" }}>✓</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
