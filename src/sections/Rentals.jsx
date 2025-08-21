import React from "react";
import Card from "../components/Card";
import Robot1 from "../assets/about/robot1.svg";
import Robot2 from "../assets/about/robot2.svg";
import Robot3 from "../assets/about/robot3.svg";
import Robot5 from "../assets/about/robot5.svg";

export default function Rentals() {
  const robots = [
    {
      title: "D2 Delivery Robot",
      description:
        "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a...",
      image: Robot5,
      tags: ["RESTAURANTS", "MALLS", "HOSPITALS"],
      price: "4200 AED",
    },
    {
      title: "Temi Robot",
      description:
        "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing...",
      image: Robot3,
      tags: ["HEALTHCARE", "OFFICES", "RETAIL SHOWROOMS"],
      price: "4200 AED",
    },
    {
      title: "Alice Pro",
      description:
        "Equipped with state-of-the-art navigation technology, this drone ensures timely delivery in congested areas, enhancing...",
      image: Robot2,
      tags: ["CORPORATE RECEPTIONS", "EVENTS", "EXHIBITIONS"],
      price: "4200 AED",
    },
  ];

  return (
    <section
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop:'8vh'
      }}
    >
      <div
        style={{
          display: "flex",    
          marginBottom: "2rem",
          border: "1px solid #007CFF",
          padding: "4px",
       
        }}
      >
        <button
          style={{
            width: "125px",
            height: "40px",
            padding: "10px",
            background: "#007CFF",
            fontFamily: "Red Rose, sans-serif",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "16px",
            lineHeight: "100%",
            textAlign: "center",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "0px",
            cursor: "pointer",
          }}
        >
          Our Products
        </button>
        <button
          style={{
         
            height: "40px",
            padding: "10px",
            background: "transparent",
            fontFamily: "Red Rose, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "100%",
            textAlign: "center",
            color: "#007CFF",
            borderRadius: "4px",
            cursor: "pointer",
        
          }}
        >
          Request a Quote
        </button>
      </div>


      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {robots.map((robot, idx) => (
          <Card
            key={idx}
            title={robot.title}
            description={robot.description}
            image={robot.image}
            tags={robot.tags}
            price={robot.price}
          />
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #007CFF",
            background: "transparent",
            color: "#007CFF",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>
    </section>
  );
}
