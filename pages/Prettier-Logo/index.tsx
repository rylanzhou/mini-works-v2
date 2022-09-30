import React, { useState } from 'react';
import styles from './styles.module.scss';

const cellConfig = [
  ['5', '2', '14', '5', '14', '5'],
  ['5', '7', '7', '13-blue', '7', '3', '13'],
  ['6', '6', '4', '4-red', '10-yellow', '6', '11'],
  ['3', '10', '7', '8-blue', '5-purple', '2-blue', '9', '9'],
  ['9', '4', '6', '2', '5-yellow', '5', '6-red', '2', '20'],
  ['13', '11', '5-purple', '5', '6-yellow', '15'],
  ['9', '9', '3', '2-red', '4-yellow', '9-blue', '10', '2', '7'],
  ['6', '9', '5', '5-blue', '5-red', '4-purple', '7', '12'],
  ['5', '10', '2-purple', '10-yellow', '7', '9', '4'],
  ['8', '2', '6', '7-purple', '9', '15'],
  ['14', '3-blue', '3-yellow', '6', '12'],
  ['9', '5', '3', '7-red', '13', '4'],
  ['7', '12', '9', '6'],
];

export default function PrettierLogo() {
  const [slideActive, setSlideActive] = useState(Array(cellConfig.length).fill(false));
  const [notLoad, setNotLoad] = useState(false);

  const getCSSVariable = (n: number) => ({ '--size': n } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: styles.background }}>
      <div
        className={styles.container}
        onClick={() => {
          setNotLoad(true);
          setSlideActive(Array(cellConfig.length).fill(true));
        }}
      >
        {cellConfig.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles['row-container']} ${slideActive[rowIndex] ? styles.slide : ''} ${
              notLoad ? styles['no-load'] : ''
            }`}
          >
            <div
              className={styles.row}
              onAnimationEnd={() => {
                const copy = [...slideActive];
                copy[rowIndex] = false;
                setSlideActive(copy);
              }}
            >
              {row.map((each, cellIndex) => {
                const [size, color] = each.split('-');

                return (
                  <div
                    key={cellIndex}
                    className={`${styles.cell} ${color ? styles[color] : ''}`}
                    style={getCSSVariable(+size)}
                  ></div>
                );
              })}
            </div>
            <div className={`${styles.row} ${styles.duplicate}`}>
              {row.map((each, cellIndex) => {
                const [size, color] = each.split('-');

                return (
                  <div
                    key={cellIndex}
                    className={`${styles.cell} ${color ? styles[color] : ''}`}
                    style={getCSSVariable(+size)}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
