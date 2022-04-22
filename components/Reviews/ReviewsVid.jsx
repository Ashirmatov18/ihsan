import React, { useState } from "react";
import styles from "../../styles/reviewvideo.module.css";
import Image from "next/image";
import fis from "../../img/fir.png";

export default function ReviewsVid() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourthModal, setFourthModal] = useState(false);
  const [fifthModal, setFifthModal] = useState(false);
  const [sixModal, setSixModal] = useState(false);
  const [seventhModal, setSeventhModal] = useState(false);
  const [eightModal, setEightModal] = useState(false);

  return (
    <div>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ОТЗЫВЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.main_block}>
        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
        </div>

        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>
      </div>

      <div className={styles.main_block}>
        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>

        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>
      </div>

      <div className={styles.main_block}>
        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>

        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>
      </div>

      <div className={styles.main_block}>
        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>

        <div>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <button
                onClick={() => {
                  setFirstModal(true);
                }}
              ></button>
            </div>
          </div>
          <video src="https://www.youtube.com/watch?v=hvYKrqnY8LM"></video>
        </div>
      </div>

      {firstModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={fis} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button className={styles.buttt} onClick={() => setFirstModal(false)}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}
