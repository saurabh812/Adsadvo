const EcomWebsite = () => {
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
      background: "#ff512f",
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
          <h1 style={styles.title}>E-Commerce Website Course</h1>
          <p style={styles.subtitle}>
            Build, launch, and scale your own e-commerce website from scratch.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🌐 Website Setup</h3>
            <p>Shopify / Custom website setup with domain & hosting.</p>
          </div>
          <div style={styles.card}>
            <h3>🎨 Store Design</h3>
            <p>High-conversion UI/UX design and branding.</p>
          </div>
          <div style={styles.card}>
            <h3>💳 Payment & Checkout</h3>
            <p>Razorpay, COD, UPI & international payment setup.</p>
          </div>
          <div style={styles.card}>
            <h3>🚀 Ads & Scaling</h3>
            <p>Meta Ads, Google Ads & CRO strategies.</p>
          </div>
        </div>

        <div style={styles.cta}>
          <button style={styles.button}>Launch Your Website</button>
        </div>
      </div>
    </section>
  );
};

export default EcomWebsite;
