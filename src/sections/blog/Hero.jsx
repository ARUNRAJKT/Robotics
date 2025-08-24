import React from "react";
import BackgroundImage from "../../assets/blog/herobackground.svg";

export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          color: "#555",
          marginBottom: "0.5rem",
        }}
      >
        Blog ✦
      </p>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        News and insights
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 2rem",
          fontSize: "1rem",
          color: "#666",
          lineHeight: "1.6",
        }}
      >
        Learn about cryptocurrency, NFTs, and blockchain, discover our latest
        product updates, partnership announcements, user stories, and more.
      </p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1.5rem",
          background: "#fff",
          padding: "0.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <button
          style={{
            background: "#006CFF",
            color: "#fff",
            fontWeight: "bold",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          View all
        </button>

        {[
          "Industry Trends",
          "Robotics in Action",
          "Event Highlights",
          "Technology Insights",
          "Company News",
        ].map((tab, i) => (
          <button
            key={i}
            style={{
              background: "transparent",
              border: "none",
              color: "#000",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
}
