import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import tap from "../img/Vector (2).png";
import ihs from "../img/ihs.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.title}>
              <Image src={ihs} />
            </div>
            <div className={styles.link} href="#">
              <span>
                Жилищный Кооператив <br /> Ихсан - это добровольное <br />{" "}
                объединение людей, <br />
                с целью совместного <br /> удовлетворения в <br /> недвижимом
                имуществе.
              </span>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>О Кооперативе</div>
            <div className={styles.link} href="#">
              О нас
            </div>
            <div className={styles.link} href="#">
              Почему мы
            </div>
            <div className={styles.link} href="#">
              Отзывы
            </div>
            <div className={styles.link} href="#">
              Новости
            </div>
            <div className={styles.link} href="#">
              Сертификаты
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Наши услуги</div>
            <div className={styles.link} href="#">
              Программы
            </div>
            <div className={styles.link} href="#">
              Гарантии
            </div>
            <div className={styles.link} href="#">
              Преимущества
            </div>
            <div className={styles.link} href="#">
              Условия
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Reach us</div>
            <div className={styles.link} href="#">
              ihsangroup@gmail.io
            </div>
            <div className={styles.link} href="#">
              +996-(555)-555-555
            </div>
            <div className={styles.link} href="#">
              г. Бишкек, Раззакова / Боконбаева 113, <br /> БЦ “Альтаир”,
              3-этаж.
            </div>
            <div className={styles.link} href="#">
              Support
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>Обратная связь</div>
            <div className={styles.link} href="#">
              <input
                className={styles.inp_footer}
                type="text"
                placeholder="Комментарий..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
