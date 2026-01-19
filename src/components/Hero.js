import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import heroVideo from "../assets/hero-bg.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);

    const forcePlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => { });
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
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => { });
          }
        }}
        style={styles.video}
      >
        <source
          src="https://res.cloudinary.com/dnnxal66k/video/upload/q_auto,f_auto/hero-bg_jrzlwc.mp4"
          type="video/mp4"
        />
      </video>

      <div style={styles.overlay} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ ...styles.title, fontSize: isMobile ? "34px" : "64px" }}
          >
            Start Your Online <br />
            <span style={{ color: '#ff7a18' }}>Dropshipping</span> Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={styles.subtitle}
          >
            India’s Most Trusted Dropshipping Platform
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={styles.description}
          >
            Start selling online without inventory, warehouse, or complicated
            setups. We manage everything from product listing to delivery so you
            can scale your business confidently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              ...styles.buttons,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 122, 24, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn}
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              style={styles.secondaryBtn}
            >
              📞 Call Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
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
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (index * 0.1) }}
                style={styles.badge}
              >
                <span style={styles.check}>✔</span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
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
      "linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.7) 100%)",
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
    lineHeight: "1.1",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
  },

  subtitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ff7a18",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#cbd5e1",
    maxWidth: "600px",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ff7a18, #ff9a3c)",
    border: "none",
    color: "#fff",
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: "800",
    fontSize: "16px",
    boxShadow: "0 4px 14px 0 rgba(255, 122, 24, 0.39)",
  },

  secondaryBtn: {
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.2)",
    color: "#fff",
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    backdropFilter: "blur(4px)",
  },

  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "40px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "14px",
    fontWeight: "500",
  },

  check: {
    color: "#22c55e",
  },
};
