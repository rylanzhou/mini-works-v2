import React from 'react';
import {
  MdAdd,
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdPerson,
  MdShoppingBag,
  MdShoppingCart,
} from 'react-icons/md';
import styles from './styles.module.scss';

interface RightSecProps {
  darkMode: boolean;
  toggleMenu: () => void;
  toggleDarkMode: (darkMode: boolean) => void;
}

const posts = [
  {
    photo: 'https://joeschmoe.io/api/v1/1',
    name: 'Mike Tyson',
    message: 'received his order of Night lion tech GPS drone.',
    time: '2 Minutes ago',
  },
  {
    photo: 'https://joeschmoe.io/api/v1/2',
    name: 'Mike Tyson',
    message: 'received his order of Night lion tech GPS drone.',
    time: '2 Minutes ago',
  },
  {
    photo: 'https://joeschmoe.io/api/v1/3',
    name: 'Mike Tyson',
    message: 'received his order of Night lion tech GPS drone.',
    time: '2 Minutes ago',
  },
];

export default function RightSec({ darkMode, toggleDarkMode, toggleMenu }: RightSecProps) {
  return (
    <div className={styles['right-sec']}>
      <div className={styles.top}>
        <button onClick={() => toggleMenu()}>
          <span>
            <MdMenu />
          </span>
        </button>
        <div className={styles['theme-toggler']}>
          <span
            className={`${!darkMode ? styles.active : ''}`}
            onClick={() => toggleDarkMode(false)}
          >
            <MdLightMode />
          </span>
          <span className={`${darkMode ? styles.active : ''}`} onClick={() => toggleDarkMode(true)}>
            <MdDarkMode />
          </span>
        </div>
        <div className={styles.profile}>
          <div className={styles.info}>
            <p>
              Hey, <b>Rylan</b>
            </p>
            <small className={styles['text-muted']}>Admin</small>
          </div>
          <div className={styles['profile-photo']}>
            <img
              src="https://res.cloudinary.com/rylanzhou/image/upload/v1661966376/mini-works/Logo_2022_Circle_luqqb5.jpg"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className={styles['recent-updates']}>
        <h2>Recent Updates</h2>
        <div className={styles.updates}>
          {posts.map((each, index) => (
            <div key={index} className={styles.update}>
              <div className={styles['profile-photo']}>
                <img src={each.photo} alt="photo" />
              </div>
              <div className={styles.message}>
                <p>
                  <b>{each.name} </b>
                  {each.message}
                </p>
                <small className={styles['text-muted']}>{each.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['sales-analytics']}>
        <h2>Sales Analytics</h2>
        <div className={`${styles.item} ${styles.online}`}>
          <div className={styles.icon}>
            <MdShoppingCart />
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <h3>ONLINE ORDERS</h3>
              <small className={styles['text-muted']}>Last 24 Hours</small>
            </div>
            <h5 className={styles.success}>+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div className={`${styles.item} ${styles.offline}`}>
          <div className={styles.icon}>
            <MdShoppingBag />
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <h3>OFFLINE ORDERS</h3>
              <small className={styles['text-muted']}>Last 24 Hours</small>
            </div>
            <h5 className={styles.danger}>-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div className={`${styles.item} ${styles.customers}`}>
          <div className={styles.icon}>
            <MdPerson />
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              <h3>CUSTOMERS</h3>
              <small className={styles['text-muted']}>Last 24 Hours</small>
            </div>
            <h5 className={styles.success}>+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div className={`${styles.item} ${styles['add-product']}`}>
          <MdAdd />
          <h3>Add Product</h3>
        </div>
      </div>
    </div>
  );
}
