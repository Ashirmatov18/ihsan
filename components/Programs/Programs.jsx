import React from "react";
import styles from "../../styles/programs.module.css";
import Image from "next/image";
import sec from "../../img/sec.png";
import fir from "../../img/fir.png";
import thi from "../../img/thi.png";
import fo from "../../img/fo.png";
import fif from "../../img/fif.png";
import si from "../../img/si.png";

export default function Programs() {
  return (
    <div>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ПРОГРАММЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Мы подберем программу, <br /> которая подойдет именно для вас
      </h1>

      <div className={styles.main_programms_rate}>
        <div className={styles.programms_rate}>
          <div className={styles.rate_first}>ПРОГРАММЫ</div>
          <div className={styles.rate_first}>ПОПУЛЯРНЫЙ</div>
          <div className={styles.rate_first}>УДОБНЫЙ</div>
          <div className={styles.rate_first}>ВЫГОДНЫЙ</div>
          <div className={styles.rate_first}>АВТО</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>Единоразовая коммисия</div>
          <div className={styles.rate_second}>4%</div>
          <div className={styles.rate_second}>4%</div>
          <div className={styles.rate_second}>4%</div>
          <div className={styles.rate_second}>7%</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>Первоначальный взнос</div>
          <div className={styles.rate_second}>25%</div>
          <div className={styles.rate_second}>35%</div>
          <div className={styles.rate_second}>50%</div>
          <div className={styles.rate_second}>70%</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>
            Варианты <br /> недвижимости
          </div>
          <div className={styles.rate_second}>
            Квартиры, <br /> частные дома{" "}
          </div>
          <div className={styles.rate_second}>
            Квартиры, <br />
            частные дома{" "}
          </div>
          <div className={styles.rate_second}>
            Квартиры, <br />
            частные дома{" "}
          </div>
          <div className={styles.rate_second}>Автомобиль</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>Сумма финансирования</div>
          <div className={styles.rate_second}>от $10000 до $45000</div>
          <div className={styles.rate_second}>от $10000 до $55000</div>
          <div className={styles.rate_second}>от $10000 до $65000</div>
          <div className={styles.rate_second}>от $1000 до $20000</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>
            Срок наступления очереди
          </div>
          <div className={styles.rate_second}>от 6 до 8 месяцев</div>
          <div className={styles.rate_second}>от 4 до 6 месяцев</div>
          <div className={styles.rate_second}>от 1 до 6 месяцев</div>
          <div className={styles.rate_second}>от 1 до 6 месяцев</div>
        </div>

        <div className={styles.programms_rate}>
          <div className={styles.rate_second_main}>Срок рассрочки</div>
          <div className={styles.rate_second}>до 10 лет</div>
          <div className={styles.rate_second}>до 10 лет</div>
          <div className={styles.rate_second}>до 10 лет</div>
          <div className={styles.rate_second}>до 3 лет</div>
        </div>

        <div className={styles.programms_note}>
          <div className={styles.note}>ПРИМЕЧАНИЯ</div>
          <div className={styles.last_note}>
            ЧАСТНЫЙ ДОМ ПОСТРОЙКИ ВЫШЕ 2000-ГОДА.
          </div>
          <div className={styles.last_note}>
            КВАРТИРА ПОСТРОЙКИ ВЫШЕ 1965-ГОДА. Copy
          </div>
        </div>
      </div>

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>
            ЭТАПЫ ПРИОБРЕТЕНИЯ ИМУЩЕСТВА
          </h1>
          <hr className={styles.calc_title_line_two} />
        </div>
        <h1 className={styles.tittle_first}>Ваши шаги к мечте!</h1>
        <div className={styles.image_bot}>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fir} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={sec} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={thi} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fo} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fif} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={si} />
          </div>
        </div>
      </div>
    </div>
  );
}
