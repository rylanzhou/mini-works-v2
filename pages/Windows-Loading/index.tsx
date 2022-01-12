import React from 'react';
import styles from './styles.module.scss';

export default function WindowsLoading() {
  return (
    <div className="body">
      <div className={styles.container}>
        <section>
          Basic Linear Loading
          <div className={styles.loading0}></div>
        </section>
        <section>
          Loading I: With Mask
          <div className={styles.loading1}></div>
        </section>
        <section>
          Loading II: With SVG
          <svg className={styles.loading2} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              className={styles.path}
              cx="50"
              cy="50"
              r="49" // slightly smaller than the boundary
              fill="none"
              stroke="#0079d8"
              strokeWidth="3"
            />
          </svg>
        </section>
        <section>
          Loading III: With CSS @Property
          <div className={styles.loading3}></div>
        </section>
      </div>
    </div>
  );
}
