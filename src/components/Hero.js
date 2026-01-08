import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/hero-bg.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);

    // FORCE PLAY ON USER INTERACTION (MOBILE FIX)
    const forcePlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
      document.removeEventListener("touchstart", forcePlay);
      document.removeEventListener("scroll", forcePlay);
    };

    document.addEventListener("touchstart", forcePlay);
    document.addEventListener("scroll", forcePlay);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("touchstart", forcePlay);
      document.removeEventListener("scroll", forcePlay);
    };
  }, []);

  return (
    <section style={styles.hero}>
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={styles.video}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div style={styles.overlay} />

      {/* CONTENT */}
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div>
          <h1 style={{ ...styles.title, fontSize: isMobile ? "34px" : "52px" }}>
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

          <div
            style={{
              ...styles.buttons,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button style={styles.primaryBtn}>Get Started Today</button>
            <button style={styles.secondaryBtn}>📞 Call Us</button>
          </div>

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
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
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
      "linear-gradient(to right, rgba(2,6,23,0.85), rgba(2,6,23,0.6))",
    zIndex: -1,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gap: "40px",
    color: "#fff",
  },

  title: {
    fontWeight: "900",
    lineHeight: "1.15",
    marginBottom: "16px",
  },

  subtitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ff7a18",
    marginBottom: "18px",
  },

  description: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#cbd5e1",
    maxWidth: "520px",
    marginBottom: "28px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ff7a18, #ff9a3c)",
    border: "none",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: "10px",
    fontWeight: "700",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.4)",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: "10px",
  },

  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "26px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    fontSize: "13px",
  },

  check: {
    color: "#22c55e",
  },
};
