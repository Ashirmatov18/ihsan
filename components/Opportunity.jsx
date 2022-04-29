import React from "react";
import Image from "next/image";
import styles from "../styles/opportunity.module.css";
import halal from "../img/halal.png";

export default function Opportunity() {
  return (
    <div className={styles.main_info}>
      <div className={styles.info_stats}>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>1300+</strong> <br /> <br />
          Планировок <br /> квартир
        </span>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>74+</strong> <br /> <br />
          Реализовано <br /> обьектов
        </span>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>380+</strong> <br /> <br />
          Счастливых <br /> клиентов
        </span>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>216+</strong> <br /> <br />
          Строительных <br /> бригад
        </span>
      </div>
      <div className={styles.opportunity_text}>
        <div className={styles.halal}>
          <Image src={halal} />
        </div>
        <div className={styles.bottom_info}>
          <h1 className={styles.main_char}>
            Возможность купить жильё <br /> по самым выгодным ценам
          </h1>
          <button className={styles.butt}>Перейти</button>
        </div>
      </div>
    </div>
  );
}
