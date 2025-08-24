import React from 'react';
import CaseStudyCard from '../../components/CaseStudyCard';
import navImg from '../../assets/logo.svg'; // Replace with actual image paths
import aiImg from '../../assets/logo.svg';
import visionImg from '../../assets/logo.svg';

export default function MainContent() {
  const caseStudies = [
    {
      image: navImg,
      tags: ['Industry Trends'],
      title: 'Advanced Navigation Systems',
      description:
        'Our robotics-powered next-gen navigation integrates real-time sensors and AI-based monitoring, enabling seamless operations in diverse environments. Faster, safer, and smarter.',
      highlights: [
        'SLAM (Simultaneous Localization and Mapping) Technology',
        'Real-time Path Planning',
        'Multi-sensor adaptability',
        'Autonomous obstacle avoidance',
      ],
    },
    {
      image: aiImg,
      tags: ['Future of Human-Robot Interaction'],
      title: 'Artificial Intelligence for Decision Making',
      description:
        'Enables flexible integration, edge-based computing, predictive algorithms, and real-time decision-making to optimize processes and enhance operational efficiency across industries.',
      highlights: [
        'Predictive Path Planning',
        'Real-time Problem Solving',
        'Power-efficient AI workflows',
        'Context-aware decision models',
      ],
    },
    {
      image: visionImg,
      tags: ['Sustainable Robotics Development'],
      title: 'Computer Vision & Sensor Fusion',
      description:
        'By combining multiple sensor inputs with vision-based AI, we enable our systems to “see” and “understand” the environment more accurately, driving precise robotics-powered navigation.',
      highlights: [
        'Object & Faced Recognition',
        'Depth sensing & 3D mapping',
        'Multi-sensor data fusion (LIDAR, Ultrasonic, Infrared)',
        'Real-time hazard detection',
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Innovation in Navigation, AI & Vision</h1>
      <p style={styles.subHeading}>
        Empowering robots to think, see, and move with unmatched precision.
      </p>
      <div style={styles.cardWrapper}>
        {caseStudies.map((item, index) => (
          <div key={index} style={styles.card}>
            <CaseStudyCard
              image={item.image}
              tags={item.tags}
              title={item.title}
              description={item.description}
              clientName="Key Highlights"
              clientLocation={
                <ul style={styles.highlightList}>
                  {item.highlights.map((highlight, i) => (
                    <li key={i} style={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  subHeading: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  cardWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  highlightList: {
    textAlign: 'left',
    paddingLeft: '18px',
    margin: '8px 0',
    fontSize: '14px',
    color: '#333',
  },
  highlightItem: {
    marginBottom: '6px',
  },
};
