import "./RenameItem.css";
import React, { useState } from "react";

function RenameItem({
  onRenameItem,
  onConfirmRename,
  YOUR_LIST,
  IndexToRename,
}) {
  const [InputName, setDishName] = useState(YOUR_LIST[IndexToRename].Name);
  const [InputGramm, setWeight] = useState(YOUR_LIST[IndexToRename].Gramm);
  const [InputCcal, setCalories] = useState(YOUR_LIST[IndexToRename].Kaloraj);

  console.log(YOUR_LIST[IndexToRename].Name);
  const handleConfirmClick = () => {
    onConfirmRename({ InputName, InputGramm, InputCcal, IndexToRename });
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
          <button className="but" onClick={onRenameItem}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenameItem;
