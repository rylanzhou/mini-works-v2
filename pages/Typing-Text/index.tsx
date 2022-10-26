import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const words = ['Developer', 'Learner', 'Creator'];

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body" style={{ backgroundColor: '#010718' }}>
      <div className={styles.container}>
        <span className={`${styles.text} ${styles.first}`}>I&lsquo;m a </span>
        <span className={`${styles.text} ${styles.second}`}>{words[wordIndex]}</span>
      </div>
    </div>
  );
}
