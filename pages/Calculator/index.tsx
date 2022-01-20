import React, { useState } from 'react';

import styles from './styles.module.scss';

export default function Calculator() {
  const [str, setStr] = useState<string>('');

  return (
    <div className="body" style={{ backgroundColor: '#333' }}>
      <div className={styles.container}>
        <form className={styles.calculator}>
          <input type="text" className={styles.value} readOnly value={str} />

          <span className={`${styles.num} ${styles.clear}`} onClick={() => setStr('')}>
            <i>C</i>
          </span>
          {['/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '00', '.'].map(
            (each) => (
              <span
                className={`${styles.num} ${each === '+' ? styles.plus : ''}`}
                key={each}
                onClick={() => setStr(str + each)}
              >
                <i>{each}</i>
              </span>
            ),
          )}
          <span className={`${styles.num} ${styles.equal}`} onClick={() => setStr(eval(str))}>
            <i>=</i>
          </span>
        </form>
      </div>
    </div>
  );
}
