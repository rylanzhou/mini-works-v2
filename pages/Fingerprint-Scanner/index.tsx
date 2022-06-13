import React from 'react';
import styles from './styles.module.scss';

export default function FingerprintScanner() {
  return (
    <div className="body" style={{ backgroundColor: '#111' }}>
      <div className={styles.scan}>
        <div className={styles.fingerprint}></div>
        <h3>Scanning...</h3>
      </div>
    </div>
  );
}
