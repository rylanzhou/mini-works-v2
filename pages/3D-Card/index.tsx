import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';

const RATIO = 10;

export default function Card() {
  const [activeButton, setActiveButton] = useState(0);
  const [isInCard, setIsInCard] = useState(false);

  const cardRef = useRef<HTMLDivElement>();

  const handleMousemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isInCard) {
      return;
    }
    const xAxis = (window.innerWidth / 2 - e.pageX) / RATIO;
    const yAxis = (window.innerHeight / 2 - e.pageY) / RATIO;

    cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  return (
    <div className={styles.body}>
      <div
        className={`${styles.container} ${isInCard ? styles['mouse-in'] : ''}`}
        onMouseMove={(e) => handleMousemove(e)}
        onMouseEnter={() => setIsInCard(true)}
        onMouseLeave={() => {
          cardRef.current.style.transform = `rotateY(0) rotateX(0)`;
          setIsInCard(false);
        }}
      >
        <div className={styles.card} ref={cardRef}>
          <div className={styles.sneaker}>
            <div className={styles.circle}></div>
            <img
              src="https://res.cloudinary.com/rylanzhou/image/upload/v1638847238/mini-works/adidas_lhfhz3.png"
              alt="adidas"
            />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>Adidas ZX</h1>
            <h3>future-ready trainers with wrapped boost for exception comfort</h3>
            <div className={styles.sizes}>
              {[39, 40, 42, 44].map((each, index) => (
                <button
                  key={each}
                  className={`${activeButton === index ? styles.active : ''}`}
                  onClick={() => setActiveButton(index)}
                >
                  {each}
                </button>
              ))}
            </div>

            <div className={styles.purchase}>
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
