import RadioSVGMap from "./RadioSvg";
import KgMap from "./map";
// import styles from "../../styles/map.module.css";
import { useState } from "react";

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
    <div className="map_style">
      <div className="kg-map">
        <RadioSVGMap
          map={KgMap}
          locationClassName={getLocationClassName}
          onLocationFocus={handleFocus}
        />
      </div>
      {modal && (
        <div className="info_contacts">
          <h1 style={{ textAlign: "center" }}>{selectRegion.data[0].title}</h1>
          <h1 style={{ textAlign: "center" }}>{selectRegion.id}</h1>
          <div>
            {selectRegion.data.map((item) => (
              <div className="info_kg">
                <div className="street_info">${item.street}</div>
                <div className="phone_info">${item.phone}</div>
              </div>
            ))}
          </div>
          <button className="close_btn" onClick={() => setModal(false)}>
            close
          </button>
        </div>
      )}
    </div>
  );
}

export default MainMap;
