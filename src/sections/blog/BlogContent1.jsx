import React from 'react';
import Image_1 from "../../assets/blog/blogImage1.svg"
export default function BlogContent1() {
  return (
    <div style={styles.container}>
      {/* Left Side */}
      <div style={styles.imageContainer}>
        <img
          src={Image_1} 
          alt="AIGA Design Conference"
          style={styles.image}
        />
      </div>

      {/* Right Side */}
      <div style={styles.contentContainer}>
        <span style={styles.tag}>Industry Trends</span>
        <p style={styles.date}>Aug 07, 2025</p>
        <h2 style={styles.title}>AIGA Design Conference</h2>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Dui nunc mattis enim ut tellus. Sem integer vitae justo eget magna fermentum iaculis. 
          Viverra justo nec ultrices dui. Et malesuada fames ac turpis egestas sed.
        </p>
        <button style={styles.button}>Read more</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40px',
    gap: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#E0ECFD',
    color: '#007BFF',
    fontWeight: '600',
    fontSize: '14px',
    padding: '6px 12px',
    borderRadius: '4px',
    marginBottom: '8px',
    width: 'fit-content',
  },
  date: {
    color: '#888',
    fontSize: '14px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 16px 0',
  },
  description: {
    fontSize: '16px',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    alignSelf: 'start',
    cursor: 'pointer',
  },
};
