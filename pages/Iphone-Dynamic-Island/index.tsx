import React, { useState } from 'react';
import { IoCall } from 'react-icons/io5';
import styles from './styles.module.scss';

export default function () {
  const [active, setActive] = useState(false);

  return (
    <div className="body">
      <div className={styles.box}>
        <div className={styles.inner}>
          <div
            className={`${styles.island} ${active ? styles.active : ''}`}
            onClick={() => setActive(!active)}
          >
            <div className={styles.content}>
              <div className={styles.details}>
                <div className={styles.img}>
                  <img src="https://joeschmoe.io/api/v1/1" alt="Logo" />
                </div>
                <p>
                  <div>iPhone</div>Rylan Zhou
                </p>
              </div>
              <div className={styles.action}>
                <IoCall className={styles.red} />
                <IoCall className={styles.green} />
              </div>
            </div>
          </div>
        </div>
        <i className={`${styles.btn} ${styles.btn1}`}></i>
        <i className={`${styles.btn} ${styles.btn2}`}></i>
        <i className={`${styles.btn} ${styles.btn3}`}></i>
        <i className={`${styles['right-btn']}`}></i>
      </div>
    </div>
  );
}
