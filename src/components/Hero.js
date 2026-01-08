import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.hero}>
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div style={styles.overlay} />

      {/* CONTENT */}
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <h1 style={styles.title}>
            Start Your Online <br /> Dropshipping Business
          </h1>

          <p style={styles.subtitle}>
            India’s Most Trusted Dropshipping Platform
          </p>

          <p
            style={{
              ...styles.description,
              margin: isMobile ? "0 auto" : "0",
            }}
          >
            Start selling online without inventory, warehouse, or complicated
            setups. We manage everything from product listing to delivery so you
            can scale your business confidently.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              ...styles.buttons,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button
              style={styles.primaryBtn}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.target.style.transform = "translateY(0)")
              }
            >
              Get Started Today
            </button>

            <button style={styles.secondaryBtn}>📞 Call Us</button>
          </div>

          {/* BADGES */}
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

        {/* RIGHT (OPTIONAL VISUAL / KEEP EMPTY FOR VIDEO FOCUS) */}
        {!isMobile && (
          <div />
        )}
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    padding: "clamp(70px, 10vw, 120px) 0",
    overflow: "hidden",
  },

  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -2,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(2,6,23,0.9), rgba(2,6,23,0.65))",
    zIndex: -1,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 clamp(16px, 4vw, 24px)",
    display: "grid",
    alignItems: "center",
    gap: "clamp(32px, 6vw, 60px)",
    color: "#fff",
  },

  title: {
    fontWeight: "900",
    lineHeight: "1.15",
    marginBottom: "14px",
    fontSize: "clamp(32px, 5vw, 52px)",
  },

  subtitle: {
    fontSize: "clamp(14px, 2.5vw, 18px)",
    fontWeight: "600",
    color: "#ff7a18",
    marginBottom: "14px",
  },

  description: {
    fontSize: "clamp(14px, 2.8vw, 16px)",
    lineHeight: "1.7",
    color: "#cbd5e1",
    maxWidth: "520px",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    marginTop: "28px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ff7a18, #ff9a3c)",
    border: "none",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(255,122,24,0.35)",
  },

  secondaryBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "10px",
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
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: "12.5px",
    color: "#e5e7eb",
    whiteSpace: "nowrap",
  },

  check: {
    color: "#22c55e",
    fontSize: "13px",
  },
};
