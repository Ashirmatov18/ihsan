import RadioSVGMap from "./RadioSvg";
import KgMap from "./map";
import { useState } from "react";
import styles from "../../styles/maps.module.css";
import Image from "next/image";
import kg from "../../img/kg.png";
import rus from "../../img/ru.png";
import ru from "../../img/russian.png";

const options = [
  {
    id: "issyk",
    data: [
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
    ],
  },
  { id: "osh", data: [{ street: "test osh street", phone: "test osh phone" }] },
  {
    id: "chui",
    data: [{ street: "test issyk street", phone: "test issyk phone" }],
  },
  {
    id: "talas",
    data: [{ street: "test osh street", phone: "test osh phone" }],
  },
  {
    id: "jalal-abad",
    data: [{ street: "test issyk street", phone: "test issyk phone" }],
  },
  {
    id: "batken",
    data: [{ street: "test osh street", phone: "test osh phone" }],
  },
  {
    id: "naryn",
    data: [{ street: "test osh street", phone: "test osh phone" }],
  },
];

function MainMap() {
  const [focusedLocation, setFocusedLocation] = useState(null);

  const [selectRegion, setSelectedRegion] = useState(options[0]);

  const [modal, setModal] = useState(false);

  const getLocationName = (event) => {
    return event.target.attributes.name.value;
  };

  const handleFocus = (event, location) => {
    const focusedLocation = getLocationName(event);
    setSelectedRegion(options.find((item) => focusedLocation === item.id));
    setModal(true);
    setFocusedLocation(focusedLocation);
    console.log(selectRegion.data[0].title);
  };

  const getLocationClassName = (location, index) => {
    return `svg-map__location svg-map__location--heat${index % 15}`;
  };

  return (
    <>
      <div className={styles.main_calc}>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НАШИ ФИЛИАЛЫ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <div className={styles.kg_map_info}>
        <Image src={kg} />
        <div className={styles.country}>
          <span>Кыргызстан </span>
        </div>
      </div>
      <div className="map_style">
        <div className="kg-map">
          <RadioSVGMap
            className={styles.main_map}
            map={KgMap}
            locationClassName={getLocationClassName}
            onLocationFocus={handleFocus}
          />
        </div>
        {modal && (
          <div className={styles.info_contacts}>
            <h1 style={{ textAlign: "center" }}>
              {selectRegion.data[0].title}
            </h1>
            <h1 style={{ textAlign: "center" }}>{selectRegion.id}</h1>
            <div>
              {selectRegion.data.map((item) => (
                <div className={styles.info_kg}>
                  <div className={styles.street_info}>${item.street}</div>
                  <div className={styles.phone_info}>${item.phone}</div>
                </div>
              ))}
            </div>
            <button
              className={styles.close_btn}
              onClick={() => setModal(false)}
            >
              close
            </button>
          </div>
        )}
      </div>

      <div className={styles.russian_map}>
        <div className={styles.rus_map_info}>
          <Image src={rus} />
          <div className={styles.country}>
            <span>Россия</span>
          </div>
        </div>
        <div>
          <Image src={ru} />
        </div>
      </div>
    </>
  );
}

export default MainMap;
