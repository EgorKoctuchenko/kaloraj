import "./App.css";
import "./ChooseBar";
import "./Value";
import ChooseBar from "./ChooseBar";
import Value from "./Value";
import HistoryC from "./HistoryC";
import React, { useState } from "react";
import AddItem from "./AddItem";
import YourMax from "./YourMax";
import RenameItem from "./RenameItem";

function App() {
  const [YourKaloraj, setYourKaloraj] = useState(0);
  const [isAddItemOpen, setAddItemOpen] = useState(false);
  const [isYourMax, setYourMax] = useState(false);
  const [isRenameItem, setRename] = useState(false);
  const [YourLimit, setYourLimit] = useState(2000);
  const [IndexToDelete, setIndexToDelete] = useState(-1);
  const [Language, setLang] = useState(0);
  //Позиции (в виде массива объектов)
  const [YOUR_LIST, setYourList] = useState([
    {
      Name: "Суп",
      Gramm: 100,
      Kaloraj: 400,
    },
    {
      Name: "Борщ",
      Gramm: 100,
      Kaloraj: 200,
    },
  ]);
  //
  //Переключение языка
  //
  const LANG_CH = [
    {
      Lang: "RU",
      Menu1: "Добавить",
      Menu2: "Изменить",
      Menu3: "Удалить",
      Menu4: "Рассчитать свою норму",
      YourNorm: "Ваша дневная норма",
      Ccal: "Ккал",
      HistoryProd: "Ваша история продуктов:",
      NamePos: "Введите название блюда",
      NamePos_2: "Яблоко:",
      VesPos: "Введите вес (в граммах):",
      CcalPos: "Введите калорийность (на 100гр):",
      ButConfirm: "Подтвердить",
      ButReject: "Отмена",
      GenderU: "Пол",
      ManU: "Мужчина",
      WomanU: "Женщина",
      AgeU: "Возраст",
      RoctU: "Рост",
      VesU: "Вес",
      FizU: "Физическая активность",
      Level1: "Минимальная",
      Level2: "Низкая",
      Level3: "Средняя",
      Level4: "Высокая",
      Level5: "Максимальная",
    },
    {
      Lang: "UA",
      Menu1: "Додати",
      Menu2: "Змінити",
      Menu3: "Видалити",
      Menu4: "Розрахувати свою норму",
      YourNorm: "Ваша денна норма",
      Ccal: "Ккал",
      HistoryProd: "Ваша історія продуктів:",
      NamePos: "Введіть назву страви",
      NamePos_2: "Яблуко",
      VesPos: "Введіть вагу (у грамах)",
      CcalPos: "Введіть калорійність (на 100гр)",
      ButConfirm: "Підтвердити",
      ButReject: "Скасувати",
      GenderU: "Стать людини",
      ManU: "Чоловік",
      WomanU: "Жінка",
      AgeU: "Вік",
      RoctU: "Зріст",
      VesU: "Вага",
      FizU: "Фізична активність",
      Level1: "Мінімальна",
      Level2: "Низька",
      Level3: "Середня",
      Level4: "Висока",
      Level5: "Максимальна",
    },
    {
      Lang: "EN",
      Menu1: "Add",
      Menu2: "Edit",
      Menu3: "Delete",
      Menu4: "Calculate your calorie allowance",
      YourNorm: "Your daily allowance",
      Ccal: "Ccal",
      HistoryProd: "Your product history:",
      NamePos: "Enter the name of the dish",
      NamePos_2: "Apple",
      VesPos: "Enter weight (in grams)",
      CcalPos: "Enter calories (per 100g)",
      ButConfirm: "Confirm",
      ButReject: "Cancel",
      GenderU: "Gender",
      ManU: "Man",
      WomanU: "Woman",
      AgeU: "Age",
      RoctU: "Growth",
      VesU: "Weight",
      FizU: "Physical activity",
      Level1: "Minimum",
      Level2: "Low",
      Level3: "Medium",
      Level4: "High",
      Level5: "Maximum",
    },
  ];
  ///Язык
  const handleLang = () => {
    console.log(Language);
    if (Language + 1 >= 3) {
      setLang(0);
    } else {
      setLang(Language + 1);
    }
  };
  //
  //Рассчитываем, сколько уже было употреблено калорий
  ///
  const handleDataFromHistoryC = (data) => {
    setYourKaloraj(data);
  };
  //
  //Добавить
  const handleAddItemClick = () => {
    setAddItemOpen(true);
  };

  const handleCloseAddItem = () => {
    setAddItemOpen(false);
  };
  const handleNewItemValues = (values) => {
    const newItem = {
      Name: values.InputName,
      Weight: values.InputGramm,
      Kaloraj: values.InputCcal,
    };
    newItem.Kaloraj = Math.floor(newItem.Kaloraj * (newItem.Weight / 100));

    setAddItemOpen(false);
    setYourList((prevList) => [...prevList, newItem]);
  };
  //
  //Рассчет
  const handleYourMax = () => {
    setYourMax(true);
  };

  const handleCloseYourMax = () => {
    setYourMax(false);
  };
  const handleYourLimit = (value_limit) => {
    setYourLimit(value_limit);
    setYourMax(false);
  };
  ///
  ///Удалить
  const handleIndex = (valueIndex) => {
    setIndexToDelete(valueIndex);
  };
  const handleDeleteItem = () => {
    if (IndexToDelete === -1) {
      console.log("ERROR");
    } else {
      var newList = [...YOUR_LIST];
      newList.splice(IndexToDelete, 1);
      setYourList(newList);
    }
    setIndexToDelete(-1);
  };
  ///
  ///Изменить
  const handleRenameItem = () => {
    setRename(true);
  };
  const handleCloseRenameItem = () => {
    setRename(false);
  };
  const handleRenameValues = (values) => {
    if (IndexToDelete === -1) {
      console.log("ER");
    } else {
      YOUR_LIST[values.IndexToRename].Name = values.InputName;
      YOUR_LIST[values.IndexToRename].Gramm = values.InputGramm;
      YOUR_LIST[values.IndexToRename].Kaloraj = values.InputCcal;
      YOUR_LIST[values.IndexToRename].Kaloraj *=
        YOUR_LIST[values.IndexToRename].Gramm / 100;

      setRename(false);
    }
  };

  return (
    <div>
      <ChooseBar
        onAddItemClick={handleAddItemClick}
        onYourMaxClick={handleYourMax}
        onYourDelete={handleDeleteItem}
        onYourRename={handleRenameItem}
        LANG_CH={LANG_CH[Language]}
        setSelected={handleLang}
      />
      <h1 className="title_app">{LANG_CH[Language].YourNorm}</h1>
      <Value
        DayLimit={YourLimit}
        YourKaloraj={YourKaloraj}
        currentValue={YourLimit}
        LANG_CH={LANG_CH[Language]}
      />
      <HistoryC
        onDataFromHistoryC={handleDataFromHistoryC}
        YOUR_LIST={YOUR_LIST}
        ThisIndexElem={handleIndex}
        LANG_CH={LANG_CH[Language]}
      />
      {isAddItemOpen && (
        <AddItem
          onClose={handleCloseAddItem}
          onConfirm={handleNewItemValues}
          LANG_CH={LANG_CH[Language]}
        />
      )}
      {isYourMax && (
        <YourMax
          onCloseMax={handleCloseYourMax}
          onConfirmMax={handleYourLimit}
          LANG_CH={LANG_CH[Language]}
        />
      )}
      {isRenameItem && IndexToDelete !== -1 && (
        <RenameItem
          onRenameItem={handleCloseRenameItem}
          onConfirmRename={handleRenameValues}
          YOUR_LIST={YOUR_LIST}
          IndexToRename={IndexToDelete}
          LANG_CH={LANG_CH[Language]}
        />
      )}
    </div>
  );
}

export default App;
