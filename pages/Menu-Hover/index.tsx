import React from 'react';
import styles from './styles.module.scss';

const menuItems = ['Home', 'About', 'Services', 'Team', 'Contact'];

export default function MenuHover() {
  return (
    <div className="body" style={{ backgroundColor: '#222' }}>
      <ul className={styles.list}>
        {menuItems.map((each) => (
          <li key={each} data-text={each}>
            {each}
          </li>
        ))}
      </ul>
    </div>
  );
}
