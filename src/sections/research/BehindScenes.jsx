import React from "react";
import img from "../../assets/logo.svg"
export default function BehindScenes() {
  const stages = [
    {
      image: img,
      title: "Concept & Design Stage",
      description:
        "Quick insight into how concepts evolve into initial working prototypes.",
      tags: ["Engineer Sketching Circuits", "Assembling Robotic Arms", "Initiating Sensors"],
    },
    {
      image: img, 
      title: "Testing & Evaluation Stage",
      description:
        "Assessing functionality & performance before final production iterations.",
      tags: ["Conducting User Trials", "Gathering Feedback", "Refining Features"],
    },
    {
      image: img, 
      title: "Production & Launch Stage",
      description:
        "Final development and prepping for market introduction.",
      tags: ["Main Structuring Components", "Quality Assurance Checks", "Initiating Strategies"],
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Behind the Scenes at Fortune Robotics</h2>
      <p style={styles.subHeading}>
        Where ideas transform into intelligent machines.
      </p>

      <div style={styles.cardWrapper}>
        {stages.map((stage, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={stage.image} alt={stage.title} style={styles.image} />
              <div style={styles.overlay}>
                <div style={styles.playButton}>▶</div>
                <div style={styles.tags}>
                  {stage.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={styles.content}>
              <h3 style={styles.title}>{stage.title}</h3>
              <p style={styles.description}>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  subHeading: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  cardWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "220px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: "0",
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px",
    justifyContent: "flex-start",
  },
  playButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
  },
  tags: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  content: {
    padding: "16px",
    textAlign: "left",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
  },
};
