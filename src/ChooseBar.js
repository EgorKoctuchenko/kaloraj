///
///
///
///Навигация
///
///
///
import "./ChooseBar.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";

function ChooseBar({
  onAddItemClick,
  onYourMaxClick,
  onYourDelete,
  onYourRename,
  LANG_CH,
  setSelected,
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 750);
  const [isScroll, setScroll] = useState(false);

  //Бургер меню. Активно оно лишь тогда, когда экран меньше 750рх.
  const handleBurger = () => {
    if (isScroll) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  //Хук эффект, который и проверяет состояние размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Возвращение компонента в 2 вариациях: учитывая большой и
  //учитывая маленький экран
  return (
    <div className="tool">
      <div className="left_tool">
        <img src={logo} alt="" className="title" />
        {isSmallScreen && (
          <h2 onClick={setSelected} className="lang_small">
            {LANG_CH.Lang}
          </h2>
        )}
        {!isSmallScreen && (
          <ul className="tool_list">
            <li onClick={onAddItemClick}>{LANG_CH.Menu1}</li>
            <li onClick={onYourRename}>{LANG_CH.Menu2}</li>
            <li onClick={onYourDelete}>{LANG_CH.Menu3}</li>
            <li onClick={onYourMaxClick}>{LANG_CH.Menu4}</li>
          </ul>
        )}
      </div>
      <div>
        {!isSmallScreen && (
          <h2 onClick={setSelected} className="lang">
            {LANG_CH.Lang}
          </h2>
        )}
        {isSmallScreen && (
          <div
            onClick={handleBurger}
            className={`burger_menu ${
              isScroll ? "burger_static" : "burger_default"
            }`}
          >
            ≡
          </div>
        )}
      </div>
      {isSmallScreen && (
        <div className={isScroll ? "tool_back_small" : "tool_back_small_2"}>
          <ul
            className={`tool_list_small ${
              isScroll ? "small_anim2" : "small_anim1"
            }`}
          >
            <li className="just_line"></li>
            <li
              onClick={() => {
                onAddItemClick();
                handleBurger();
              }}
            >
              {LANG_CH.Menu1}
            </li>
            <li className="just_line"></li>
            <li
              onClick={() => {
                onYourRename();
                handleBurger();
              }}
            >
              {LANG_CH.Menu2}
            </li>
            <li className="just_line"></li>
            <li onClick={onYourDelete}>{LANG_CH.Menu3}</li>
            <li className="just_line"></li>
            <li
              onClick={() => {
                onYourMaxClick();
                handleBurger();
              }}
            >
              {LANG_CH.Menu4}
            </li>
            <li className="just_line"></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChooseBar;
