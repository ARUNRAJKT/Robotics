import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.svg"
function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #ddd", padding: "2rem 4rem",color:"#1F1F1F" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 2fr 1fr", gap: "2rem", alignItems: "start" }}>
        
        {/* Logo & About */}
        <div>
         <img src={Logo} alt=""/>
          <p style={{ marginTop: "1rem", color: "#555", lineHeight: "1.6" }}>
            At Fortune Robotics, we’re redefining automation across hospitality, 
            healthcare, logistics, and corporate industries.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontWeight: "600" }}>Our Products</h4>
          <p>Research</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaPhoneAlt /> <span>+91 12345 6789</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaMapMarkerAlt /> <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaMapMarkerAlt /> <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaEnvelope /> <span>robo@gmail.com</span>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontWeight: "600" }}>Follow us</h4>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <a href="#"><FaFacebookF size={20} style={{ background: "#000", color: "#fff", borderRadius: "50%", padding: "5px" }} /></a>
            <a href="#"><FaInstagram size={20} style={{ background: "#000", color: "#fff", borderRadius: "50%", padding: "5px" }} /></a>
            <a href="#"><FaTwitter size={20} style={{ background: "#000", color: "#fff", borderRadius: "50%", padding: "5px" }} /></a>
            <a href="#"><FaLinkedinIn size={20} style={{ background: "#000", color: "#fff", borderRadius: "50%", padding: "5px" }} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ textAlign: "center", marginTop: "2rem", borderTop: "1px solid #ddd", paddingTop: "1rem", color: "#555" }}>
        Copyright © 2025 Lunar Enterprises. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
