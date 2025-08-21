import dnaImage from "../assets/newsletter/background.svg";
import heroImage from "../assets/newsletter/person.svg";

function Newsletter() {
  return (
    <section style={{ position: "relative", marginTop: "8rem" }}>
      {/* Gradient box */}
      <div
        style={{
          background: "linear-gradient(90deg, #45637B 0%, #212737 100%)",
          padding: "3rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          borderRadius: "0px",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Left content */}
        <div style={{ maxWidth: "500px" ,textAlign:"center"}}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
            JOIN 5,000+ ROBOTICS PROFESSIONALS.<br/>
             GET TRENDS, NEWS & OFFERS.
          </h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "0.75rem",
                border: "none",
                borderRadius: "4px",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* DNA background (inside gradient box, behind hero) */}
        <img
          src={dnaImage}
          alt="DNA Background"
          style={{
            position: "absolute",
            right: "-6%",
            top: "50%",
            transform: "translateY(-50%)",
          filter: "brightness(0) ",
            height: "auto",
            zIndex: 0,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Hero image (overlaps white + gradient) */}
      <img
        src={heroImage}
        alt="Hero"
        style={{
          position: "absolute",
          right: "5%",
          top: "-170px", // moves head into white area
          width: "320px",
          height: "auto",
          zIndex: 2,
        }}
      />
    </section>
  );
}

export default Newsletter;
