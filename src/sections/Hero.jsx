import Button from "../components/Button";

function Hero() {
  return (
    <section style={{ padding: "2rem", textAlign: "center", background: "#f0f0f0" }}>
      <h1>Welcome to Robotics</h1>
      <p>Innovating the future with AI-driven robotics.</p>
      <Button label="Learn More" onClick={() => alert("Learn More clicked")} />
    </section>
  );
}

export default Hero;
