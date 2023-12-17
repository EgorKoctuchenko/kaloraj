import "./AddItem.css";
import React, { useState } from "react";

function AddItem({ onClose, onConfirm, LANG_CH }) {
  const [InputName, setDishName] = useState("");
  const [InputGramm, setWeight] = useState("");
  const [InputCcal, setCalories] = useState("");

  const handleConfirmClick = () => {
    onConfirm({ InputName, InputGramm, InputCcal });
  };

  return (
    <div className="item_wrap">
      <div className="item_menu">
        <label className="label_cl">{LANG_CH.NamePos}</label>
        <input
          placeholder={LANG_CH.NamePos_2}
          className="input_cl"
          type="text"
          value={InputName}
          onChange={(e) => setDishName(e.target.value)}
        ></input>
        <label className="label_cl">{LANG_CH.VesPos}</label>
        <input
          placeholder="100"
          className="input_cl"
          type="number"
          value={InputGramm}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <label className="label_cl">{LANG_CH.CcalPos}</label>
        <input
          placeholder="56"
          className="input_cl"
          type="number"
          value={InputCcal}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="but" onClick={handleConfirmClick}>
            {LANG_CH.ButConfirm}
          </button>
          <button className="but" onClick={onClose}>
            {LANG_CH.ButReject}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
