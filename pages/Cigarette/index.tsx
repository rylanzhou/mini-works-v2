import React from 'react';
import styles from './styles.module.scss';

export default function Cigarette() {
  const getCSSVariable = (n: number) => ({ '--i': n } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#222' }}>
      <div className={styles.container}>
        <div className={styles.cigarette}>
          {new Array(10).fill(0).map((_, index) => (
            <span key={index} style={getCSSVariable(index)}>
              <i>Nooooo</i>Smooooooooking
              <i>|</i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
