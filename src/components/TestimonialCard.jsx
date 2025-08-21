import Star from "../assets/testimonial/star.svg";

export default function TestimonialCard({ image, name, role, company, feedback, rating }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "12px",
        display: "flex",
        gap: "12px",
        minWidth: "478px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        alignItems: "flex-start",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          maxWidth: "100%",
          textWrap: "balance",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>{name}</h3>
            <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>
              {role}, {company}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Star} alt="star" style={{ width: "16px", height: "16px" }} />
            <span
              style={{
                marginLeft: "4px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              {rating}
            </span>
          </div>
        </div>

        <p
          style={{
            marginTop: "12px",
            fontSize: "14px",
            color: "#333",
            lineHeight: "1.4",
          }}
        >
          “{feedback}”
        </p>
      </div>
    </div>
  );
}
