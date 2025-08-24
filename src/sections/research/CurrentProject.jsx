import React from "react";
import img from "../../assets/logo.svg"
export default function CurrentProject() {
    const projects = [
        {
            image: img, 
            title: "Artificial Intelligence for Decision Making",
            description:
                "Future Robotics integrates deep learning and predictive algorithms, enabling robots to analyze environments, anticipate challenges, and make autonomous decisions with human-like intervention.",
        },
        {
            image: img, 
            title: "VisionX",
            description:
                "Next-gen visual recognition for retail & security networks.",
        },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Current Projects</h2>
            <div style={styles.cardWrapper}>
                {projects.map((project, index) => (
                    <div key={index} style={styles.card}>
                        <img src={project.image} alt={project.title} style={styles.image} />
                        <div style={styles.content}>
                            <h3 style={styles.title}>{project.title}</h3>
                            <p style={styles.description}>{project.description}</p>
                            <button style={styles.button}>View Case Study</button>
                        </div>
                    </div>
                ))}
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
        marginBottom: "30px",
    },
    cardWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "24px",
        justifyContent: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
        cursor: "pointer",
    },
    image: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
    },
    content: {
        padding: "16px",
        textAlign: "left",
    },
    title: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "8px",
    },
    description: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "16px",
        lineHeight: "1.5",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
};

