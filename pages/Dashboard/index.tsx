import React, { useState } from 'react';
import {
  IoLogoApple,
  IoHomeOutline,
  IoPeopleOutline,
  IoChatbubblesOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoLockClosedOutline,
  IoLogOutOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoEyeOutline,
  IoCartOutline,
  IoCashOutline,
} from 'react-icons/io5';
import Image from 'next/image';

import styles from './styles.module.scss';

const navMenu = [
  { title: 'Brand Name', icon: <IoLogoApple /> },
  { title: 'Dashboard', icon: <IoHomeOutline /> },
  { title: 'Customers', icon: <IoPeopleOutline /> },
  { title: 'Messages', icon: <IoChatbubblesOutline /> },
  { title: 'Help', icon: <IoHelpOutline /> },
  { title: 'Settings', icon: <IoSettingsOutline /> },
  { title: 'Password', icon: <IoLockClosedOutline /> },
  { title: 'Sign Out', icon: <IoLogOutOutline /> },
];

const cardData = [
  { title: 'Daily Views', number: '1,504', icon: <IoEyeOutline /> },
  { title: 'Sales', number: '80', icon: <IoCartOutline /> },
  { title: 'Comments', number: '284', icon: <IoChatbubblesOutline /> },
  { title: 'Earning', number: '$7,820', icon: <IoCashOutline /> },
];

enum DeliveryStatus {
  DELIVERED = 'Delivered',
  PENDING = 'Pending',
  RETURN = 'Return',
  IN_PROGRESS = 'In Progress',
}

enum PaymentStatus {
  PAID = 'Paid',
  DUE = 'Due',
}

const tableData = [
  ['Star Refrigerator', '$1200', PaymentStatus.PAID, DeliveryStatus.DELIVERED],
  ['Window Coolers', '$110', PaymentStatus.DUE, DeliveryStatus.PENDING],
  ['Speakers', '$620', PaymentStatus.PAID, DeliveryStatus.RETURN],
  ['HP Laptop', '$988', PaymentStatus.PAID, DeliveryStatus.IN_PROGRESS],
  ['Apple Watch', '$738', PaymentStatus.DUE, DeliveryStatus.DELIVERED],
  ['Wall Fan', '$43', PaymentStatus.PAID, DeliveryStatus.RETURN],
  ['Adidas Shoes', '$99', PaymentStatus.DUE, DeliveryStatus.IN_PROGRESS],
  ['Denim Shirts', '$32', PaymentStatus.DUE, DeliveryStatus.PENDING],
  ['Casual Shoes', '$11', PaymentStatus.PAID, DeliveryStatus.PENDING],
  ['Wall Fan', '$40', PaymentStatus.PAID, DeliveryStatus.IN_PROGRESS],
  ['Denim Shirts', '$30', PaymentStatus.PAID, DeliveryStatus.DELIVERED],
];

const customersData = [
  { name: 'David', country: 'Italy', avatar: 'https://joeschmoe.io/api/v1/joe' },
  { name: 'Muhammad', country: 'India', avatar: 'https://joeschmoe.io/api/v1/jai' },
  { name: 'Amelia', country: 'France', avatar: 'https://joeschmoe.io/api/v1/jed' },
  { name: 'Olivia', country: 'USA', avatar: 'https://joeschmoe.io/api/v1/jeri' },
  { name: 'Amit', country: 'Japan', avatar: 'https://joeschmoe.io/api/v1/jana' },
  { name: 'Amit', country: 'Japan', avatar: 'https://joeschmoe.io/api/v1/jazebelle' },
  { name: 'Ashraf', country: 'Inda', avatar: 'https://joeschmoe.io/api/v1/jake' },
  { name: 'Diana', country: 'Malaysia', avatar: 'https://joeschmoe.io/api/v1/jenni' },
  { name: 'Robert', country: 'Canada', avatar: 'https://joeschmoe.io/api/v1/jerry' },
];

const styleMap = {
  [DeliveryStatus.DELIVERED]: 'delivered',
  [DeliveryStatus.PENDING]: 'pending',
  [DeliveryStatus.RETURN]: 'return',
  [DeliveryStatus.IN_PROGRESS]: 'in-progress',
};

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [activePanelIndex, setActivePanelIndex] = useState(1);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={`${styles.navigation} ${isActive ? styles.active : ''}`}>
          <ul>
            {navMenu.map((each, index) => (
              <li
                className={`${activePanelIndex === index ? styles.active : ''}`}
                key={each.title}
                onClick={() => setActivePanelIndex(index)}
              >
                <a href="#">
                  <span className={styles.icon}>{each.icon}</span>
                  <span className={styles.title}>{each.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.main} ${isActive ? styles.active : ''}`}>
          {/* Top Bar */}
          <div className={styles.topbar}>
            <div className={styles.toggle} onClick={() => setIsActive(!isActive)}>
              <IoMenuOutline />
            </div>

            <div className={styles.search}>
              <label>
                <input type="text" placeholder="Search" />
                <IoSearchOutline />
              </label>
            </div>

            <div className={styles.user}>
              <Image src="https://joeschmoe.io/api/v1/jess" alt="Avatar" width="100" height="100" />
            </div>
          </div>

          {/* Cards */}
          <div className={styles['card-box']}>
            {cardData.map((each) => (
              <div key={each.title} className={styles.card}>
                <div>
                  <div className={styles.numbers}>{each.number}</div>
                  <div className={styles.name}>{each.title}</div>
                </div>
                <div className={styles.icon}>{each.icon}</div>
              </div>
            ))}
          </div>

          <div className={styles.details}>
            {/* Data table */}
            <div className={styles['recent-orders']}>
              <div className={styles['card-header']}>
                <h2>Recent Orders</h2>
                <a href="#" className={styles.btn}>
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((each, index) => (
                    <tr key={index}>
                      {each.map((data, index2) => (
                        <td key={`${index}-${index2}`}>
                          {index2 === each.length - 1 ? (
                            <span className={`${styles.status} ${styles[styleMap[data]]}`}>
                              {data}
                            </span>
                          ) : (
                            data
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New Customers */}
            <div className={styles['recent-customers']}>
              <div className={styles['card-header']}>
                <h2>Recent Customers</h2>
              </div>
              <table>
                <tbody>
                  {customersData.map((each, index) => (
                    <tr key={index}>
                      <td width="60px">
                        <div className={styles.img}>
                          <Image src={each.avatar} alt="Avatar" width="100" height="100" />
                        </div>
                      </td>
                      <td>
                        <h4>{each.name}</h4>
                        <span>{each.country}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
