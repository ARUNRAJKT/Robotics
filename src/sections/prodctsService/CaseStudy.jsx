import React from "react";
import handImage from "../../assets/casestudy/hand.svg";

export default function CaseStudy() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "350px",
        background: "linear-gradient(90deg, #006C80 0%, #00CEDB 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem 4rem",
        color: "#fff",
      }}
    >

      <div style={{ maxWidth: "600px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          OUR CASE STUDIES
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1rem" }}>
          Explore how our robotics solutions have transformed industries —
          delivering efficiency, innovation, and measurable success.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1rem" }}>
          At Fortune Robotics, every project is a story of innovation meeting
          impact. From hospitality and retail to events and education, our robots
          have been deployed to solve real challenges, enhance customer
          experience, and drive business growth.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          Discover the industries we’ve transformed and the results we’ve
          delivered.
        </p>
        <button
          style={{
            background: "#fff",
            color: "#007C8A",
            fontWeight: "bold",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Explore Case Studies
        </button>
      </div>

      <div style={{ flexShrink: 0 }}>
        <img
          src={handImage}
          alt="Robotic Hand"
          style={{ maxHeight: "280px", objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
