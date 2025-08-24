import React from 'react';
import TimelineCard from '../../components/TimelineCard';
import bg from '../../assets/timeline/timeline-bg.svg';

export default function Timeline() {
  const data = [
    {
      title: 'AI-Enhanced Navigation',
      description:
        'Implementing deep learning algorithms for obstacle avoidance and adaptive route optimization in dynamic urban environments.',
      status: { label: 'PROTOTYPE IN FIELD TESTING', color: '#007bff' },
      position: { top: 0, left: '0%' },
    },
    {
      title: 'Multi-Environment Robots',
      description:
        'Robots capable of seamlessly transitioning between indoor and outdoor operations using hybrid locomotion systems.',
      status: { label: 'DESIGN PHASE', color: '#007bff' },
      position: { top: 120, left: '20%' },
    },
    {
      title: 'Energy-Efficient Robotics',
      description:
        'Integrating renewable energy modules and advanced battery tech for extended operational hours.',
      status: { label: 'RESEARCH IN PROGRESS', color: '#0056b3' },
      position: { top: 240, left: '40%' },
    },
    {
      title: 'Multi-Environment Robots',
      description:
        'Robots capable of seamlessly transitioning between indoor and outdoor operations using hybrid locomotion systems.',
      status: { label: 'DESIGN PHASE', color: '#007bff' },
      position: { top: 360, left: '70%' },
    },
  ];

  const years = ['2025–2026', '2027–2028', '2029–2030', 'Beyond 2030'];

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bg})` }}>
      <div style={styles.timelineWrapper}>
        <div style={styles.yearRow}>
          {years.map((year, index) => (
            <div key={index} style={styles.yearBlock}>
              <div style={styles.yearText}>{year}</div>
             {index !== 0 && <div style={styles.verticalLine} />}
            </div>
          ))}
        </div>

        <div style={styles.cardArea}>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: item.position.top,
                left: item.position.left,
                width: '300px',
              }}
            >
              <TimelineCard
                title={item.title}
                description={item.description}
                status={item.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    color:"black",
    width: '100%',
    padding: '60px 20px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  timelineWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  yearRow: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: '40px',
  },
  yearBlock: {
    width: '25%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '10px',
  },
  yearText: {
    fontWeight: 'bold',
    fontSize: '16px',
    position: 'absolute',
    left: '-5px',
    top: '-10px',
    background: 'transparent',
  },
  verticalLine: {
    position: 'absolute',
    top: '28px',
    left: '0',
    width: '1px',
    height: '500px',
    borderLeft: '2px dotted #999',
    zIndex: 1,
  },
  cardArea: {
    position: 'relative',
    height: '500px',
    zIndex:1
  },
};
