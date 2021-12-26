import React, { useState } from 'react';
import {
  IoCameraOutline,
  IoChatbubbleOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import styles from './styles.module.scss';

interface NavItemProps {
  name: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

const map = {
  home: {
    text: 'Home',
    component: <IoHomeOutline />,
  },
  profile: {
    text: 'Profile',
    component: <IoPersonOutline />,
  },
  messages: {
    text: 'Messages',
    component: <IoChatbubbleOutline />,
  },
  photos: {
    text: 'Photos',
    component: <IoCameraOutline />,
  },
  settings: {
    text: 'Settings',
    component: <IoSettingsOutline />,
  },
};

function NavItem(props: NavItemProps) {
  return (
    <li
      className={`${props.isActive ? styles.active : ''}`}
      onClick={() => props.onClick(props.name)}
    >
      <a href="#">
        <span className={styles.icon}>{map[props.name].component}</span>
        <span className={styles.text}>{map[props.name].text}</span>
      </a>
    </li>
  );
}

export default function Indicator() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className="body">
      <div className={styles.navigation}>
        <ul>
          {Object.keys(map).map((each) => (
            <NavItem key={each} name={each} isActive={each == activeTab} onClick={setActiveTab} />
          ))}
          <div className={styles.indicator}></div>
        </ul>
      </div>
    </div>
  );
}
