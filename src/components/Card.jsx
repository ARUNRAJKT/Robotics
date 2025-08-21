import React from "react";

export default function Card({ title, description, image, tags, price }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "0px",
        width: "300px",
        overflow: "hidden",
         boxShadow: "0px 4px 10px 0px #0000001A",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ position: "relative" }}>
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            bottom:"14px",
            left: "8px",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#007CFF",
                color: "#fff",
                padding: "4px 8px",
                fontSize: "0.7rem",
                fontWeight: "500",
                borderRadius: "0px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: "0 0 0 0", fontSize: "1rem", fontWeight: 500, color: "#000" }}>{title}</h3>
        <p style={{ flex: 1, fontSize: "0.85rem", color: "#555", marginBottom: "0.5rem" }}>
          {description}
        </p>

        <div style={{ fontSize: "0.8rem", marginBottom: "0.5rem", color: "#555" }}>
          <strong>Key Highlights:</strong>
          <ul style={{ paddingLeft: "1.2rem", margin: "0.3rem 0 0 0", listStyle: "none" }}>
            <li><span style={{ color: "#007CFF", marginRight: "0.5rem", width: "7px" }}>•</span>Reliable navigation</li>
            <li><span style={{ color: "#007CFF", marginRight: "0.5rem" , width: "7px"}}>•</span>Easy branding</li>
            <li><span style={{ color: "#007CFF", marginRight: "0.5rem", width: "7px" }}>•</span>High demand across UAE</li>
          </ul>


        </div>

        <button
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#007CFF",
            color: "#fff",
            border: "none",
            borderRadius: "0px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {price} | Buy Now
        </button>
      </div>
    </div>
  );
}
