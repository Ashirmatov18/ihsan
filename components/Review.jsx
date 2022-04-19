import React from "react";
import styles from "../styles/review.module.css";

export default function Review() {
  return (
    <div>
      <div className={styles.back_img}>
        <div>
          <h1
            style={{
              color: "#fff",
              fontSize: "48px",
              paddingTop: "220px",
              paddingLeft: "130px",
            }}
          >
            Счастливые <br /> клиенты
          </h1>
          <div style={{ paddingLeft: "130px" }}>
            <span style={{ color: "#fff", fontSize: "18px" }}>
              Отзывы этих счастливых клиентов помогают <br /> нам достигать
              высот.
            </span>
          </div>
          <button className={styles.but_review}>Больше отзывов</button>
        </div>

        <div className={styles.review_vid}></div>
      </div>
    </div>
  );
}
