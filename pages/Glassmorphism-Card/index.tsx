import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from './styles.module.scss';

const data = [
  {
    title: 'Someone Famous',
    profession: 'Creative Designer',
    avatar: 'https://joeschmoe.io/api/v1/jess',
  },
  {
    title: 'Someone Famous',
    profession: 'Creative Designer',
    avatar: 'https://joeschmoe.io/api/v1/jack',
  },
  {
    title: 'Someone Famous',
    profession: 'Creative Designer',
    avatar: 'https://joeschmoe.io/api/v1/joe',
  },
];

export default function GlassmorphismCard() {
  const getCSSVariable = (n: number, name?: string) =>
    ({ [`--${name || 'i'}`]: n } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#161623' }}>
      <section className={styles.section}>
        <div className={styles.container}>
          {data.map((each, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.content}>
                <div className={styles['img-box']}>
                  <Image src={each.avatar} width="300" height="300" alt="Avatar" />
                </div>
                <div className={styles['content-box']}>
                  <h3>
                    {each.title}
                    <br />
                    <span>{each.profession}</span>
                  </h3>
                </div>
              </div>

              <ul className={styles.sci}>
                <li style={getCSSVariable(1)}>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li style={getCSSVariable(2)}>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li style={getCSSVariable(3)}>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
