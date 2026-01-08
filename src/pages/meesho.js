const Meesho = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "120px 20px",
      background: "linear-gradient(180deg, #020c1b, #091b34)",
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
      background: "#64ffda",
      border: "none",
      borderRadius: "8px",
      color: "#000",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Meesho Reselling Course</h1>
          <p style={styles.subtitle}>
            Start reselling on Meesho with zero investment and no inventory.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🧠 Product Selection</h3>
            <p>Choose trending Meesho products that sell daily.</p>
          </div>
          <div style={styles.card}>
            <h3>📱 Order Processing</h3>
            <p>Learn Meesho order flow, returns & customer handling.</p>
          </div>
          <div style={styles.card}>
            <h3>📢 Social Media Marketing</h3>
            <p>WhatsApp, Instagram & Facebook selling strategies.</p>
          </div>
          <div style={styles.card}>
            <h3>💰 Income Scaling</h3>
            <p>Scale from ₹10k to ₹1L+ per month with automation.</p>
          </div>
        </div>

        <div style={styles.cta}>
          <button style={styles.button}>Start Meesho Course</button>
        </div>
      </div>
    </section>
  );
};

export default Meesho;
