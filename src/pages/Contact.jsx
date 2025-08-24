import React from 'react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <button 
            onClick={onClose}
            style={styles.closeButton}
          >
            ×
          </button>
        </div>
        
        <h5 style={styles.subheading}>Contact us</h5>
        <h2 style={styles.heading}>Get in touch</h2>
        <p style={styles.description}>We'd love to hear from you. Please fill out this form.</p>

        <form style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>First name</label>
              <input style={styles.input} placeholder="First name" />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Last name</label>
              <input style={styles.input} placeholder="Last name" />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input style={styles.input} placeholder="you@company.com" />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone number</label>
              <input style={styles.input} placeholder="US  +1 (555) 000-0000" />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={{ ...styles.input, height: '60px', resize: 'none' }} placeholder="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', marginTop: '14px' }}>
            <input type="checkbox" />
            <span style={{ fontSize: '13px', marginLeft: '8px' }}>
              You agree to our friendly <a href="#" style={{ color: '#6c47ff' }}>privacy policy</a>.
            </span>
          </div>
          <button type="submit" style={styles.button}>Send message</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: '6px',
    padding: '24px 20px',
    width: '90%',
    maxWidth: '480px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '8px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#999',
    padding: '0',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheading: {
    fontSize: '12px',
    color: '#6c47ff',
    marginBottom: '4px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '22px',
    textAlign: 'center',
    margin: 0,
  },
  description: {
    fontSize: '13px',
    color: '#555',
    textAlign: 'center',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    gap: '12px',
    marginBottom: '14px',
  },
  inputGroup: {
    flex: 1,
    marginBottom: '0',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    marginBottom: '4px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: '8px',
    padding: '10px',
    backgroundColor: '#6c47ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
  },
};