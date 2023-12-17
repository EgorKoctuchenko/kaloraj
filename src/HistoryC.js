import "./HistoryC.css";
import PositionC from "./PositionC";
import React, { useEffect, useState } from "react";

function HistoryC({ onDataFromHistoryC, YOUR_LIST, ThisIndexElem, LANG_CH }) {
  //const [thisIndex, setThisIndex] = useState("");

  const handleThisIndex = (thisIndex) => {
    //setThisIndex(thisIndex);
    ThisIndexElem(thisIndex);
  };

  useEffect(() => {
    // при изменении YOUR_LIST
    // пересчет суммы калорий
    let SumPos = 0;
    for (let i = 0; i < YOUR_LIST.length; i++) {
      SumPos += +YOUR_LIST[i].Kaloraj;
    }

    // Отправляем обновленные данные обратно в родительский компонент (App)
    onDataFromHistoryC(SumPos);
  }, [YOUR_LIST, onDataFromHistoryC]);

  return (
    <div>
      <h2 className="title_hist">{LANG_CH.HistoryProd}</h2>
      <div className="wrap">
        <div className="content">
          <PositionC
            YourList={YOUR_LIST}
            GetIndex={handleThisIndex}
          ></PositionC>
        </div>
      </div>
    </div>
  );
}

export default HistoryC;
