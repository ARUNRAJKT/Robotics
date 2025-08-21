function TestimonialCard({ name, feedback }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", width: "300px" }}>
      <p>"{feedback}"</p>
      <strong>- {name}</strong>
    </div>
  );
}

export default TestimonialCard;
