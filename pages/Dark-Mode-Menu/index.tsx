import React, { useState } from 'react';
import { IoAirplane, IoBluetooth, IoLocation, IoMoon, IoWifi } from 'react-icons/io5';
import styles from './styles.module.scss';

const menuItems = [
  {
    title: 'Wi-Fi',
    icon: <IoWifi />,
  },
  {
    title: 'Bluetooth',
    icon: <IoBluetooth />,
  },
  {
    title: 'Airplane Mode',
    icon: <IoAirplane />,
  },
  {
    title: 'Location',
    icon: <IoLocation />,
  },
];

export default function DarkModeMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`body ${isDarkMode ? styles['dark-mode'] : ''}`}
      style={{ backgroundColor: '#f0f0f0', transition: '0.5s' }}
    >
      <div className={styles.box}>
        <div className={styles.profile}>
          <div className={styles['img-bx']}>
            <img
              src="https://res.cloudinary.com/rylanzhou/image/upload/v1661966376/mini-works/Logo_2022_Circle_luqqb5.jpg"
              alt="logo"
            />
          </div>
          <h4 className={styles.text}>
            Rylan Zhou
            <br />
            <span>Frontend Developer</span>
          </h4>
        </div>

        <ul className={styles.menu}>
          {menuItems.map((each) => (
            <li key={each.title}>
              <label>
                <span className={styles.title}>
                  {each.icon}
                  {each.title}
                </span>
                <span className={styles.action}>
                  <input type="checkbox" />
                  <i></i>
                </span>
              </label>
            </li>
          ))}
          <li>
            <label>
              <span className={styles.title}>
                <IoMoon />
                Dark Mode
              </span>
              <span className={styles.action}>
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={(event) => setIsDarkMode(event.target.checked)}
                />
                <i></i>
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
