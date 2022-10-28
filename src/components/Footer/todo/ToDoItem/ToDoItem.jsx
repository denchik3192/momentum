import React from "react";
import { useDispatch } from "react-redux";
import { addDoneToDo } from "../../../../reduxTK/todoSlice";
import s from "./todoItem.module.scss";

const ToDoItem = ({ content }) => {
  const dispatch = useDispatch();

  const handleIChekboxChange = (e)=> {
    dispatch(addDoneToDo('done'))
   
    console.log( e.target.checked);

  }
    return (
      <div className={s.todoItem}>
        <input type="checkbox" onChange={handleIChekboxChange}/>
        <label htmlFor="">{content}</label>
      </div>
    );
  };

  export default ToDoItem;