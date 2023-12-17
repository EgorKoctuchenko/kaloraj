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

  const handleDataFromHistoryC = (data) => {
    setYourKaloraj(data);
  };
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
    YOUR_LIST[values.IndexToRename].Name = values.InputName;
    YOUR_LIST[values.IndexToRename].Gramm = values.InputGramm;
    YOUR_LIST[values.IndexToRename].Kaloraj = values.InputCcal;
    YOUR_LIST[values.IndexToRename].Kaloraj *=
      YOUR_LIST[values.IndexToRename].Gramm / 100;

    setRename(false);
  };

  return (
    <div>
      <ChooseBar
        onAddItemClick={handleAddItemClick}
        onYourMaxClick={handleYourMax}
        onYourDelete={handleDeleteItem}
        onYourRename={handleRenameItem}
      />
      <h1 className="title_app">Ваша дневная норма</h1>
      <Value
        DayLimit={YourLimit}
        YourKaloraj={YourKaloraj}
        currentValue={YourLimit}
      />
      <HistoryC
        onDataFromHistoryC={handleDataFromHistoryC}
        YOUR_LIST={YOUR_LIST}
        ThisIndexElem={handleIndex}
      />
      {isAddItemOpen && (
        <AddItem onClose={handleCloseAddItem} onConfirm={handleNewItemValues} />
      )}
      {isYourMax && (
        <YourMax
          onCloseMax={handleCloseYourMax}
          onConfirmMax={handleYourLimit}
        />
      )}
      {isRenameItem && IndexToDelete !== -1 && (
        <RenameItem
          onRenameItem={handleCloseRenameItem}
          onConfirmRename={handleRenameValues}
          YOUR_LIST={YOUR_LIST}
          IndexToRename={IndexToDelete}
        />
      )}
    </div>
  );
}

export default App;
