///
///
///
///Рассчет дневного лимита (рассчет происходит по
///формуле Миффлина-Сан Жеора. Информация об этой
///формуле, можно увидеть либо здесь, либо в интернете)
///
///
///
import "./YourMax.css";
import React, { useState, useEffect } from "react";

function YourMax({ onCloseMax, onConfirmMax, LANG_CH }) {
  const [InputAge, setAge] = useState("");
  const [InputRoct, setRoct] = useState("");
  const [InputVes, setVes] = useState("");
  const [isAnimating, setAnimating] = useState(false);

  const [selectedGender, setSelectedGender] = useState("Мужчина");
  const [selectedAct, setSelectedAct] = useState("very_low");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 750);

  //Обновление состояния isSmallScreen (в зависимости от ширины
  //окна)
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Начальные значения для переменных.
  var activ = 1.2;
  var your_result = 0;
  //Активность (5 уровней активности)
  const handleConfirmClick = () => {
    switch (selectedAct) {
      case "very_low":
        activ = 1.2;
        break;
      case "low":
        activ = 1.375;
        break;
      case "medium":
        activ = 1.55;
        break;
      case "high":
        activ = 1.7;
        break;
      case "very_high":
        activ = 1.9;
        break;
    }
    //Гендер
    if (selectedGender === "Мужчина") {
      your_result = Math.floor(
        66.5 + (13.75 * InputVes + 5.003 * InputRoct - 6.775 * InputAge) * activ
      );
    } else {
      your_result = Math.floor(
        655.1 + (9.563 * InputVes + 1.85 * InputRoct - 4.676 * InputAge) * activ
      );
    }
    //Отправка данных обратно в App
    onConfirmMax(your_result);
  };

  //Закрытие окошка
  const handleClose = () => {
    setAnimating(true);
    setTimeout(() => {
      onCloseMax();
    }, 395);
  };
  //Закрытие окошка (но с учетом отправки данных)
  const handleConf = () => {
    setAnimating(true);
    setTimeout(() => {
      handleConfirmClick();
    }, 395);
  };

  //Выбранный гендер
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  //Выбранная активность
  const handleActChange = (act) => {
    setSelectedAct(act);
  };

  //Обычное окошка, с полем ввода данных (возвраст, вес,
  //рост, активность, гендер)
  return (
    <div
      className={`item_wrap_max ${
        isAnimating ? "light_pop1_max" : "dark_pop1_max"
      }`}
    >
      <div
        className={`item_menu_max ${
          isAnimating ? "closing_pop_max" : "open_pop_max"
        }`}
      >
        <label className="labels_max">{LANG_CH.GenderU}</label>
        <div className="gender_max">
          <label>
            <input
              type="radio"
              value="Мужчина"
              checked={selectedGender === "Мужчина"}
              onChange={() => handleGenderChange("Мужчина")}
            />{" "}
            {LANG_CH.ManU}
          </label>
          <label>
            <input
              type="radio"
              value="Женщина"
              checked={selectedGender === "Женщина"}
              onChange={() => handleGenderChange("Женщина")}
            />{" "}
            {LANG_CH.WomanU}
          </label>
        </div>
        {!isSmallScreen && (
          <div className="max_data_max">
            <label className="labels_max">{LANG_CH.AgeU}</label>
            <label className="labels_max">{LANG_CH.RoctU}</label>
            <label className="labels_max">{LANG_CH.VesU}</label>
            <input
              placeholder="18"
              className="input_max"
              type="number"
              value={InputAge}
              onChange={(e) => setAge(e.target.value)}
            ></input>
            <input
              placeholder="180"
              className="input_max"
              type="number"
              value={InputRoct}
              onChange={(e) => setRoct(e.target.value)}
            ></input>
            <input
              placeholder="75"
              className="input_max"
              type="number"
              value={InputVes}
              onChange={(e) => setVes(e.target.value)}
            ></input>
          </div>
        )}
        {isSmallScreen && (
          <div className="max_data_max">
            <label className="labels_max">{LANG_CH.AgeU}</label>
            <input
              placeholder="18"
              className="input_max"
              type="number"
              value={InputAge}
              onChange={(e) => setAge(e.target.value)}
            ></input>
            <label className="labels_max">{LANG_CH.RoctU}</label>
            <input
              placeholder="180"
              className="input_max"
              type="number"
              value={InputRoct}
              onChange={(e) => setRoct(e.target.value)}
            ></input>
            <label className="labels_max">{LANG_CH.VesU}</label>
            <input
              placeholder="75"
              className="input_max"
              type="number"
              value={InputVes}
              onChange={(e) => setVes(e.target.value)}
            ></input>
          </div>
        )}
        <label className="labels_max">{LANG_CH.FizU}</label>
        <select
          className="activity_max"
          name="activityy"
          onChange={(e) => handleActChange(e.target.value)}
        >
          <option value="very_low">{LANG_CH.Level1}</option>
          <option value="low">{LANG_CH.Level2}</option>
          <option value="moderate">{LANG_CH.Level3}</option>
          <option value="high">{LANG_CH.Level4}</option>
          <option value="very_high">{LANG_CH.Level5}</option>
        </select>
        <div className="buttons_max">
          <button
            className="but_max"
            onClick={() => {
              handleConf();
            }}
          >
            {LANG_CH.ButConfirm}
          </button>
          <button className="but_max" onClick={handleClose}>
            {LANG_CH.ButReject}
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourMax;
