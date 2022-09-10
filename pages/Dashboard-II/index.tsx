import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import RightSec from './RightSec';
import styles from './styles.module.scss';

export default function DashboardII() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${styles.body} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <Sidebar menuOpen={menuOpen} toggleMenu={() => setMenuOpen(false)} />
        <Main />
        <RightSec
          toggleMenu={() => setMenuOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}
