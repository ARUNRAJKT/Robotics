import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar({ onContactClick }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    onContactClick();
  };

  return (
    <nav style={styles.container}>
      {/* Left side*/}
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Right side */}
      <div style={styles.linksContainer}>
        {[
          { to: "/", label: "HOME" },
          { to: "/products-services", label: "PRODUCTS & SERVICES" },
          { to: "/case-studies", label: "CASE STUDIES" },
          { to: "/research", label: "RESEARCH" },
          { to: "/blog", label: "BLOG" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              ...styles.baseLink,
              fontWeight: isActive ? 700 : 300,
            })}
          >
            {item.label}
          </NavLink>
        ))}

        {/* Contact link */}
        <span
          onClick={handleContactClick}
          style={styles.contactLink}
        >
          CONTACT US
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 45px",
    background: "#f8f8f8",
    height: "90px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    gap: "42px",
  },
  baseLink: {
    fontFamily: "Red Rose",
    fontSize: "16px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "rgba(31, 31, 31, 1)",
  },
  contactLink: {
    fontFamily: "Red Rose",
    fontSize: "16px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "rgba(31, 31, 31, 1)",
    fontWeight: 300,
    cursor: "pointer",
  },
};
