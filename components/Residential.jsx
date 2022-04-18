import React from "react";
import styles from "../styles/residential.module.css";
import Image from "next/image";
import halal from "../img/halal.png";
import first from "../img/first.png";
import second from "../img/second.png";
import third from "../img/third.png";
import fourth from "../img/fourth.png";
import fifth from "../img/fifth.png";

export default function Residential() {
  return (
    <div>
      <div className={styles.first_residen}>
        <div className={styles.main_res}>
          <div className={styles.take_res}>
            <div style={{ paddingLeft: "70px", paddingTop: "30px" }}>
              <Image src={halal} />
            </div>
            <h1 style={{ paddingLeft: "70px" }}>
              Приобретение жилья <br /> сегодня с рассрочкой <br /> на 10 лет 0%
            </h1>
            <div style={{ paddingLeft: "70px", opacity: "1" }}>
              <button className={styles.res_but}>Перейти</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>ЖИЛЫЕ КОМПЛЕКСЫ</h1>
          <hr className={styles.calc_title_line} />
        </div>

        <div className={styles.container}>
          <div className={styles.card}>
            <figure className={styles.card__thumb}>
              <Image
                src={first}
                alt="Picture by Kyle Cottrell"
                className={styles.card__image}
              />
              <figcaption className={styles.card__caption}>
                <h2 className={styles.card__title}>IHSAN</h2>
                <p className={styles.card__snippet}>
                  NASA released a list of 219 new “planet candidates” discovered
                  by the Kepler space telescope, 10 of which are similar to
                  Earth’s size and may be habitable by other life forms.
                </p>
                <a href="" className={styles.card__button}>
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className={styles.card}>
            <figure className={styles.card__thumb}>
              <Image
                src={second}
                alt="Picture by Nathan Dumlao"
                className={styles.card__image}
              />
              <figcaption className={styles.card__caption}>
                <h2 className={styles.card__title}>IMRAN</h2>
                <p className={styles.card__snippet}>
                  Drinking more caffeine during the coronavirus lockdown? Here's
                  how it can affect you over time and advice on making it better
                  for you.
                </p>
                <a href="" className={styles.card__button}>
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className={styles.card}>
            <figure className={styles.card__thumb}>
              <Image
                src={third}
                alt="Picture by Daniel Lincoln"
                className={styles.card__image}
              />
              <figcaption className={styles.card__caption}>
                <h2 className={styles.card__title}>ЯСИН</h2>
                <p className={styles.card__snippet}>
                  On Friday, offices around the country celebrated the 15th
                  annual Take Your Dog to Work Day. Though the event's primary
                  goal is to raise awareness for pet adoption, the unanticipated
                  impact may be a slightly more relaxing work environment for
                  any office choosing to participate.
                </p>
                <a href="" className={styles.card__button}>
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className={styles.card}>
            <figure className={styles.card__thumb}>
              <Image
                src={fourth}
                alt="Picture by Nathan Dumlao"
                className={styles.card__image}
              />
              <figcaption className={styles.card__caption}>
                <h2 className={styles.card__title}>ЯСИН </h2>
                <p className={styles.card__snippet}>
                  Drinking more caffeine during the coronavirus lockdown? Here's
                  how it can affect you over time and advice on making it better
                  for you.
                </p>
                <a href="" className={styles.card__button}>
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className={styles.card}>
            <figure className={styles.card__thumb}>
              <Image
                src={fifth}
                alt="Picture by Nathan Dumlao"
                className={styles.card__image}
              />
              <figcaption className={styles.card__caption}>
                <h2 className={styles.card__title}>IMRAN</h2>
                <p className={styles.card__snippet}>
                  Drinking more caffeine during the coronavirus lockdown? Here's
                  how it can affect you over time and advice on making it better
                  for you.
                </p>
                <a href="" className={styles.card__button}>
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
