import React from "react";
import styles from "../styles/news.module.css";
import Image from "next/image";
import moscow from "../img/moscow.png";
import talas from "../img/talas.png";
import ui from "../img/ui.png";
import map from "../img/map.png";

export default function News() {
  return (
    <div>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <div className={styles.news_main}>
        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={moscow} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>
              Мы открылись <br /> в городе Москва
            </h4>
            <span classname={styles.mini_desc}>
              Теперь вы можете прийти к нам в офис <br /> и получить от наших
              менеджеров <br /> достоверную информацию и задать <br />{" "}
              интересующие вопросы
            </span>
          </div>
        </div>
        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={talas} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>
              Мы открылись <br /> в городе Таласе
            </h4>
            <span classname={styles.mini_desc}>
              Теперь вы можете прийти к нам в офис <br /> и получить от наших
              менеджеров <br /> достоверную информацию и задать <br />{" "}
              интересующие вопросы
            </span>
          </div>
        </div>

        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={ui} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>“Ихсан Уй-було”</h4>
            <span>
              Сиздерди 9-АПРЕЛЬ күнү Бишкек <br /> шаарында, Кожомкул атындагы
              <br /> Спорт br ордосунда өтүүчү...
            </span>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "50px" }} className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НАШИ ФИЛИАЛЫ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>
      <div className={styles.map}>
        <div className={styles.dot}>
          <span>
            <strong style={{ color: "#00512E" }}>
              Филиал <br /> в Москве
            </strong>{" "}
          </span>
        </div>
        <div className={styles.dot_two}>
          <span>
            <strong style={{ color: "#FFD600" }}>Филиал в Нарыне</strong> <br />
            +996 700 00 51 51
          </span>
        </div>
      </div>
    </div>
  );
}
