import React from "react";
import dnaImage from "../assets/newsletter/background.svg";
import heroImage from "../assets/newsletter/person.svg";

function Newsletter() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.heading}>
            JOIN 5,000+ ROBOTICS PROFESSIONALS. <br />
            GET TRENDS, NEWS & OFFERS.
          </h2>

          <div style={styles.formWrapper}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button style={styles.button}>SUBSCRIBE</button>
          </div>
        </div>

        <img src={dnaImage} alt="DNA Background" style={styles.dnaImage} />
      </div>

      <img src={heroImage} alt="Hero" style={styles.heroImage} />
    </section>
  );
}

export default Newsletter;

const styles = {
  section: {
    position: "relative",
    marginTop: "8rem",
  },
  container: {
    background: "linear-gradient(90deg, #45637B 0%, #212737 100%)",
    padding: "3rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    borderRadius: "0px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
  },
  content: {
    maxWidth: "800px",
    textAlign: "center",

  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    lineHeight: "1.4",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    alignItems: "center",
    marginTop: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    maxWidth: "350px",
  },
  button: {
    padding: "0.75rem 1.5rem",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    maxWidth: "350px",
  },
  dnaImage: {
    position: "absolute",
    right: "-6%",
    top: "50%",
    transform: "translateY(-50%)",
    filter: "brightness(0)",
    height: "auto",
    zIndex: 0,
    opacity: 0.6,
  },
  heroImage: {
    position: "absolute",
    right: "5%",
    top: "-170px",
    width: "320px",
    height: "auto",
    zIndex: 2,
  },
};
