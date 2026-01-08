const Flipkart = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "120px 20px",
      background: "linear-gradient(180deg, #020c1b, #0a192f)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: { maxWidth: "1200px", margin: "auto" },
    hero: { textAlign: "center", marginBottom: "80px" },
    title: { fontSize: "48px", fontWeight: 700 },
    subtitle: { opacity: 0.85, marginTop: "16px", fontSize: "18px" },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
    },
    card: {
      background: "#112240",
      padding: "32px",
      borderRadius: "16px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    },
    cta: { textAlign: "center", marginTop: "60px" },
    button: {
      padding: "14px 28px",
      background: "#ff7a18",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Flipkart Dropshipping Course</h1>
          <p style={styles.subtitle}>
            Learn how to start and scale a profitable Flipkart business with
            step-by-step guidance.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>📦 Product Research</h3>
            <p>Find high-demand Flipkart products with low competition.</p>
          </div>
          <div style={styles.card}>
            <h3>🛒 Seller Account Setup</h3>
            <p>Flipkart seller registration, GST, brand & compliance support.</p>
          </div>
          <div style={styles.card}>
            <h3>🚚 Supplier & Fulfillment</h3>
            <p>Trusted suppliers with fast shipping and low RTO.</p>
          </div>
          <div style={styles.card}>
            <h3>📈 Growth & Scaling</h3>
            <p>Listing optimization and Flipkart Ads strategies.</p>
          </div>
        </div>

        <div style={styles.cta}>
          <button style={styles.button}>Enroll in Flipkart Course</button>
        </div>
      </div>
    </section>
  );
};

export default Flipkart;
