const About = () => {
  const styles = {
    page: {
      padding: "120px 20px",
      background: "#020c1b",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      maxWidth: "1000px",
      margin: "auto",
    },
    title: {
      fontSize: "46px",
      marginBottom: "20px",
      textAlign: "center",
    },
    section: {
      marginTop: "60px",
    },
    text: {
      lineHeight: 1.8,
      opacity: 0.85,
      fontSize: "18px",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>About AdsAdvo</h1>

        <div style={styles.section}>
          <p style={styles.text}>
            AdsAdvo is a performance-driven digital advertising agency helping
            brands scale through data-backed marketing strategies. We focus on
            results, transparency, and long-term growth.
          </p>
        </div>

        <div style={styles.section}>
          <h2>Our Mission</h2>
          <p style={styles.text}>
            To empower businesses with measurable, scalable, and ROI-focused
            advertising solutions across digital platforms.
          </p>
        </div>

        <div style={styles.section}>
          <h2>Why Choose AdsAdvo?</h2>
          <ul style={styles.text}>
            <li>✔ Performance-first campaigns</li>
            <li>✔ Honest reporting & analytics</li>
            <li>✔ Experienced ad strategists</li>
            <li>✔ Growth-oriented mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
