import React from "react";
import "./CardComponent.css";
import Delete from "./delete-button.png";
import Edit from "./edit-button.png";

export default function CardComponent(props) {
  function deleteCard(id) {
    props.deleteCard(id);
  }
  function changeCard(item) {
    props.changeCard(item);
  }
  return (
    <div id="card">
      <div id="card-title">
        {props.item.title}
        <div id="delete-button" onClick={() => deleteCard(props.item.id)}>
          <img src={Delete} />
        </div>
        <div id="edit-button" onClick={() => changeCard(props.item)}>
          <img src={Edit} />
        </div>
      </div>
      <div id="card-content">{props.item.content}</div>
    </div>
  );
}
