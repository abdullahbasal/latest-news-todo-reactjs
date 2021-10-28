import React from "react";
import CardComponent from "./CardComponent";
import "./ListComponent.css";
export default function ListComponent(props) {
  function deleteCard(id) {
    props.deleteCard(id);
  }
  function changeCard(item) {
    props.changeCard(item);
  }
  return (
    <div>
      {props.list.map((item) => (
        <CardComponent
          key={item.name}
          item={item}
          deleteCard={() => deleteCard(item.id)}
          changeCard={() => changeCard(item)}
        />
      ))}
      <div id="add-button-area">
        <button id="add-button-round" onClick={() => props.onEdit()}>
          +
        </button>
      </div>
    </div>
  );
}
