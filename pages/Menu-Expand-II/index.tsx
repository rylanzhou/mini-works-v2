import React, { useState } from 'react';
import { IoCameraOutline, IoSettingsOutline, IoTrashBinOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

export default function MenuExpandII() {
  const [isActive, setIsActive] = useState(false);

  const getCSSVariable = (n: string) => ({ '--i': n } as React.CSSProperties);

  return (
    <div className="body" style={{ background: 'linear-gradient(45deg, #ff216d, #2196f3)' }}>
      <div className={styles.navigation}>
        <div
          className={`${styles['menu-toggle']} ${isActive ? styles.active : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          +
        </div>
        <div className={styles.menu}>
          <ul>
            <li style={getCSSVariable('0.1s')}>
              <a href="#">
                <IoCameraOutline />
              </a>
            </li>
            <li style={getCSSVariable('0.2s')}>
              <a href="#">
                <IoSettingsOutline />
              </a>
            </li>
            <li style={getCSSVariable('0.3s')}>
              <a href="#">
                <IoTrashBinOutline />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
