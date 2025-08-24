import React from "react";
import Button from "../../components/Button";
import BgVideo from "../../assets/product-service.mp4";

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



    </section>
  );
}

export default Hero;
