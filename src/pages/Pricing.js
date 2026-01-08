const Pricing = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "120px 20px",
      background: "linear-gradient(135deg, #0a192f, #020c1b)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
    },
    title: {
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      opacity: 0.8,
      marginBottom: "70px",
      fontSize: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
    },
    card: {
      background: "#112240",
      padding: "40px",
      borderRadius: "18px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
      textAlign: "left",
    },
    highlight: {
      background: "linear-gradient(135deg, #ff512f, #dd2476)",
    },
    price: {
      fontSize: "36px",
      fontWeight: "700",
      margin: "20px 0",
    },
    button: {
      marginTop: "30px",
      padding: "14px",
      width: "100%",
      borderRadius: "10px",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      background: "#64ffda",
      color: "#000",
    },
  };

  const plans = [
    {
      name: "Starter",
      price: "₹0",
      desc: "For individuals & beginners",
      features: ["Basic Analytics", "Email Support", "Limited Campaigns"],
    },
    {
      name: "Growth",
      price: "₹4,999 / mo",
      desc: "For scaling businesses",
      highlight: true,
      features: [
        "Advanced Analytics",
        "Unlimited Campaigns",
        "Priority Support",
        "Conversion Tracking",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large brands",
      features: [
        "Dedicated Manager",
        "Custom Strategy",
        "Unlimited Everything",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Pricing Plans</h1>
        <p style={styles.subtitle}>
          Transparent pricing built for every stage of growth
        </p>

        <div style={styles.grid}>
          {plans.map((p, i) => (
            <div
              key={i}
              style={{ ...styles.card, ...(p.highlight ? styles.highlight : {}) }}
            >
              <h2>{p.name}</h2>
              <p>{p.desc}</p>
              <div style={styles.price}>{p.price}</div>
              <ul>
                {p.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button style={styles.button}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
