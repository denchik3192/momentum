import React from "react";
import s from "./todoItem.module.scss";

const ToDoItem = ({ content }) => {
    return (
      <div className={s.todoItem}>
        <input type="checkbox" />
        <label htmlFor="">{content}</label>
      </div>
    );
  };

  export default ToDoItem;