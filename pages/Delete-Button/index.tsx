import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function DeleteButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="body" style={{ backgroundColor: '#222' }}>
      <a
        className={`${styles.btn} ${isActive ? styles.active : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span />
        <text>Delete</text>
      </a>
    </div>
  );
}
