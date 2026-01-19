const AmazonInternational = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "120px 20px",
      background: "linear-gradient(180deg, #020c1b, #091b34)",
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
      maxWidth: "850px",
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
      background: "#64ffda",
      border: "none",
      padding: "14px 28px",
      borderRadius: "8px",
      color: "#000",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Amazon International Dropshipping</h1>
          <p style={styles.subtitle}>
            Sell globally on Amazon USA, UK, UAE & Europe with international
            logistics, payment handling, and brand scaling support.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🌍 Global Market Research</h3>
            <p>
              Identify winning international products tailored for USA, UK, and
              European audiences.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🏢 International Seller Setup</h3>
            <p>
              Amazon Global seller account creation, tax guidance, and document
              verification.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🚀 FBA & FBM Strategy</h3>
            <p>
              Choose between Amazon FBA or FBM models with optimized fulfillment
              and profit planning.
            </p>
          </div>

          <div style={styles.card}>
            <h3>📊 Ads & Brand Scaling</h3>
            <p>
              Advanced PPC strategies and brand positioning to scale globally
              with long-term stability.
            </p>
          </div>
        </div>

        <div style={styles.cta}>
          <button style={styles.button}>
            Start Amazon International Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmazonInternational;
