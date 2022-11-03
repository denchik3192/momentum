import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoneToDo, deleteToDo } from "../../../../reduxTK/todoSlice";
import s from "./todoItem.module.scss";

const ToDoItem = ({ content, id }) => {
  // console.log(id);
  const dispatch = useDispatch();

  const handleIChekboxChange = (e) => {
    if (e.target.checked === true) {
      dispatch(addDoneToDo(content)); //check
      dispatch(deleteToDo());
    }

    console.log(e);
  };
  return (
    <div className={s.todoItem}>
      <input type="checkbox" onChange={handleIChekboxChange} id={id} />
      <label htmlFor="">{content}</label>
      <div className={s.deleteTodoItem} onClick={() => dispatch(deleteToDo())}>
        <div className={s.editBlock}></div>
      </div>
      <div className={s.deleteTodoItem} onClick={() => dispatch(deleteToDo())}>
        <div className={s.imageBlock}></div>
      </div>
    </div>
  );
};

export default ToDoItem;
