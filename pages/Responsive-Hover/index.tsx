import React from 'react';
import styles from './styles.module.scss';

export default function ResponsiveHover() {
  return (
    <div className="body">
      <div className={styles.card}>
        <div className={styles.circle}></div>
        <div className={styles.content}>
          <h2>Pepsi Cola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic mollitia nihil
            nostrum et tempora sequi.
          </p>
          <a href="#">Buy Now</a>
        </div>
        <img
          src="https://res.cloudinary.com/rylanzhou/image/upload/v1661958497/mini-works/can-real-sugar-reg_bwzcxe.png"
          alt="pepsi"
        />
      </div>
    </div>
  );
}
