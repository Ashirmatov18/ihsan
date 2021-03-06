import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import tap from "../img/Vector (2).png";
import ihs from "../img/ihs.png";
import message from "../img/Message.png";
import phone from "../img/Mobile.png";
import location from "../img/Location.png";
import insta from "../img/instagram.png";
import you from "../img/you.png";
import what from "../img/what.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.first_column}>
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
              <div className={styles.icons_link}>
                <div>
                  <Image src={insta} />
                </div>
                <div>
                  <Image src={what} />
                </div>
                <div>
                  <Image src={you} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main_link}>
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
                <Image src={message} />
                <span style={{ marginLeft: "10px" }}>ihsangroup@gmail.io</span>
              </div>
              <div className={styles.link} href="#">
                <Image src={phone} />
                <span style={{ marginLeft: "10px" }}>+996-(555)-555-555</span>
              </div>
              <div className={styles.link} href="#">
                <Image src={location} />
                <span style={{ marginLeft: "10px" }}>
                  г. Бишкек, Раззакова / Боконбаева 113, <br /> БЦ “Альтаир”,
                  3-этаж.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.feedback}>
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
      <div></div>
      <div className={styles.ihsangroup}>
        <span>Ihsangroup © 2022 все права защищены</span>
      </div>
    </div>
  );
}
