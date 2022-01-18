import React from 'react';
import { IoPowerOutline } from 'react-icons/io5';

import styles from './styles.module.scss';

export default function Switch() {
  return (
    <div className="body" style={{ backgroundColor: '#cfd1e1' }}>
      <label className={styles.label}>
        <input type="checkbox" name="" id="" />
        <div className={styles.icon}>
          <div className={styles.shadow}></div>
          <div className={styles['icon-box']}>
            <IoPowerOutline />
          </div>
        </div>
      </label>
    </div>
  );
}
