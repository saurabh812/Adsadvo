const Contact = () => {
  const styles = {
    page: {
      padding: "120px 20px",
      background: "linear-gradient(135deg, #020c1b, #0a192f)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      maxWidth: "600px",
      margin: "auto",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "none",
      fontSize: "16px",
    },
    button: {
      padding: "14px",
      width: "100%",
      borderRadius: "10px",
      border: "none",
      fontWeight: "700",
      cursor: "pointer",
      background: "#64ffda",
    },
  };

  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1>Contact Us</h1>
        <p>Let’s build something amazing together</p>

        <form>
          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Your Email" />
          <textarea
            style={{ ...styles.input, height: "120px" }}
            placeholder="Your Message"
          />
          <button style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
