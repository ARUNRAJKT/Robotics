
export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={styles.pagination}>
      <button
        style={{ ...styles.button, ...(currentPage === 1 ? styles.disabled : {}) }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          style={{
            ...styles.button,
            ...(page === currentPage ? styles.active : {}),
          }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        style={{ ...styles.button, ...(currentPage === totalPages ? styles.disabled : {}) }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginTop: '20px',
  },
  button: {
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  active: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: '#007bff',
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};
