///
///
///
///Информация касательно позиции (которая была добавлена)
///
///
///
import "./PositionC.css";
import React, { useState } from "react";

function PositionC(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  //Функция, необходима для выделения позиции, на
  //которую был осуществлен "клик"
  const handleItemClick = (index) => {
    setSelectedItem((prevSelectedItem) => {
      //Если текущий элемент уже выбран, сбросить выбор, иначе установить выбор
      return prevSelectedItem === index ? (index = -1) : index;
    });
    props.GetIndex(index);
  };

  //Для каждого компонента, добавляем возможность удаления и выбора.
  //Также, это и логика самих позиций (уже добавленные)
  //Также, эти все данные - мы помещаем в переменную namesList
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

  //А здесь, отображаем уже namesList
  return <div className="content2">{namesList}</div>;
}

export default PositionC;
