import React from "react";

export default function RoboticTrends() {
  const infographics = [
    "SLAM (Simultaneous Localization and Mapping) Technology",
    "LIDAR (Light Detection and Ranging) Systems",
    "GPS (Global Positioning System) Navigation",
    "Computer Vision Algorithms",
    "Depth Sensing Cameras",
    "Artificial Intelligence in Robotics",
    "Drones with Autonomous Flight Capabilities",
  ];

  const miniReports = [
    "The Future of Robotics in Hospitality & Events",
    "AI Vision Systems: Market Shifts in 2025",
    "Warehouse Automation: Challenges & Opportunities",
    "How Robotics is Changing Urban Services",
  ];

  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>Robotics Trends You Need to Know</h2>
      <p style={styles.subHeading}>
        Stay ahead with data-driven insights and future predictions from the world of robotics
      </p>


      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Infographics Gallery</h3>
          <ul style={styles.list}>
            {infographics.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span>{item}</span>
                <span style={styles.icon}>➔</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Mini Reports</h3>
          <ul style={styles.list}>
            {miniReports.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.bullet}></span>
                <span>{item}</span>
                <span style={styles.icon}>➔</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  subHeading: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "30px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#222",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #eee",
    backgroundColor: "#fafafa",
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  bullet: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#222",
    marginRight: "8px",
  },
  icon: {
    fontSize: "16px",
    color: "#666",
    marginLeft: "8px",
  },
};
