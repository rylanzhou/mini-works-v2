import React, { useState } from 'react';
import { GiHiking, GiPineTree, GiSnowflake2, GiSun, GiWaterDrop } from 'react-icons/gi';

import styles from './styles.module.scss';

const BASE_URL = 'https://source.unsplash.com/';

const images = {
  hiking: {
    url: 'sDRNwsezLU8',
    icon: <GiHiking />,
    location: 'Aguas Calientes, Peru',
  },
  winter: { url: 'xAgvgQpYsf4', icon: <GiSnowflake2 />, location: 'Mittelberg, Austria' },
  summer: { url: 'wtBex4wQw60', icon: <GiSun />, location: 'Split, Croatie' },
  rain: { url: '8yt8kBuEqok', icon: <GiWaterDrop />, location: 'Unknown' },
  forest: { url: 'sp-p7uuT0tw', icon: <GiPineTree />, location: 'Bad Pyrmont, Deutschland' },
};

export default function ResponsiveAccordion() {
  const [activeTab, setActiveTab] = useState<keyof typeof images>('hiking');

  const setCSSProperty = (url: string) => ({ '--image-url': `url(${url})` } as React.CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#212121' }}>
      <div className={styles.container}>
        {Object.entries(images).map(([key, entry]) => (
          <div
            key={key}
            className={styles.accordion}
            aria-hidden={activeTab !== key}
            style={setCSSProperty(`${BASE_URL}${entry.url}`)}
            onClick={() => setActiveTab(key as keyof typeof images)}
          >
            <div className={styles.content}>
              <div className={styles.icon} data-name={key}>
                {entry.icon}
              </div>
              <div className={styles.text}>
                <h4>{key}</h4>
                <span>{entry.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
