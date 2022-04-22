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

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>
            ЭТАПЫ ПРИОБРЕТЕНИЯ ИМУЩЕСТВА
          </h1>
          <hr className={styles.calc_title_line_two} />
        </div>
        <h1 className={styles.tittle_first}>Ваши шаги к мечте!</h1>
        <div className={styles.image_bot}>
          <Image className={styles.img_num} src={fir} />
          <Image className={styles.img_num} src={sec} />
          <Image className={styles.img_num} src={thi} />
          <Image className={styles.img_num} src={fo} />
          <Image className={styles.img_num} src={fif} />
          <Image className={styles.img_num} src={si} />
        </div>
      </div>
    </div>
  );
}
