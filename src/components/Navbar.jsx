import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  const baseStyle = {
    fontFamily: "Red Rose",
    fontSize: "16px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "rgba(31, 31, 31, 1)",
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 45px",
        background: "#f8f8f8",
        height: "90px",
      }}
    >
      {/* Left side: Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Right side: Links */}
      <div
        style={{
          display: "flex",
          gap: "42px",
        }}
      >
        {[
          { to: "/", label: "HOME" },
          { to: "/products-services", label: "PRODUCTS & SERVICES" },
          { to: "/case-studies", label: "CASE STUDIES" },
          { to: "/research", label: "RESEARCH" },
          { to: "/blog", label: "BLOG" },
          { to: "/contact", label: "CONTACT US" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              ...baseStyle,
              fontWeight: isActive ? 700 : 300, // only this changes
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
