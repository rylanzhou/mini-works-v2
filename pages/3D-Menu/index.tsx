import React from 'react';
import styles from './styles.module.scss';

const menuItem = ['Home', 'About', 'Services', 'Portfolio', 'Our Team', 'Contact'];

export default function Menu3D() {
  const getCSSVariable = (n: number) => ({ '--i': n } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#434750' }}>
      <ul className={styles.list}>
        {menuItem.map((each, index) => (
          <li key={each} style={getCSSVariable(menuItem.length - index)}>
            {each}
          </li>
        ))}
      </ul>
    </div>
  );
}
