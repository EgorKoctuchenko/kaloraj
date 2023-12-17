import "./AddItem.css";
import React, { useState } from "react";

function AddItem({ onClose, onConfirm }) {
  const [InputName, setDishName] = useState("");
  const [InputGramm, setWeight] = useState("");
  const [InputCcal, setCalories] = useState("");

  const handleConfirmClick = () => {
    onConfirm({ InputName, InputGramm, InputCcal });
  };

  return (
    <div className="item_wrap">
      <div className="item_menu">
        <label className="label_cl">Введите название блюда</label>
        <input
          placeholder="Яблоко"
          className="input_cl"
          type="text"
          value={InputName}
          onChange={(e) => setDishName(e.target.value)}
        ></input>
        <label className="label_cl">Введите вес (в граммах)</label>
        <input
          placeholder="100"
          className="input_cl"
          type="number"
          value={InputGramm}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <label className="label_cl">Введите калорийность (на 100гр)</label>
        <input
          placeholder="56"
          className="input_cl"
          type="number"
          value={InputCcal}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="but" onClick={handleConfirmClick}>
            Подтвердить
          </button>
          <button className="but" onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
