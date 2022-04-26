import React, { useState } from "react";
import styles from "../../styles/reviewvideo.module.css";
import Image from "next/image";
import fis from "../../img/fir.png";
import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

export default function ReviewsVid() {
  const videoRef = useRef();

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourthModal, setFourthModal] = useState(false);
  const [fifthModal, setFifthModal] = useState(false);
  const [sixModal, setSixModal] = useState(false);
  const [seventhModal, setSeventhModal] = useState(false);
  const [eightModal, setEightModal] = useState(false);

  // if (
  //   firstModal ||
  //   secondModal ||
  //   thirdModal ||
  //   fourthModal ||
  //   fifthModal ||
  //   sixModal ||
  //   seventhModal ||
  //   eightModal
  // ) {
  //   document.body.classList.add("active_modal");
  // } else {
  //   document.body.classList.remove("active_modal");
  // }

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
        <CloudinaryContext cloud_name="codedog">
          <div>
            <Video
              publicId="videoplayer-demo"
              width="100%"
              controls
              innerRef={videoRef}
            />
          </div>
        </CloudinaryContext>
      </div>

      {firstModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <button
              className={styles.buttt}
              onClick={() => setFirstModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
