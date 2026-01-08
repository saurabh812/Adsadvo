import React, { useEffect, useState } from "react";
import heroVideo from "../assets/hero-bg.mp4";


export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.hero}>
      {/* VIDEO BACKGROUND */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}

      {/* OVERLAY */}
      <div style={styles.overlay} />

      {/* CONTENT */}
      <div
        style={{
          ...styles.container,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h1 style={{ ...styles.title, fontSize: isMobile ? 34 : 52 }}>
          Start Your Online <br /> Dropshipping Business
        </h1>

        <p style={styles.subtitle}>
          India’s Most Trusted Dropshipping Platform
        </p>

        <p style={styles.description}>
          Start selling online without inventory, warehouse, or complicated
          setups. We manage everything from product listing to delivery so you
          can scale your business confidently.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Get Started Today</button>
          <button style={styles.secondaryBtn}>📞 Call Us</button>
        </div>

        <div style={styles.badges}>
          {[
            "Zero Inventory Needed",
            "100% Verified Suppliers",
            "Expert Account Support",
            "Fast Store Launch",
          ].map((item) => (
            <div key={item} style={styles.badge}>
              <span style={styles.check}>✔</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#020617", // fallback for mobile
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(2,6,23,0.85), rgba(2,6,23,0.65))",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    padding: "0 20px",
    color: "#fff",
  },

  title: {
    fontWeight: 900,
    lineHeight: 1.15,
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 600,
    color: "#ff7a18",
    marginBottom: 18,
  },

  description: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#cbd5e1",
    maxWidth: 520,
  },

  buttons: {
    display: "flex",
    gap: 16,
    marginTop: 30,
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ff7a18, #ff9a3c)",
    border: "none",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: 10,
    cursor: "pointer",
  },

  badges: {
    display: "flex",
    gap: 12,
    marginTop: 26,
    flexWrap: "wrap",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: 13,
  },

  check: {
    color: "#22c55e",
  },
};
