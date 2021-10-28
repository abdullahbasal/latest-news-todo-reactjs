import React from "react";
import "./TitleComponent.css";
export default function TitleComponent(props) {
  return (
    <div>
      <h3 id="baslik">{props.listScreenTittle}</h3>
    </div>
  );
}
