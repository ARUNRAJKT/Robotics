// components/CaseStudyCard.js
import React from 'react';

export default function CaseStudyCard({ image, tags = [], title, description, clientName, clientLocation }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />

      <div style={styles.cardContent}>
        <div style={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>

        <div style={styles.clientBlock}>
          <strong>Client</strong><br />
          <span>{clientName}</span><br />
          <span>{clientLocation}</span>
        </div>

        <button style={styles.button}>Read more →</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #ddd',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
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
    gap: '12px',
  },
  tagsWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 500,
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4',
  },
  clientBlock: {
    fontSize: '14px',
    color: '#444',
    marginTop: '8px',
  },
  button: {
    marginTop: '12px',
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
};
