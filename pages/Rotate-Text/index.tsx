import React from 'react';
import styles from './styles.module.scss';

const numbers = [
  [2, 3, 4, 5],
  [0, 1, 2, 3],
  [2, 3, 4, 5],
  [1, 2, 3, 4],
];

export default function RotateText() {
  const getCSSVariable = (n: number, name?: string) =>
    ({ [`--${name || 'i'}`]: n } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#3d3d3d' }}>
      <div className={styles.container}>
        {numbers.map((each, index1) => (
          <div key={index1} className={styles.text} style={getCSSVariable(index1, 'j')}>
            {each.map((num, index2) => (
              <span key={`${each},${num}`} style={getCSSVariable(index2)}>
                {num}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
