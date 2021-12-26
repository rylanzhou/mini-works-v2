import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Rylan&apos;s Mini Pages</h1>
      </header>

      <iframe src="./3D-Card" frameBorder="0"></iframe>
    </div>
  );
}
