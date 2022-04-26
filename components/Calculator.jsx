import React from "react";
import styles from "../styles/calc.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Image from "next/image";
import nedv from "../img/nedv.png";
import auto from "../img/auto.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import usd from "../img/dollar.png";
import euro from "../img/euro.png";
import rub from "../img/rub.png";
import line from "../img/Line.png";

export default function Calculator() {
  const [age, setAge] = React.useState("");
  const [currency, setCurrency] = React.useState("usd");
  const [paymentPercent, setPaymentPercent] = React.useState(50);
  const [costValue, setCostValue] = React.useState(1000);
  const [calculationResult, setCalculationResult] = React.useState({
    cost: costValue,
    firstPayment: (paymentPercent * costValue) / 100,
  });

  const handleClickCur = (newCurrency) => () => {
    setCurrency(newCurrency);
  };

  const handleClickPayment = (newpayment) => () => {
    setPaymentPercent(newpayment);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCalculation = () => {
    setCalculationResult((prevCalculation) => {
      return {
        cost: costValue,
        firstPayment: ((paymentPercent * costValue) / 100).toFixed(0),
      };
    });
  };

  const currencyClass = (value) =>
    `${styles.currency_button} ${currency == value ? styles.active : ""}`;

  const contributionClass = (value) =>
    `${styles.payment_button} ${paymentPercent == value ? styles.active : ""}`;

  return (
    <div className={styles.main_calc}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КАЛЬКУЛЯТОР</h1>
        <hr className={styles.calc_title_line} />
      </div>
      <div className={styles.calc_info}>
        <div className={styles.first_section}>
          <div>
            <button className={styles.but_filter}>
              Недвижимость <Image src={nedv} />
            </button>
            <button className={styles.but_filter_second}>
              Автомобиль <Image src={auto} />{" "}
            </button>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ color: "#00512E" }}>Стоимость - {costValue}$ </h2>
            <Box width={700}>
              <Slider
                // defaultValue={50}
                min={1000}
                max={10000}
                value={costValue}
                onChange={(e) => setCostValue(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
            <div className={styles.but_group}>
              <ButtonGroup
                className={styles.main_buttons}
                disableElevation
                variant="contained"
              >
                <Button
                  className={currencyClass("rub")}
                  onClick={handleClickCur("rub")}
                >
                  Руб
                </Button>
                <Button
                  className={currencyClass("usd")}
                  onClick={handleClickCur("usd")}
                >
                  USD
                </Button>
                <Button
                  className={currencyClass("som")}
                  onClick={handleClickCur("som")}
                >
                  Сом
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div>
            <h2 style={{ color: "#00512E" }}>Первоначальный взнос</h2>
            <ButtonGroup
              className={styles.button_group}
              disableElevation
              variant="contained"
            >
              <Button
                className={contributionClass(25)}
                onClick={handleClickPayment(25)}
                // className={styles.second_but}
              >
                25%
              </Button>
              <Button
                className={contributionClass(35)}
                onClick={handleClickPayment(35)}

                //  className={styles.second_but}
              >
                35%
              </Button>
              <Button
                className={contributionClass(50)}
                onClick={handleClickPayment(50)}
                // className={styles.third_but}
              >
                50%
              </Button>
              <Button className={styles.last_but}>2500$</Button>
            </ButtonGroup>
          </div>
          <div>
            <h2>Срок договора</h2>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  style={{ color: "white", fontSize: "18px" }}
                  id="demo-simple-select-label"
                >
                  Срок
                </InputLabel>
                <Select
                  style={{
                    backgroundColor: "#00512E",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1 год</MenuItem>
                  <MenuItem value={20}>2 года</MenuItem>
                  <MenuItem value={30}>3 года</MenuItem>
                  <MenuItem value={40}>4 года</MenuItem>
                  <MenuItem value={50}>5 лет</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <button className={styles.compute} onClick={handleCalculation}>
              Рассчитать
            </button>
          </div>
        </div>

        <div className={styles.second_section}>
          <div>
            <h4 style={{ color: "#848484" }}>Курс Валют</h4>

            <div className={styles.main_cur}>
              <div className={styles.currency}>
                <div>
                  <span>
                    {" "}
                    <Image src={usd} />
                    <strong style={{ marginLeft: "10px", fontSize: "20px" }}>
                      USD
                    </strong>
                  </span>
                </div>
                <span> 84.90 СОМ</span>
              </div>

              <div className={styles.currency}>
                <div>
                  <span>
                    {" "}
                    <Image src={rub} />
                    <strong style={{ marginLeft: "10px", fontSize: "20px" }}>
                      EUR
                    </strong>
                  </span>
                </div>
                <span> 100.27 СОМ</span>
              </div>

              <div className={styles.currency}>
                <div>
                  <span>
                    {" "}
                    <Image src={euro} />
                    <strong style={{ marginLeft: "10px", fontSize: "20px" }}>
                      РУБ
                    </strong>
                  </span>
                </div>
                <span> 1.14 СОМ</span>
              </div>
            </div>

            <div className={styles.account}>
              <h2 style={{ fontSize: "18px", color: "#FFD600" }}>
                РЕЗУЛЬТАТЫ РАССЧЕТА
              </h2>
              <div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Стоимость Недвижимости:
                    <Image className={styles.img_point} src={line} />
                  </span>
                  <span className={styles.point_price}>
                    {calculationResult.cost}$
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Первоначальный взнос:
                    {/* <span style={{ width: "25px" }}> */}
                    <Image className={styles.img_point} src={line} />
                    {/* </span> */}
                  </span>
                  <span className={styles.point_price}>
                    {calculationResult.firstPayment}$
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Вступительный взнос:
                    <Image className={styles.img_point} src={line} />
                  </span>
                  <span className={styles.point_price}>1335$</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Сумма финансирования:
                    <Image className={styles.img_point} src={line} />
                  </span>
                  <span className={styles.point_price}>11335$</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Ежемесячный платеж:
                    <Image className={styles.img_point} src={line} />
                  </span>
                  <span className={styles.point_price}>1180$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last_one}></div>
    </div>
  );
}
