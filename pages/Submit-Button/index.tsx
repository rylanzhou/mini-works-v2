import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function SubmitButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="body" style={{ backgroundColor: '#1d1f20' }}>
      <button
        className={`${styles.btn} ${isAnimating ? styles.animating : ''}`}
        onClick={() => setIsAnimating(true)}
      >
        Submit
      </button>
      <div className={styles.checkmark}>
        <svg x="0px" y="0px" fill="none" viewBox="0 0 25 30">
          <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
        </svg>
      </div>
    </div>
  );
}
