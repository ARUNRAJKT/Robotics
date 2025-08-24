import React from "react";

export default function Card({ title, description, image, tags, price, isQuoteMode, isRentalMode }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        {image && <img src={image} alt={title} style={styles.image} />}
        <div style={styles.tagsWrapper}>
          {tags?.map((tag, idx) => (
            <span key={idx} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>

        <div style={styles.highlights}>
          <strong>Key Highlights:</strong>
          <ul style={styles.highlightList}>
            <li><span style={styles.bullet}>•</span>Reliable navigation</li>
            <li><span style={styles.bullet}>•</span>Easy branding</li>
            <li><span style={styles.bullet}>•</span>High demand across UAE</li>
          </ul>
        </div>

        <button style={styles.buyButton}>
          {isRentalMode ? "Rent Now" : isQuoteMode ? "Request a Quote" : `${price} | Buy Now`}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "0px",
    width: "300px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px 0px #0000001A",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  tagsWrapper: {
    position: "absolute",
    bottom: "14px",
    left: "8px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#007CFF",
    color: "#fff",
    padding: "4px 8px",
    fontSize: "0.7rem",
    fontWeight: "500",
    borderRadius: "0px",
  },
  content: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "0",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#000",
  },
  description: {
    flex: 1,
    fontSize: "0.85rem",
    color: "#555",
    marginBottom: "0.5rem",
  },
  highlights: {
    fontSize: "0.8rem",
    marginBottom: "0.5rem",
    color: "#555",
  },
  highlightList: {
    paddingLeft: "1.2rem",
    margin: "0.3rem 0 0 0",
    listStyle: "none",
  },
  bullet: {
    color: "#007CFF",
    marginRight: "0.5rem",
  },
  buyButton: {
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "#007CFF",
    color: "#fff",
    border: "none",
    borderRadius: "0px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
