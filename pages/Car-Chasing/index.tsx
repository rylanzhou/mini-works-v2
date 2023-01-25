import React from 'react';

import styles from './styles.module.scss';

export default function CarChasing() {
  return (
    <div className="body" style={{ backgroundColor: '#355463' }}>
      <div className={styles.road}>
        <div className={styles.taxi}>
          <div className={styles['light-beam']}></div>
          {/* <h3>taxi</h3> */}
          <div className={styles['side-mirror']}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>

        <div className={`${styles.police} ${styles.p1}`}>
          <div className={styles['light-beam']}></div>
          <h3>Police</h3>
          <h4>Police</h4>
          <div className={styles['side-mirror']}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>

        <div className={`${styles.police} ${styles.p2}`}>
          <div className={styles['light-beam']}></div>
          <h3>Police</h3>
          <h4>Police</h4>
          <div className={styles['side-mirror']}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>

        <div className={`${styles.police} ${styles.p3}`}>
          <div className={styles['light-beam']}></div>
          <h3>Police</h3>
          <h4>Police</h4>
          <div className={styles['side-mirror']}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
}
