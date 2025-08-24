import React from "react";
import Robot1 from "../assets/about/robot1.svg";
import Robot2 from "../assets/about/robot2.svg";
import Robot3 from "../assets/about/robot3.svg";
import Robot4 from "../assets/about/robot4.svg";
import Robot5 from "../assets/about/robot5.svg";

function About() {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>WHO WE ARE</h2>
        <p style={styles.subText}>
          Empowering businesses in the UAE and beyond with intelligent service & industrial robots designed for the future.
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.description}>
          <p>
            At Fortune Robotics, we’re redefining automation across hospitality, healthcare, logistics, and corporate industries. Headquartered in Dubai, our solutions combine global innovation with local support — offering both purchase and rental options tailored to business needs.
            <br />
            To revolutionize service and industrial sectors by making advanced robotics accessible, adaptable, and efficient — empowering businesses to thrive in the age of automation.
            <br />
            To become the Middle East’s most trusted robotics partner by leading in innovation, research, and customer-focused solutions.
          </p>
        </div>

        <div style={styles.imageGrid}>
          <img src={Robot1} alt="Robot1" style={styles.robot1} />
          <img src={Robot2} alt="Robot2" style={styles.robot2} />

          <div style={styles.bottomGrid}>
            <div style={styles.sideGrid}>
              <img src={Robot3} alt="Robot3" style={styles.image} />
              <img src={Robot4} alt="Robot4" style={styles.image} />
            </div>
            <img src={Robot5} alt="Robot5" style={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

const styles = {
  container: {
    padding: "10px 161px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "2rem",
  },
  header: {
    width: "548px",
    textAlign: "center",
  },
  heading: {
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "100%",
    textTransform: "uppercase",
    color: "#1F1F1F",
    marginBottom: "1px",
    fontFamily: "'Red Rose', sans-serif",
  },
  subText: {
    fontFamily: "'Red Rose', sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "100%",
    color: "#1F1F1F",
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
  },
  description: {
    flex: 1,
    fontFamily: "'Red Rose', sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "32px",
    textAlign: "justify",
    color: "#1F1F1F",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    maxWidth: "700px",
    maxHeight: "700px",
    flex: 1,
  },
  robot1: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
  },
  robot2: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "10px",
    gridColumn: "1 / 3",
    gridRow: "2 / 3",
  },
  sideGrid: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
