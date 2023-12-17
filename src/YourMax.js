import "./YourMax.css";
import React, { lazy, useState } from "react";

function YourMax({ onCloseMax, onConfirmMax, LANG_CH }) {
  const [InputAge, setAge] = useState("");
  const [InputRoct, setRoct] = useState("");
  const [InputVes, setVes] = useState("");

  const [selectedGender, setSelectedGender] = useState("Мужчина");
  const [selectedAct, setSelectedAct] = useState("very_low");

  var activ = 1.2;
  var your_result = 0;
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
    if (selectedGender === "Мужчина") {
      your_result = Math.floor(
        66.5 + (13.75 * InputVes + 5.003 * InputRoct - 6.775 * InputAge) * activ
      );
    } else {
      your_result = Math.floor(
        655.1 + (9.563 * InputVes + 1.85 * InputRoct - 4.676 * InputAge) * activ
      );
    }
    console.log(your_result);
    onConfirmMax(your_result);
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  const handleActChange = (act) => {
    setSelectedAct(act);
  };

  return (
    <div className="item_wrap">
      <div className="item_menu">
        <label className="labels_max">{LANG_CH.GenderU}</label>
        <div className="gender">
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
        <div className="max_data">
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
        <label className="labels_max">{LANG_CH.FizU}</label>
        <select
          className="activity"
          name="activityy"
          onChange={(e) => handleActChange(e.target.value)}
        >
          <option value="very_low">{LANG_CH.Level1}</option>
          <option value="low">{LANG_CH.Level2}</option>
          <option value="moderate">{LANG_CH.Level3}</option>
          <option value="high">{LANG_CH.Level4}</option>
          <option value="very_high">{LANG_CH.Level5}</option>
        </select>
        <div className="buttons">
          <button className="but" onClick={handleConfirmClick}>
            {LANG_CH.ButConfirm}
          </button>
          <button className="but" onClick={onCloseMax}>
            {LANG_CH.ButReject}
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourMax;
