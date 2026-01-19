import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const WhyTrust = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ MEMOIZED STATS (fixes ESLint warning)
  const stats = useMemo(
    () => [
      { icon: "📈", max: 100, suffix: "%", title: "Profit Margin", desc: "High-margin winning products" },
      { icon: "👥", max: 10000, suffix: "+", title: "Active Resellers", desc: "10K+ thriving sellers nationwide" },
      { icon: "🛍️", max: 500000, suffix: "+", title: "Orders Delivered", desc: "5L+ successful deliveries" },
      { icon: "🚚", max: 100, suffix: "%", title: "Free Shipping", desc: "Zero delivery cost across India" },
      { icon: "🛡️", max: 0, suffix: "", title: "Hidden Fees", desc: "100% transparent pricing" },
    ],
    []
  );

  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!sectionRef.current || animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);

          stats.forEach((stat, i) => {
            let value = 0;
            const increment = stat.max / 80;

            const timer = setInterval(() => {
              value += increment;
              setCount((prev) => {
                const copy = [...prev];
                copy[i] = Math.min(Math.floor(value), stat.max);
                return copy;
              });

              if (value >= stat.max) clearInterval(timer);
            }, 25);
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated, stats]); // ✅ stats added → warning gone

  const format = (v, suf) => {
    if (v >= 100000) return `${(v / 100000).toFixed(0)}L${suf}`;
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K${suf}`;
    return `${v}${suf}`;
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          Why Sellers <span style={styles.highlight}>Trust Adsadvo</span>
        </motion.h2>

        <p style={styles.subtitle}>
          We remove the complexity of dropshipping so you focus on growth,
          customers, and profits.
        </p>

        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div style={styles.icon}>{s.icon}</div>
              <div style={styles.value}>{format(count[i], s.suffix)}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "5rem 2rem",
    background: "#fffaf6",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.6rem",
    fontWeight: 900,
    marginBottom: "1rem",
    color: "#1a1a1a",
  },
  highlight: {
    color: "#ff6b35",
  },
  subtitle: {
    maxWidth: "780px",
    margin: "0 auto 3.5rem",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#555",
  },
  grid: {
    display: "grid",
    gap: "2rem",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "2rem 1.6rem",
    textAlign: "center",
    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
    border: "1px solid rgba(255,107,53,0.25)",
  },
  icon: {
    fontSize: "2.6rem",
    marginBottom: "1rem",
  },
  value: {
    fontSize: "2.4rem",
    fontWeight: 900,
    color: "#ff6b35",
    marginBottom: "0.4rem",
  },
  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 700,
    marginBottom: "0.3rem",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#666",
    lineHeight: 1.6,
  },
};
