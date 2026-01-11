import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="section-padding" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ background: "#fff", padding: "50px", borderRadius: "32px", boxShadow: "0 20px 50px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "900", textAlign: "center", marginBottom: "10px", color: "#0f172a" }}>Contact Us</h1>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "18px" }}>We're here to help you grow your business.</p>

          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "600", color: "#475569" }}>Full Name</label>
              <input style={{ padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "16px", background: "#f8fafc" }} placeholder="John Doe" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "600", color: "#475569" }}>Email Address</label>
              <input style={{ padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "16px", background: "#f8fafc" }} placeholder="john@example.com" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "600", color: "#475569" }}>Message</label>
              <textarea style={{ padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "16px", background: "#f8fafc", minHeight: "150px" }} placeholder="How can we help you?" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ background: "#ff7a18", color: "#fff", border: "none", padding: "18px", borderRadius: "12px", fontSize: "18px", fontWeight: "800", marginTop: "10px", boxShadow: "0 10px 20px rgba(255, 122, 24, 0.2)" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
