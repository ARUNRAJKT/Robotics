function Card({ title, description, image }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "250px" }}>
      {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
