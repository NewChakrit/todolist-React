import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const List = ({ id, title, removeItem, editItem, checkEditItem }) => {
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="button-container">
        <BiEditAlt className="btn" onClick={() => editItem(id)} />
        <BsTrash className="btn" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default List;
