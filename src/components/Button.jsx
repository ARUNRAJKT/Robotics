import React from "react";

function Button({ label, onClick, primary }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "40px",
        padding: "10px",
        borderRadius: "0",
        border: primary ? "1px solid #FFFFFF" : "none",
        background: primary ? "transparent" : "#007CFF",
        color: "#FFFFFF",
        fontSize: "16px",
        fontWeight: 400,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = "1";
      }}
    >
      {label}
    </button>
  );
}

export default Button;
