import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.hero}>
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile ? "36px" : "48px",
            }}
          >
            Start Your Online <br /> Dropshipping Business
          </h1>

          <p style={styles.subtitle}>
            With India’s Most Trusted Dropshipping Platform
          </p>

          <p style={styles.description}>
            Start selling online without inventory, warehouse, or complicated
            setups. We manage everything from product listing to delivery so you
            can scale your business confidently.
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              ...styles.buttons,
              justifyContent: isMobile ? "center" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            <button style={styles.primaryBtn}>Get Started Today</button>
            <button style={styles.secondaryBtn}>📞 Call Us</button>
          </div>

          {/* FEATURE BADGES */}
          <div
            style={{
              ...styles.badges,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {[
              "Zero Inventory Needed",
              "100% Verified Suppliers",
              "Expert Account Support",
              "Fast Store Launch",
            ].map((item) => (
              <div key={item} style={styles.badge}>
                <span style={styles.check}>✔</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          style={{
            ...styles.right,
            marginTop: isMobile ? "40px" : "0",
          }}
        >
          <div style={styles.visualBox}>
            <div style={{ ...styles.square, background: "#FFD400" }} />
            <div style={{ ...styles.square, background: "#FF7A18" }} />
            <div style={{ ...styles.square, background: "#22D3EE" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    width: "100%",
    background:
      "radial-gradient(circle at top, #1e293b 0%, #020617 70%)",
    padding: "90px 0",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    alignItems: "center",
    gap: "40px",
  },

  left: {
    color: "#fff",
  },

  title: {
    fontWeight: "800",
    lineHeight: "1.15",
    marginBottom: "14px",
  },

  subtitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ff7a18",
    marginBottom: "18px",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#cbd5e1",
    maxWidth: "520px",
    margin: "0 auto",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    marginTop: "26px",
  },

  primaryBtn: {
    background: "#ff7a18",
    border: "none",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },

  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "22px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: "13px",
    color: "#e5e7eb",
  },

  check: {
    color: "#22c55e",
    fontSize: "12px",
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },

  visualBox: {
    width: "280px",
    height: "200px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
  },

  square: {
    width: "44px",
    height: "44px",
    borderRadius: "8px",
  },
};
