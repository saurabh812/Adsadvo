const AmazonIndia = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "120px 20px",
      background: "linear-gradient(180deg, #020c1b, #0a192f)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
    },
    hero: {
      textAlign: "center",
      marginBottom: "80px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "18px",
      opacity: 0.85,
      maxWidth: "800px",
      margin: "auto",
    },
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
    cta: {
      marginTop: "60px",
      textAlign: "center",
    },
    button: {
      background: "#ff7a18",
      border: "none",
      padding: "14px 28px",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Amazon India Dropshipping</h1>
          <p style={styles.subtitle}>
            Start your Amazon India dropshipping business with low investment,
            high-margin products, and expert guidance.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>📦 Product Research</h3>
            <p>
              We help you find high-demand, low-competition products that sell
              consistently in the Indian market.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🛒 Seller Account Setup</h3>
            <p>
              Complete Amazon India seller account creation with GST, brand, and
              compliance support.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🚚 Supplier & Fulfillment</h3>
            <p>
              Verified Indian suppliers with fast shipping and quality control
              to reduce RTO and refunds.
            </p>
          </div>

          <div style={styles.card}>
            <h3>📈 Scaling & Ads</h3>
            <p>
              Amazon ads, listing optimization, and growth strategies to scale
              your revenue month after month.
            </p>
          </div>
        </div>

        <div style={styles.cta}>
          <button style={styles.button}>Start Amazon India Business</button>
        </div>
      </div>
    </section>
  );
};

export default AmazonIndia;
