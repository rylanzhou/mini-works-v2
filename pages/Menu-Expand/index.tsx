import React, { CSSProperties, useState } from 'react';
import {
  IoAlarmOutline,
  IoCameraOutline,
  IoChatbubbleOutline,
  IoDiamondOutline,
  IoGameControllerOutline,
  IoMoonOutline,
  IoNotificationsOutline,
  IoTimeOutline,
  IoWaterOutline,
} from 'react-icons/io5';
import styles from './styles.module.scss';

export default function MenuExpand() {
  const [isActive, setIsActive] = useState(false);

  const generateCSSProperty = (valueI: number, valueX: number, valueY: number) =>
    ({ '--i': valueI, '--x': valueX, '--y': valueY } as CSSProperties);

  return (
    <div className="body" style={{ backgroundColor: '#10131c' }}>
      <div
        className={`${styles.navigation} ${isActive ? styles.active : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span style={{ ...generateCSSProperty(0, -1, 0) }}>
          <IoCameraOutline />
        </span>
        <span style={{ ...generateCSSProperty(1, 1, 0) }}>
          <IoDiamondOutline />
        </span>
        <span style={{ ...generateCSSProperty(2, 0, -1) }}>
          <IoChatbubbleOutline />
        </span>
        <span style={{ ...generateCSSProperty(3, 0, 1) }}>
          <IoAlarmOutline />
        </span>
        <span style={{ ...generateCSSProperty(4, 1, 1) }}>
          <IoGameControllerOutline />
        </span>
        <span style={{ ...generateCSSProperty(5, -1, -1) }}>
          <IoMoonOutline />
        </span>
        <span style={{ ...generateCSSProperty(6, 0, 0) }}>
          <IoNotificationsOutline />
        </span>
        <span style={{ ...generateCSSProperty(7, -1, 1) }}>
          <IoWaterOutline />
        </span>
        <span style={{ ...generateCSSProperty(8, 1, -1) }}>
          <IoTimeOutline />
        </span>
      </div>
    </div>
  );
}
