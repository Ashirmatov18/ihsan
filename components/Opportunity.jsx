import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/opportunity.module.css";
import halal from "../img/halal.png";
import sofy from "../img/sofy.jpg";
import w from "../img/w.jpg";
import m from "../img/m.jpg";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function Opportunity() {
  const [modal, setModal] = useState(false);

  let domnode = useClickOutside(() => {
    setModal(false);
  });

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
      <div ref={domnode} className={styles.contact}>
        <div className={styles.contact_us} onClick={() => setModal(true)}>
          <div>
            <Image src={w} />
          </div>
          <div>
            <Image src={m} />
          </div>
        </div>
      </div>

      {modal && (
        <div className={styles.modal_winow}>
          <div className={styles.open_line}>
            <span>Открытая линия IHSAN</span>
          </div>
          <div className={styles.helpers}>
            <div className={styles.online}>
              <span>
                <strong> Мы онлайн </strong>
                <br /> И готовы вам помочь
              </span>
            </div>
            <div className={styles.team}>
              <div className={styles.team_helpers}>
                <Image src={sofy} />
                <p>Мария</p>
              </div>
              <div className={styles.team_helpers}>
                <Image src={sofy} />
                <p>Мария</p>
              </div>
              <div className={styles.team_helpers}>
                <Image src={sofy} />
                <p>Мария</p>
              </div>
            </div>
          </div>
          <input
            className={styles.feedback}
            type="text"
            name=""
            id=""
            placeholder="Напишите сообщение"
          />
        </div>
      )}
    </div>
  );
}
