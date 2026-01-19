import React, { useState } from "react";

export default function LatestStory() {
  const [index, setIndex] = useState(0);

  const stories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
      title:
        "Is Dropshipping Business Legal in India? GST, Tax & Compliance Guide",
      description:
        "Everything you need to know about legality, GST registration, and compliance before starting dropshipping in India.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      title:
        "Fastest-Growing Ecommerce Business Opportunities in India",
      description:
        "Explore high-growth ecommerce models, trends, and strategies that are working in 2024.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      title:
        "Done-For-You (DFY) Dropshipping Store Setup in India",
      description:
        "Launch your ecommerce business without technical hassle using DFY dropshipping solutions.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
      title:
        "Best Ecommerce Business Models to Start in India",
      description:
        "Compare popular ecommerce models and choose the one that fits your budget and goals.",
    },
  ];

  const cardsPerView =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const next = () => {
    if (index < stories.length - cardsPerView) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Latest Story</h2>
        <p style={styles.subtitle}>
          Discover insights, strategies, and success stories from the
          Adsadvo community.
        </p>

        <div style={styles.carousel}>
          {index > 0 && (
            <button style={{ ...styles.arrow, left: "-20px" }} onClick={prev}>
              ‹
            </button>
          )}

          <div style={styles.viewport}>
            <div
              style={{
                ...styles.track,
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              }}
            >
              {stories.map((story) => (
                <div
                  key={story.id}
                  style={{
                    ...styles.card,
                    minWidth: `${100 / cardsPerView}%`,
                  }}
                >
                  <div style={styles.cardInner}>
                    <img
                      src={story.image}
                      alt={story.title}
                      style={styles.image}
                    />
                    <div style={styles.cardBody}>
                      <h3 style={styles.cardTitle}>{story.title}</h3>
                      <p style={styles.cardText}>{story.description}</p>
                      <button style={styles.button}>Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {index < stories.length - cardsPerView && (
            <button style={{ ...styles.arrow, right: "-20px" }} onClick={next}>
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "80px 20px",
    background: "#fff6ef",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  subtitle: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#555",
  },
  carousel: {
    position: "relative",
    marginTop: "50px",
  },
  viewport: {
    overflow: "hidden",
    width: "100%",
  },
  track: {
    display: "flex",
    transition: "transform 0.5s ease",
  },
  card: {
    padding: "0 12px",
    boxSizing: "border-box",
  },
  cardInner: {
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  cardText: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.6",
    flexGrow: 1,
  },
  button: {
    background: "#ff6b35",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    width: "fit-content",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "1px solid #ddd",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};
