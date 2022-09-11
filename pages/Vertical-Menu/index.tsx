import React, { useState } from 'react';
import { FaUser, FaHome, FaCommentAlt, FaQuestionCircle, FaCog } from 'react-icons/fa';

import styles from './styles.module.scss';

const menu = [
  {
    title: 'Home',
    icon: <FaHome />,
    color: '#f53b57',
  },
  {
    title: 'Profile',
    icon: <FaUser />,
    color: '#3c40c6',
  },
  {
    title: 'Message',
    icon: <FaCommentAlt />,
    color: '#05c46b',
  },
  {
    title: 'Help',
    icon: <FaQuestionCircle />,
    color: '#0fbcf9',
  },
  {
    title: 'Settings',
    icon: <FaCog />,
    color: '#ffa801',
  },
];

export default function VerticalMenu() {
  const [activeMenu, setActiveMenu] = useState(menu[0]);

  return (
    <div
      className="body"
      style={{ backgroundColor: activeMenu.color, transition: 'background .3s' }}
    >
      <div className={styles.navigation}>
        <ul>
          {menu.map((each, index) => (
            <li
              key={index}
              className={`${activeMenu.title === each.title ? styles.active : ''}`}
              onMouseOver={() => setActiveMenu(each)}
            >
              <a href="#">
                <span className={styles.icon}>{each.icon}</span>
                <span className={styles.title}>{each.title}</span>
              </a>
            </li>
          ))}
          <div className={styles.indicator} style={{ backgroundColor: activeMenu.color }}></div>
        </ul>
      </div>
    </div>
  );
}
