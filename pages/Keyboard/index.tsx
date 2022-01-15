import React from 'react';
import styles from './styles.module.scss';

export default function Keyboard() {
  return (
    <div className="body" style={{ backgroundColor: '#232323' }}>
      <div>
        {['Q', 'W', 'E', 'R', 'T'].map((each) => (
          <span className={styles.span} key={each}>
            <i>{each}</i>
          </span>
        ))}
        <span className={styles.span}>
          <i></i>
        </span>
      </div>
    </div>
  );
}
