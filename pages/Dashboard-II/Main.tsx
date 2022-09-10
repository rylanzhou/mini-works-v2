import React from 'react';
import { MdAnalytics, MdBarChart, MdStackedLineChart } from 'react-icons/md';

import styles from './styles.module.scss';

const data = [
  {
    name: 'Foldable Mini Drone',
    number: 85631,
    payment: 'Due',
    status: 'Pending',
  },
  {
    name: 'Foldable Mini Drone',
    number: 85631,
    payment: 'Due',
    status: 'Pending',
  },
  {
    name: 'Foldable Mini Drone',
    number: 85631,
    payment: 'Due',
    status: 'Pending',
  },
  {
    name: 'Foldable Mini Drone',
    number: 85631,
    payment: 'Due',
    status: 'Pending',
  },
  {
    name: 'Foldable Mini Drone',
    number: 85631,
    payment: 'Due',
    status: 'Pending',
  },
];

export default function Main() {
  const getStatusClass = (status: string) => {
    if (status === 'Pending') {
      return styles.warning;
    }
  };

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>

      <div className={styles.date}>
        <input type="date" />
      </div>

      <div className={styles.insights}>
        <div className={styles.sales}>
          <i>
            <MdAnalytics />
          </i>
          <div className={styles.middle}>
            <div className="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div className={styles.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.number}>
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className={styles['text-muted']}>Last 24 Hours</small>
        </div>

        <div className={styles.expenses}>
          <i>
            <MdBarChart />
          </i>
          <div className={styles.middle}>
            <div className="left">
              <h3>Total Expense</h3>
              <h1>$14,160</h1>
            </div>
            <div className={styles.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.number}>
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className={styles['text-muted']}>Last 24 Hours</small>
        </div>

        <div className={styles.income}>
          <i>
            <MdStackedLineChart />
          </i>
          <div className={styles.middle}>
            <div className="left">
              <h3>Total Income</h3>
              <h1>$10,864</h1>
            </div>
            <div className={styles.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.number}>
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className={styles['text-muted']}>Last 24 Hours</small>
        </div>
      </div>

      <div className={styles['recent-order']}>
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((each, index) => (
              <tr key={index}>
                <td>{each.name}</td>
                <td>{each.number}</td>
                <td>{each.payment}</td>
                <td>
                  <span className={getStatusClass(each.status)}>{each.status}</span>
                </td>
                <td>
                  <span className={styles.primary}>Details</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <a href="#">Show All</a>
      </div>
    </main>
  );
}
