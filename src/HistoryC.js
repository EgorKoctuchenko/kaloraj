///
///
///
///История позиций, которые были добавленны
///
///
///
import "./HistoryC.css";
import PositionC from "./PositionC";
import React, { useEffect } from "react";

function HistoryC({
  onDataFromHistoryC,
  YOUR_LIST,
  ThisIndexElem,
  LANG_CH,
  isDeleting,
  isAdding,
}) {
  //Взаимодействие с индексом в виде комментария. Возможно, еще понадобится.
  //const [thisIndex, setThisIndex] = useState("");

  //Получение индекса
  const handleThisIndex = (thisIndex) => {
    //setThisIndex(thisIndex);
    ThisIndexElem(thisIndex);
  };

  useEffect(() => {
    //При изменении YOUR_LIST пересчет суммы калорий
    let SumPos = 0;
    for (let i = 0; i < YOUR_LIST.length; i++) {
      SumPos += +YOUR_LIST[i].Kaloraj;
    }
    //Отправляем обновленные данные обратно в (App)
    onDataFromHistoryC(SumPos);
  }, [YOUR_LIST, onDataFromHistoryC]);

  //Пользователь получит сообщение (Пустая история), если же
  //история будет пустой и не иметь позиций блюд. Если же,
  //история будет хотя-бы из 1 продукта - пользователь не
  //увидет сообщение (Пустая история)
  return (
    <div>
      <h2 className="title_hist">{LANG_CH.HistoryProd}</h2>
      <div className="wrap">
        <div className="content">
          {YOUR_LIST.length === 0 && (
            <div className="empty_list">{LANG_CH.empt}</div>
          )}
          {YOUR_LIST.length > 0 && (
            <PositionC
              YourList={YOUR_LIST}
              GetIndex={handleThisIndex}
              isDeleting={isDeleting}
              isAdding={isAdding}
            ></PositionC>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryC;
