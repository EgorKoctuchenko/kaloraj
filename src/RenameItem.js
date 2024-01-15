///
///
///
///Изменение позиции (название, грамовка, калораж)
///90% логики было взято с добавления позиции
///
///
///
import "./AddItem.css";
import React, { useState } from "react";

function RenameItem({
  onRenameItem,
  onConfirmRename,
  YOUR_LIST,
  IndexToRename,
  LANG_CH,
}) {
  const [InputName, setDishName] = useState(YOUR_LIST[IndexToRename].Name);
  const [InputGramm, setWeight] = useState(YOUR_LIST[IndexToRename].Gramm);
  const [InputCcal, setCalories] = useState(YOUR_LIST[IndexToRename].Kaloraj);
  const [isAnimating, setAnimating] = useState(false);

  const handleConfirmClick = () => {
    onConfirmRename({ InputName, InputGramm, InputCcal, IndexToRename });
  };

  const handleClose = () => {
    setAnimating(true);
    setTimeout(() => {
      onRenameItem();
    }, 395);
  };
  const handleConf = () => {
    setAnimating(true);
    setTimeout(() => {
      handleConfirmClick();
    }, 395);
  };

  return (
    <div className={`item_wrap ${isAnimating ? "light_pop1" : "dark_pop1"}`}>
      <div className={`item_menu ${isAnimating ? "closing_pop" : "open_pop"}`}>
        <label className="label_cl">{LANG_CH.NamePos}</label>
        <input
          placeholder={YOUR_LIST[IndexToRename].Name}
          className="input_cl"
          type="text"
          value={InputName}
          onChange={(e) => setDishName(e.target.value)}
        ></input>
        <label className="label_cl">{LANG_CH.VesPos}</label>
        <input
          placeholder={YOUR_LIST[IndexToRename].Gramm}
          className="input_cl"
          type="number"
          value={InputGramm}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <label className="label_cl">{LANG_CH.CcalPos}</label>
        <input
          placeholder={YOUR_LIST[IndexToRename].Kaloraj}
          className="input_cl"
          type="number"
          value={InputCcal}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="but" onClick={handleConf}>
            {LANG_CH.ButConfirm}
          </button>
          <button className="but" onClick={handleClose}>
            {LANG_CH.ButReject}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenameItem;
