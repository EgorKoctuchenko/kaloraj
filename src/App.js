import "./App.css";
import "./ChooseBar";
import "./Value";
import ChooseBar from "./ChooseBar";
import Value from "./Value";
import HistoryC from "./HistoryC";
import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import YourMax from "./YourMax";
import RenameItem from "./RenameItem";

function App() {
  //Загружаем LIST из localStorage (поскольку пользователь явно будет
  //возвращаться на сайт)
  const savedYourList = JSON.parse(localStorage.getItem("YOUR_LIST")) || [{}];
  const [YOUR_LIST, setYourList] = useState(savedYourList);
  useEffect(() => {
    localStorage.setItem("YOUR_LIST", JSON.stringify(YOUR_LIST));
  }, [YOUR_LIST]);
  ///
  //Также, сохраняем значения калорийности (максимальной)
  ///
  const savedYourLimit = parseInt(localStorage.getItem("YourLimit")) || 2000;
  const [YourLimit, setYourLimit] = useState(savedYourLimit);
  useEffect(() => {
    localStorage.setItem("YourLimit", JSON.stringify(YourLimit));
  }, [YourLimit]);
  ///
  //И языка
  //
  const savedLang = parseInt(localStorage.getItem("Language")) || 0;
  const [Language, setLang] = useState(savedLang);
  useEffect(() => {
    localStorage.setItem("Language", JSON.stringify(Language));
  }, [Language]);
  //

  const [YourKaloraj, setYourKaloraj] = useState(0);
  const [isAddItemOpen, setAddItemOpen] = useState(false);
  const [isYourMax, setYourMax] = useState(false);
  const [isRenameItem, setRename] = useState(false);
  const [IndexToDelete, setIndexToDelete] = useState(-1);
  //Удаления (анимация)
  const [isDeleting, setIsDeleting] = useState(false);
  ///
  ///Очищение по 0:00
  const clearYourList = () => {
    // Очищаем YOUR_LIST
    setYourList([]);
    // Обновляем localStorage с пустым списком
    localStorage.setItem("YOUR_LIST", JSON.stringify([]));
    // Обновляем дату последней очистки
    localStorage.setItem("lastClearDate", new Date().toLocaleDateString());
  };

  // Проверяем, нужно ли очищать YOUR_LIST при следующей загрузки сайта на
  //Следующий день
  useEffect(() => {
    const lastClearDate = localStorage.getItem("lastClearDate");
    const today = new Date().toLocaleDateString();

    // Если день последней очистки отличается от сегодняшнего, то очищаем
    if (!lastClearDate || lastClearDate !== today) {
      clearYourList();
    }
  }, []);
  //
  //Переключение языка (Да. Здесь много..)
  //
  const LANG_CH = [
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
      empt: "Поки-що, ваш список порожній!",
    },
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
      empt: "Пока-что, ваш список пуст!",
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
      empt: "So far, your list is empty!",
    },
  ];
  ///Переключение языка
  const handleLang = () => {
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
  //Добавить позицию
  //
  //Открытие окошка
  const handleAddItemClick = () => {
    setAddItemOpen(true);
  };
  //Закрытие окошка
  const handleCloseAddItem = () => {
    setAddItemOpen(false);
  };
  //Логика добавления позиции
  const handleNewItemValues = (values) => {
    const newItem = {
      Name: values.InputName,
      Weight: values.InputGramm,
      Kaloraj: values.InputCcal,
    };
    //Округление (дабы избежать длинной строки в маленькой "коробочке")
    newItem.Kaloraj = Math.floor(newItem.Kaloraj * (newItem.Weight / 100));

    setAddItemOpen(false);
    setYourList((prevList) => [...prevList, newItem]);
  };
  //
  //Рассчет максимума
  //
  //Открыть окошко
  const handleYourMax = () => {
    setYourMax(true);
  };
  //Закрыть окошко
  const handleCloseYourMax = () => {
    setYourMax(false);
  };
  //Функция, дабы полученное значение установить в качестве максимума
  const handleYourLimit = (value_limit) => {
    setYourLimit(value_limit);
    setYourMax(false);
  };
  ///
  ///Удалить позицию
  //
  //Получение индекса (дабы удалить корректно)
  const handleIndex = (valueIndex) => {
    setIndexToDelete(valueIndex);
  };
  //Логика удаления
  const handleDeleteItem = () => {
    if (IndexToDelete === -1) {
    } else {
      setIsDeleting(true);
      setTimeout(() => {
        var newList = [...YOUR_LIST];
        newList.splice(IndexToDelete, 1);
        setYourList(newList);
        setIsDeleting(false);
      }, 400);
    }
    //Обнуление индекса присутствует в виде комментария. Вдруг оно
    //потом понадобится?
    //setIndexToDelete(-1);
  };
  ///
  ///Изменить позицию
  //
  //Открыть окошко
  const handleRenameItem = () => {
    setRename(true);
  };
  //Закрыть окошко
  const handleCloseRenameItem = () => {
    setRename(false);
  };
  //Логика изменения позиции
  const handleRenameValues = (values) => {
    if (IndexToDelete === -1) {
    } else {
      YOUR_LIST[values.IndexToRename].Name = values.InputName;
      YOUR_LIST[values.IndexToRename].Gramm = values.InputGramm;
      YOUR_LIST[values.IndexToRename].Kaloraj = values.InputCcal;
      YOUR_LIST[values.IndexToRename].Kaloraj = Math.floor(
        YOUR_LIST[values.IndexToRename].Kaloraj *
          (YOUR_LIST[values.IndexToRename].Gramm / 100)
      );
      setYourList((prevList) => [...prevList]);
      setRename(false);
    }
  };

  return (
    <div className="back_fone">
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
        isDeleting={isDeleting}
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
