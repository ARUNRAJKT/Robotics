import React from 'react'
import Card from "../../components/Card";
import Robot1 from "../../assets/about/robot1.svg";
import Robot2 from "../../assets/about/robot2.svg";
import Robot3 from "../../assets/about/robot3.svg";
import Robot5 from "../../assets/about/robot5.svg";

export default function ProductSection2() {
    const robots = [
        {
            title: "D2 Delivery Robot",
            description:
                "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a...",
            image: Robot5,
            tags: ["RESTAURANTS", "MALLS", "HOSPITALS"],
            price: "4200 AED",
        },
        {
            title: "Temi Robot",
            description:
                "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing...",
            image: Robot3,
            tags: ["HEALTHCARE", "OFFICES", "RETAIL SHOWROOMS"],
            price: "4200 AED",
        },
        {
            title: "Alice Pro",
            description:
                "Equipped with state-of-the-art navigation technology, this drone ensures timely delivery in congested areas, enhancing...",
            image: Robot2,
            tags: ["CORPORATE RECEPTIONS", "EVENTS", "EXHIBITIONS"],
            price: "4200 AED",
        },
        {
            title: "Temi Robot",
            description:
                "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing...",
            image: Robot3,
            tags: ["HEALTHCARE", "OFFICES", "RETAIL SHOWROOMS"],
            price: "4200 AED",
        },
        {
            title: "Alice Pro",
            description:
                "Equipped with state-of-the-art navigation technology, this drone ensures timely delivery in congested areas, enhancing...",
            image: Robot2,
            tags: ["CORPORATE RECEPTIONS", "EVENTS", "EXHIBITIONS"],
            price: "4200 AED",
        },
    ];

    return (
        <section
            style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                marginTop: '8vh'
            }}
        >
            <div
                style={{
                    
                    marginBottom: "2rem",
                    color: "black",
                    padding: "4px",

                }}
            >
                <h1>Flexible Robot Rentals for Events, Businesses & More</h1>
                <h2>From smart assistants to delivery bots, Fortune Robotics offers UAE-wide rental services with local support and setup.</h2>
            </div>


            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {robots.map((robot, idx) => (
                    <Card
                        key={idx}
                        title={robot.title}
                        description={robot.description}
                        image={robot.image}
                        tags={robot.tags}
                        price={robot.price}
                    />
                ))}
            </div>
        </section>
    )
}
