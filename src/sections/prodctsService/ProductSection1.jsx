import React, { useState } from "react";
import Card from "../../components/Card";
import Robot1 from "../../assets/about/robot1.svg";
import Robot2 from "../../assets/about/robot2.svg";
import Robot3 from "../../assets/about/robot3.svg";
import Robot5 from "../../assets/about/robot5.svg";

export default function ProductSection1() {
  const [activeTab, setActiveTab] = useState("products");

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
    <section style={styles.section}>
      <div style={styles.headerContainer}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "products" ? styles.activeTab : styles.inactiveTab),
          }}
          onClick={() => setActiveTab("products")}
        >
          Our Products
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "quote" ? styles.activeTab : styles.inactiveTab),
          }}
          onClick={() => setActiveTab("quote")}
        >
          Request a Quote
        </button>
      </div>

      <div style={styles.cardsWrapper}>
        {robots.map((robot, idx) => (
          <Card
            key={idx}
            title={robot.title}
            description={robot.description}
            image={robot.image}
            tags={robot.tags}
            price={robot.price}
            isQuoteMode={activeTab === "quote"}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: "8vh",
  },
  headerContainer: {
    display: "flex",
    marginBottom: "2rem",
    border: "1px solid #007CFF",
    padding: "4px",
    borderRadius: "0px",
  },
  tabButton: {
    width: "150px",
    height: "40px",
    padding: "10px",
    fontFamily: "Red Rose, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "100%",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
    borderRadius: "0px",
    transition: "all 0.3s ease",
  },
  activeTab: {
    background: "#007CFF",
    color: "#fff",
  },
  inactiveTab: {
    background: "transparent",
    color: "#007CFF",
  },
  cardsWrapper: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  viewAllWrapper: {
    marginTop: "2rem",
  },
  viewAllButton: {
    padding: "0.5rem 1rem",
    border: "1px solid #007CFF",
    background: "transparent",
    color: "#007CFF",
    borderRadius: "0px",
    cursor: "pointer",
    fontFamily: "Red Rose, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "100%",
    textAlign: "center",
  },
};
