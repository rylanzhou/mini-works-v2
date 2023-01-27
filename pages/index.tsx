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

const links = [
  '3D-Card',
  '3D-Menu',
  'Calculator',
  'Car-Chasing',
  'Card-Slider',
  'Cigarette',
  'Circular-Progress',
  'Dark-Mode-Menu',
  'Dashboard',
  'Dashboard-II',
  'Delete-Button',
  'Fingerprint-Scanner',
  'Glassmorphism-Card',
  'Indicator',
  'Iphone-Dynamic-Island',
  'Keyboard',
  'Login-Form',
  'Menu-Expand',
  'Menu-Expand-II',
  'Menu-Hover',
  'Prettier-Logo',
  'Responsive-Hover',
  'Rotate-Text',
  'Submit-Button',
  'Switch',
  'Text-Focus-Effect',
  'TikTok-Logo',
  'Typing-Text',
  'Vertical-Menu',
  // 'Learning-Masked-Buttons',
  // 'Learning-Windows-Loading',
];

const frontendMentor = [
  {
    title: 'Multi-Step Form',
    url: 'https://frontend-mentor-multi-step-form-nu.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-multi-step-form',
  },
  {
    title: 'Comment & Vote',
    url: 'https://frontend-mentor-interactive-comments-section-plum.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-interactive-comments-section',
  },
  {
    title: 'Expense chart',
    url: 'https://frontend-mentor-expense-chart-component.vercel.app',
    github: 'https://github.com/RylanZhou/frontend-mentor-expense-chart-component',
  },
  {
    title: 'Intro section',
    url: 'https://frontend-mentor-intro-section-with-dropdown-navigation-kappa.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-intro-section-with-dropdown-navigation',
  },
  {
    title: 'Interactive card',
    url: 'https://frontend-mentor-interactive-card-details-form-nine.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-interactive-card-details-form',
  },
  {
    title: 'Notifications',
    url: 'https://frontend-mentor-notifications-page-chi.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-notifications-page',
  },
  {
    title: 'News Homepage',
    url: 'https://frontend-mentor-news-homepage-gules.vercel.app/',
    github: 'https://github.com/RylanZhou/frontend-mentor-news-homepage',
  },
];

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
              <span>
                <a href={each.url} target="_blank" rel="noreferrer">
                  {each.title}
                </a>
              </span>
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
