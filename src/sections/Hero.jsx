import React from "react";
import Button from "../components/Button";
import BgVideo from "../assets/hero-bg.mp4";

function Hero() {
  return (
    <section style={styles.heroSection}>
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}>
        <h1 style={styles.heading}>
          Shaping the Future with Intelligent Machines
        </h1>
        <p style={styles.subText}>
          Innovative service & industrial robots for delivery, assistance, and automation.
        </p>

        <div style={styles.buttonGroup}>
          <Button
            label="Request a Quote"
            primary={true}
            onClick={() => alert("Request a Quote clicked")}
          />
          <Button
            label="Buy Now"
            primary={false}
            onClick={() => alert("Learn More clicked")}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

const styles = {
  heroSection: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  overlay: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "#fff",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.3)",
    padding: "0 20px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontFamily: "Red Rose",
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    maxWidth: "700px",
    fontFamily: "Red Rose",
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
