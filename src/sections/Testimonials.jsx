import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>What Our Clients Say</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <TestimonialCard name="John Doe" feedback="Amazing service and robots!" />
        <TestimonialCard name="Jane Smith" feedback="Our event was a huge success." />
        <TestimonialCard name="Alex Johnson" feedback="Very professional and reliable." />
      </div>
    </section>
  );
}

export default Testimonials;
