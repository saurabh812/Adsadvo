import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    { title: "Scaling Your Dropshipping Brand in 2026", desc: "Discover the latest trends and strategies to scale your business exponentially.", date: "Jan 10, 2026" },
    { title: "Profitability Secrets for New Sellers", desc: "Learn how to optimize your margins and reduce operational costs effectively.", date: "Jan 05, 2026" },
    { title: "Why Adsadvo is the #1 Platform", desc: "An in-depth look at our ecosystem and how it compares to traditional setups.", date: "Dec 28, 2025" },
  ];

  return (
    <section className="section-padding" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "48px", fontWeight: "900", textAlign: "center", marginBottom: "60px", color: "#0f172a" }}
        >
          Our <span style={{ color: "#ff7a18" }}>Insights</span>
        </motion.h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
          {posts.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ background: "#fff", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}
            >
              <p style={{ color: "#ff7a18", fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>{p.date}</p>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>{p.title}</h2>
              <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "24px" }}>{p.desc}</p>
              <motion.button 
                whileHover={{ x: 5 }}
                style={{ background: "transparent", border: "none", color: "#ff7a18", fontWeight: "800", fontSize: "16px", cursor: "pointer", padding: 0 }}
              >
                Read More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
