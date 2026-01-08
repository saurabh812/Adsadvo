const Blog = () => {
  const styles = {
    page: {
      padding: "120px 20px",
      background: "#020c1b",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "auto",
    },
    card: {
      background: "#112240",
      padding: "30px",
      borderRadius: "16px",
    },
  };

  const posts = [
    { title: "Scaling Brands with Performance Marketing", desc: "How data drives growth." },
    { title: "Google Ads vs Meta Ads", desc: "Which gives better ROI?" },
    { title: "Top Marketing Mistakes", desc: "Avoid these costly errors." },
  ];

  return (
    <section style={styles.page}>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
        Our Blog
      </h1>

      <div style={styles.grid}>
        {posts.map((p, i) => (
          <div key={i} style={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <button style={{ marginTop: "15px" }}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
