import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

export default function SwitchDayNight() {
  return (
    <div className="body" style={{ backgroundColor: '#eeeeff' }}>
      <label className={styles.container}>
        <input type="checkbox" />

        <div className={styles.celestial}>
          <div className={styles.moon}>
            <div className={styles.crater}></div>
            <div className={styles.crater}></div>
            <div className={styles.crater}></div>
          </div>
        </div>

        <div className={styles.sky}>
          {Array(11)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                className={styles.star}
                src="https://res.cloudinary.com/rylanzhou/image/upload/v1682126864/star_mjmbso.png"
                alt="star"
              />
            ))}

          <img
            className={styles.cloud2}
            src="https://res.cloudinary.com/rylanzhou/image/upload/v1682128519/cloud2_ugtgmt.png"
            alt="cloud"
          />
          <img
            className={styles.cloud1}
            src="https://res.cloudinary.com/rylanzhou/image/upload/v1682126149/cloud1_yivtch.png"
            alt="clouds"
          />
        </div>
      </label>
    </div>
  );
}
