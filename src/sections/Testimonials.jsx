// sections/Testimonials.jsx
import TestimonialCard from "../components/TestimonialCard";
import Image1 from "../assets/testimonial/image1.svg";
import Image2 from "../assets/testimonial/image2.svg";
import Image3 from "../assets/testimonial/image3.svg";

export default function Testimonials() {
  const testimonials = [
    {
      image: Image1,
      name: "Dr. Huda Karim",
      role: "Al Noor Hospital",
      company: "Abu Dhabi",
      feedback:
        "Temi Robot has completely changed the way we manage patient interaction in our lobby. Visitors are impressed, and our team saves time.",
      rating: 5.0,
    },
    {
      image: Image2,
      name: "Nadeem Ali",
      role: "Event Manager",
      company: "FusionX Events",
      feedback:
        "We rented Alice Pro for a corporate event in Dubai — it was a huge hit! Guests loved the interactive greetings and photo ops.",
      rating: 4.8,
    },
    {
      image: Image3,
      name: "Sunil Mehra",
      role: "Operations Lead",
      company: "Emirates Logistic Tech",
      feedback:
        "YOUBOT AMRs helped us automate transport inside our facility. Integration was smooth and the local support was top-notch.",
      rating: 4.7,
    },
  ];

  return (
    <section
      style={{
        padding: "3rem 1rem",
        background: "#fff",
        color: "#1F1F1F",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        What Our Clients Say
      </h2>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        Real stories from businesses that transformed their operations with
        robotics.
      </p>

      {/* Top row → left */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          whiteSpace: "nowrap",
          animation: "slideLeft 5s linear infinite",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={"top-" + i} {...t} />
        ))}
      </div>

      {/* Bottom row → right */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          whiteSpace: "nowrap",
          animation: "slideRight 5s linear infinite",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={"bottom-" + i} {...t} />
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>
    </section>
  );
}
