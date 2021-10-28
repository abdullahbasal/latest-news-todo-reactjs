import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import EditComponent from "./EditComponent";
import ListComponent from "./ListComponent";
export default function Home(props) {
  const [list, setList] = useState([]);
  const [pageMode, setPageMode] = useState("list");
  const [selectedItem, setSelectedItem] = useState({});

  function onAdd(item) {
    setList([...list, { ...item, id: list.length + 1 }]);
    setPageMode("list");
  }

  const getTitle = () => {
    if (pageMode === "list") {
      return "Güncel Haberler";
    } else {
      return "Formu Doldurunuz";
    }
  };
  function deleteCard(id) {
    setList(list.filter((item) => item.id !== id));
  }
  function changeCard(item) {
    setSelectedItem(item);
    setPageMode("edit");
  }
  function onEdit(item) {
    console.log(item);
    setList(
      list.map((listItem) => {
        if (listItem.id === item.id) {
          return {
            ...item,
          };
        } else {
          return listItem;
        }
      })
    );
    setSelectedItem({});
    setPageMode("list");
  }

  return (
    <div>
      <TitleComponent listScreenTittle={getTitle()}></TitleComponent>
      {pageMode === "list" && (
        <ListComponent
          list={list}
          onEdit={() => setPageMode("edit")}
          deleteCard={(id) => deleteCard(id)}
          changeCard={(item) => changeCard(item)}
        ></ListComponent>
      )}
      {pageMode === "edit" && (
        <EditComponent
          onAdd={onAdd}
          onEdit={onEdit}
          item={selectedItem}
        ></EditComponent>
      )}
    </div>
  );
}
