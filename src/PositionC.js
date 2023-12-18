import "./PositionC.css";
import React, { useState } from "react";

function PositionC(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index) => {
    setSelectedItem((prevSelectedItem) => {
      // Если текущий элемент уже выбран, сбросить выбор, иначе установить выбор
      return prevSelectedItem === index ? (index = -1) : index;
    });
    props.GetIndex(index);
  };

  var namesList = props.YourList.map((item, index) => (
    <div
      key={index}
      className={`position_item ${selectedItem === index ? "selected" : ""} ${
        props.isDeleting && index === selectedItem ? "deleting" : ""
      }`}
      onClick={() => handleItemClick(index)}
    >
      <span>{item.Name} </span>
      <span className="item_kaloraj"> {item.Kaloraj}</span>
    </div>
  ));

  return <div className="content2">{namesList}</div>;
}

export default PositionC;
