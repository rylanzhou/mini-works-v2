import React from 'react';

import styles from './styles.module.scss';

export default function CircularProgress() {
  return (
    <div className="body" style={{ backgroundColor: '#101010' }}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <div className={styles.text}>Html</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  85<span>%</span>
                </h2>
              </div>
            </div>
            <div className={styles.text}>CSS</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  60<span>%</span>
                </h2>
              </div>
            </div>
            <div className={styles.text}>Javascript</div>
          </div>
        </div>
      </div>
    </div>
  );
}
