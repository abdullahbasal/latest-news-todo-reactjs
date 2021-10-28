import React, { useState, useEffect } from "react";
import TitleComponent from "./TitleComponent";
import "./EditComponent.css";

export default function EditComponent(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChangeNewsContent(e) {
    setContent(e.target.value);
  }

  function handleChangeNewsTitle(e) {
    setTitle(e.target.value);
  }

  function save() {
    if (title.length > 10 && content.length > 25) {
      if (props.item.id) {
        props.onEdit({ title: title, content: content, id: props.item.id });
      } else {
        props.onAdd({ title: title, content: content });
      }
    }
  }
  function changeCard() {}
  useEffect(() => {
    if (props.item.id) {
      setTitle(props.item.title);
      setContent(props.item.content);
    }
  }, []);
  return (
    <div id="edit-area">
      <input
        placeholder="Haber Başlığını Giriniz..."
        onChange={handleChangeNewsTitle}
        value={title}
      ></input>
      <br />
      <input
        id="content-input"
        placeholder="Haber İçeriğini Giriniz..."
        onChange={handleChangeNewsContent}
        value={content}
      ></input>
      <br />
      <button id="add-button" onClick={save}>
        Kaydet
      </button>
    </div>
  );
}
