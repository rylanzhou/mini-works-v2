import React, { useState } from 'react';
import {
  MdAdd,
  MdClose,
  MdGridView,
  MdInsights,
  MdInventory,
  MdLogout,
  MdMailOutline,
  MdPersonOutline,
  MdReceiptLong,
  MdReportGmailerrorred,
  MdSettings,
} from 'react-icons/md';

import styles from './styles.module.scss';

interface SidebarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const navMenu = [
  { title: 'Dashboard', icon: <MdGridView /> },
  { title: 'Customers', icon: <MdPersonOutline /> },
  { title: 'Orders', icon: <MdReceiptLong /> },
  { title: 'Analytics', icon: <MdInsights /> },
  { title: 'Messages', icon: <MdMailOutline />, count: 26 },
  { title: 'Products', icon: <MdInventory /> },
  { title: 'Reports', icon: <MdReportGmailerrorred /> },
  { title: 'Settings', icon: <MdSettings /> },
  { title: 'Add Product', icon: <MdAdd /> },
  { title: 'Logout', icon: <MdLogout /> },
];

export default function Sidebar({ menuOpen, toggleMenu }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <aside className={`${styles.aside} ${menuOpen ? styles['is-open'] : ''}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/rylanzhou/image/upload/v1661966376/mini-works/Logo_2022_Circle_luqqb5.jpg"
            alt="Logo"
          />
          <h2>
            RYLAN <span className={styles.danger}>ZHOU</span>
          </h2>
        </div>
        <div className={styles.close} onClick={() => toggleMenu()}>
          <MdClose />
        </div>
      </div>

      <div className={styles.sidebar}>
        {navMenu.map((each) => (
          <a className={`${activeMenu === each.title && styles.active}`} href="#" key={each.title}>
            <span>{each.icon}</span>
            <h3>{each.title}</h3>
            {each.count && <div className={styles.count}>{each.count}</div>}
          </a>
        ))}
      </div>
    </aside>
  );
}
