// components/BlogCard.js
import React from 'react';

export default function BlogCard({ image, tag, date, title, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <div style={styles.cardMeta}>
          <span style={styles.cardTag}>{tag}</span>
          <span style={styles.cardDate}>{date}</span>
        </div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDesc}>{description}</p>
        <button style={styles.cardButton}>Read more →</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginBottom: '8px',
  },
  cardTag: {
    backgroundColor: '#e0ecfd',
    color: '#007bff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 600,
  },
  cardDate: {
    color: '#888',
  },
  cardTitle: {
    fontSize: '18px',
    margin: '8px 0',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#555',
  },
  cardButton: {
    marginTop: '12px',
    padding: '8px 16px',
    border: 'none',
    backgroundColor: '#000',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};
