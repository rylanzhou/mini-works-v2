import React from 'react';

import styles from './styles.module.scss';

export default function LearningMaskedButtons() {
  return (
    <div className={styles.body}>
      <section>
        <h3>Easy Implementation (cannot select masked button)</h3>
        <div className={styles.container1}>
          <ul className={styles['button-list']}>
            {['comedy', 'history', 'documentation', 'nature', 'horror', 'live'].map(
              (each, index) => (
                <li key={index}>{each}</li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section>
        <h3>
          Easy Implementation (add <i>pointer-events</i> to fix)
        </h3>
        <div className={styles.container2}>
          <ul className={styles['button-list']}>
            {['comedy', 'history', 'documentation', 'nature', 'horror', 'live'].map(
              (each, index) => (
                <li key={index}>{each}</li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section>
        <h3>Question: Cannot deal with different backgrounds</h3>
        <div className={styles.container3}>
          <ul className={styles['button-list']}>
            {['comedy', 'history', 'documentation', 'nature', 'horror', 'live'].map(
              (each, index) => (
                <li key={index}>{each}</li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section>
        <h3>
          Better Implementation (use <i>mask</i> property)
        </h3>
        <div className={styles.container4}>
          <ul className={styles['button-list']}>
            {['comedy', 'history', 'documentation', 'nature', 'horror', 'live'].map(
              (each, index) => (
                <li key={index}>{each}</li>
              ),
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
