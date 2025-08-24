import React from "react";
import Card from "../components/Card";
import Robot5 from "../assets/about/robot5.svg";
import Robot6 from "../assets/product/robot6.svg";
import Robot7 from "../assets/product/robot7.svg";

export default function Services() {
  const cardData = [
    {
      title: "YOUIBOT L-Series (AMR)",
      description:
        "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
      image: Robot6,
      tags: ["WAREHOUSES", "FACTORIES", "LOGISTICS HUBS"],
      price: "Rent Now",
    },
    {
      title: "Amy Deliverer",
      description:
        "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing l",
      image: Robot7,
      tags: ["CAFES", "CLINICS", "CO-WORKING SPACES"],
      price: "Rent Now",
    },
    {
      title: "D2 Delivery Robot",
      description:
        "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
      image: Robot5,
      tags: ["RESTAURANTS", "MALLS", "HOSPITALS"],
      price: "Rent Now",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        FLEXIBLE ROBOT RENTALS FOR EVENTS, BUSINESSES & MORE
      </h2>
      <p style={styles.subText}>
        From smart assistants to delivery bots, Fortune Robotics offers UAE-wide
        rental services with local support and setup.
      </p>

      <div style={styles.cardsWrapper}>
        {cardData.map((card, idx) => (
          <Card key={idx} {...card} isRentalMode={true} />
        ))}
      </div>

      <div style={styles.viewAllWrapper}>
        <button style={styles.viewAllButton}>View All</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "3rem 2rem",
    width: "996px",
    margin: "auto",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: "0.5rem",
  },
  subText: {
    maxWidth: "700px",
    margin: "0 auto 2rem",
    color: "#555",
    textAlign: "center",
    fontSize: "0.95rem",
  },
  cardsWrapper: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  viewAllWrapper: {
    textAlign: "center",
    marginTop: "2rem",
  },
  viewAllButton: {
    padding: "0.6rem 1.5rem",
    border: "2px solid #007CFF",
    backgroundColor: "#fff",
    color: "#007CFF",
    borderRadius: "0px",
    fontWeight: "500",
    cursor: "pointer",
  },
};
