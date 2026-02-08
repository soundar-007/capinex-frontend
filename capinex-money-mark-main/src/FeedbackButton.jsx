import React from 'react';
import { useNavigate } from 'react-router-dom';
const FixedButton = () => {
  const navigate = useNavigate();


  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/contact-us')} style={styles.button}>Contact Us</button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(130%)',
    zIndex: 1000,
  },
  button: {
    writingMode: 'vertical-lr', // rotate the button text vertically
    transform: 'rotate(180deg)', // keep text readable
    padding: '8px 5px',
    backgroundColor: '#041633',
    color: 'white',
    border: 'none',
    borderRadius: '5px', // Rounded left edge only
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default FixedButton;