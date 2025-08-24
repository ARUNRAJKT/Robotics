
import React from 'react';

export default function TimelineCard({ title, description, status, position }) {
  return (
    <div style={{ ...styles.card, ...styles[position] }}>
      <div style={styles.cardHeader}>
        <strong>{title}</strong>
        {status && (
          <span style={{ ...styles.statusBadge, backgroundColor: status.color }}>
            {status.label}
          </span>
        )}
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f8f0ff',
    padding: '16px',
    borderRadius: '6px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    border: '1px solid #ccc',
    width: '320px',
    position: 'absolute',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  statusBadge: {
    color: '#fff',
    fontSize: '10px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    alignSelf: 'center',
  },
  description: {
    fontSize: '13px',
    color: '#333',
  },

  leftTop: { top: '40px', left: '0%' },
  centerLeft: { top: '160px', left: '20%' },
  centerRight: { top: '280px', left: '40%' },
  bottomRight: { top: '400px', left: '70%' },
};
