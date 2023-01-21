import { useRouter } from 'next/router';
import {
  FaAddressBook,
  FaBalanceScale,
  FaBath,
  FaBatteryHalf,
  FaBell,
  FaBicycle,
  FaBolt,
  FaBullhorn,
  FaBus,
  FaCode,
  FaComment,
  FaCompress,
  FaGift,
  FaGithub,
  FaGlasses,
  FaGlobe,
  FaHeart,
  FaHourglassHalf,
  FaShower,
  FaThermometer,
  FaTrain,
  FaTwitch,
  FaUserTag,
  FaYoutube,
} from 'react-icons/fa';
import styles from './styles.module.scss';

import { frontendMentor, links } from './Constants';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={styles.row}>
              {Array(2)
                .fill(0)
                .map((_, j) => (
                  <div key={j}>
                    <FaAddressBook />
                    <FaBath />
                    <FaShower />
                    <FaThermometer />
                    <FaBalanceScale />
                    <FaBatteryHalf />
                    <FaBell />
                    <FaBicycle />
                    <FaCode />
                    <FaBolt />
                    <FaBullhorn />
                    <FaComment />
                    <FaGift />
                    <FaGlasses />
                    <FaGlobe />
                    <FaHourglassHalf />
                    <FaHeart />
                    <FaTwitch />
                    <FaYoutube />
                    <FaBus />
                    <FaTrain />
                    <FaUserTag />
                    <FaCompress />
                  </div>
                ))}
            </div>
          ))}
      </div>

      <div className={styles.title}>
        <h1 className={styles.rylan}>
          Rylan<span>&apos;</span>s
        </h1>
        <h1 className={styles['mini-pages']}>Mini Pages</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {links.map((link, index) => (
            <div className={styles.tile} key={index} onClick={() => router.push(`./${link}`)}>
              <span>{link.replace(/-/g, ' ')}</span>
            </div>
          ))}
        </div>

        <hr style={{ margin: '3rem 0' }} />

        <h1 className={styles['frontend-mentor-h1']}>Frontend Mentor Challenges</h1>
        <div className={styles.grid}>
          {frontendMentor.map((each, index) => (
            <div className={`${styles.tile} ${styles['frontend-mentor']}`} key={index}>
              <span onClick={() => router.push(each.url)}>{each.title}</span>
              <div className={styles.github}>
                <a href={each.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
