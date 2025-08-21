import React from "react";
import Button from "../components/Button";
import BgVideo from "../assets/hero-bg.mp4";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#fff",
          textAlign: "center",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Shaping the Future with Intelligent Machines
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Innovative service & industrial robots for delivery, assistance, and automation.        </p>

        <div style={{ display: "flex", gap: "16px" }}>
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
