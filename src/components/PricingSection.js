import React, { useRef, useEffect } from "react";

const PricingSection = ({ title, highlight }) => {
  const sliderRef = useRef(null);
  const cardRefs = useRef({});

  /* ================= PRICING DATA ================= */
  const pricing = [
    {
      id: "csv",
      name: "CSV Product Package",
      price: "₹699",
      features: [
        "Ready-to-use CSV file",
        "Trending product list",
        "Easy upload on seller panels / websites",
      ],
    },
    {
      id: "amazon",
      name: "Amazon Starter Package",
      price: "₹4,999",
      features: [
        "Amazon seller account creation",
        "Product listing",
        "2 months free ads support",
        "Basic onboarding guidance",
      ],
    },
    {
      id: "flipkart",
      name: "Flipkart Starter Package",
      price: "₹4,999",
      features: [
        "Flipkart seller account creation",
        "Product listing",
        "Catalog & pricing setup",
        "Basic onboarding guidance",
      ],
    },
    {
      id: "website",
      name: "E-commerce Website Package",
      price: "₹35,000",
      features: [
        "Shopify website setup",
        "1-year domain",
        "2 months free ads management",
        "₹3,000 ads credit",
        "4 bill pay integrations",
        "80 product listings per month",
        "Complete website handover",
      ],
    },
    {
      id: "combo",
      name: "Amazon + Website Combo",
      price: "₹37,000",
      features: [
        "Amazon seller account setup",
        "Amazon product listing",
        "Shopify website setup",
        "Combined Amazon + Website support",
        "Best value combo package",
      ],
    },
    {
      id: "branding",
      name: "WHITE LABEL Branding Solution",
      price: "₹1,50,000",
      features: [
        "Complete white labeling solution",
        "Your own brand name & identity",
        "Logo & brand guidelines",
        "Ready-to-sell branded setup",
        "Backend operations handled by us",
        "You focus only on sales & scaling",
      ],
    },
  ];

  /* ================= AUTO CENTER HIGHLIGHT ================= */
  useEffect(() => {
    if (highlight && cardRefs.current[highlight]) {
      const card = cardRefs.current[highlight];
      const slider = sliderRef.current;

      const offset =
        card.offsetLeft -
        slider.offsetWidth / 2 +
        card.offsetWidth / 2;

      slider.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [highlight]);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section style={styles.section}>
      {/* ================= HEADER ================= */}
      <div style={styles.header}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.nav}>
          <button onClick={() => scroll("left")} style={styles.navBtn}>←</button>
          <button onClick={() => scroll("right")} style={styles.navBtn}>→</button>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div style={styles.sliderWrapper}>
        <div ref={sliderRef} style={styles.slider}>
          {pricing.map((p) => {
            const isPopular = p.id === highlight;

            return (
              <div
                key={p.id}
                ref={(el) => (cardRefs.current[p.id] = el)}
                style={{
                  ...styles.card,
                  ...(isPopular && styles.popularCard),
                }}
              >
                {isPopular && <div style={styles.badge}>Most Popular</div>}

                <h3>{p.name}</h3>
                <p style={styles.price}>{p.price}</p>

                <ul style={styles.list}>
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <button style={styles.button}>Get Started</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "80px 20px",
    maxWidth: "1300px",
    margin: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "42px",
    fontWeight: 900,
  },

  nav: {
    display: "flex",
    gap: "12px",
  },

  navBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    background: "#0f172a",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },

  sliderWrapper: {
    overflow: "hidden",
  },

  slider: {
    display: "flex",
    gap: "30px",
    overflowX: "auto",
    padding: "20px 40px",
    scrollBehavior: "smooth",
  },

  card: {
    minWidth: "280px",
    maxWidth: "280px",
    background: "#fff",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    flexShrink: 0,
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },

  popularCard: {
    border: "2px solid #ff9900",
    transform: "scale(1.06)",
  },

  badge: {
    position: "absolute",
    top: "-14px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ff9900",
    padding: "6px 18px",
    borderRadius: "20px",
    fontWeight: 800,
    fontSize: "13px",
  },

  price: {
    fontSize: "28px",
    fontWeight: 900,
    margin: "15px 0",
  },

  list: {
    paddingLeft: "18px",
    marginBottom: "25px",
  },

  button: {
    marginTop: "auto",
    padding: "14px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    background: "#0f172a",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
};
