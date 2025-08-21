import Card from "../components/Card";

function Rentals() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Robot Rentals</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Card title="AI Robot" description="Perfect for events." image="https://via.placeholder.com/200" />
        <Card title="Service Robot" description="Great for businesses." image="https://via.placeholder.com/200" />
        <Card title="Humanoid Robot" description="Engages with people." image="https://via.placeholder.com/200" />
      </div>
    </section>
  );
}

export default Rentals;
