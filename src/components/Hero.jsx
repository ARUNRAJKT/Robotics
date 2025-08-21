import Button from "../components/Button";
import BgVideo from "../assets/hero-bg.mp4"; // keep your video in assets

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh", // full screen hero
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
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

      {/* Content Overlay */}
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
          background: "rgba(0,0,0,0.3)", // optional dark overlay for contrast
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Robotics
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Innovating the future with AI-driven robotics.
        </p>
        <Button
          label="Learn More"
          onClick={() => alert("Learn More clicked")}
        />
      </div>
    </section>
  );
}

export default Hero;
