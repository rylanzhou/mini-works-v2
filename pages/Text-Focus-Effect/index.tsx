import React from 'react';
import styles from './styles.module.scss';

const text = 'FOCUS';

export default function TextFocusEffect() {
  return (
    <div className="body" style={{ background: 'linear-gradient(45deg, #ff0057, #2196f3)' }}>
      <h2 className={styles.text}>
        {text.split('').map((each) => (
          <span key={each}>
            <i></i>
            {each}
          </span>
        ))}
      </h2>
    </div>
  );
}
