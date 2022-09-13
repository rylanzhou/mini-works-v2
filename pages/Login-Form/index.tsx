import React from 'react';
import styles from './styles.module.scss';

export default function LoginForm() {
  return (
    <div className="body" style={{ backgroundColor: '#23242a' }}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>Sign in</h2>
          <div className={styles['input-box']}>
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>

          <div className={styles['input-box']}>
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <div className={styles.links}>
            <a href="#">Forgot Password</a>
            <a href="#">Sign up</a>
          </div>

          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
}
