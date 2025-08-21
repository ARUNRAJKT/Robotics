function Newsletter() {
  return (
    <section style={{ padding: "2rem", textAlign: "center", background: "#eee" }}>
      <h2>Join 5,000+ Robotics Professionals</h2>
      <p>Get trends, news, and offers.</p>
      <input type="email" placeholder="Enter your email" style={{ padding: "0.5rem", marginRight: "0.5rem" }} />
      <button style={{ padding: "0.5rem 1rem", background: "#007BFF", color: "#fff", border: "none" }}>
        Subscribe
      </button>
    </section>
  );
}

export default Newsletter;
