import React from 'react';
import styles from './styles.module.scss';

export default function BubbleLoading() {
  return (
    <div className="body" style={{ backgroundColor: 'black' }}>
      <div className={styles.container}>
        <div className={styles.arc}></div>
        <div className={styles.bubbles}>
          {new Array(+styles.count).fill(0).map((_, index) => (
            <div key={index} className={styles.bubble}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
