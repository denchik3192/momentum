import { Check, Delete, DeleteForeverOutlined, Edit, EditAttributesOutlined, EditAttributesTwoTone, EditOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDoneToDo,
  changeToDoStatus,
  deleteToDo,
  updateToDo,
} from "../../../../reduxTK/todoSlice";
import s from "./todoItem.module.scss";

const ToDoItem = ({ content, id, checked }) => {
  const [editToDo, setEditToDo] = useState(false);
  const [newEditedToDo, setNewEditedToDo] = useState(content);
  const dispatch = useDispatch();

  const handleIChekboxChange = () => {
    dispatch(changeToDoStatus(id));
  };

  const toggleEditMode = (e) => {
    dispatch(updateToDo({newEditedToDo, id}));
    setEditToDo(!editToDo);
  };
  const onToDoChange = (e) => {
    setNewEditedToDo(e.currentTarget.value);
  };

  return (
    <div className={s.todoItem}>
      <input
        type="checkbox"
        onChange={handleIChekboxChange}
        id={id}
        checked={checked}
      />
      {/* <Check style={{ position: "absolute"}} /> */}
      {editToDo ? (
        <input
        className={s.edittedInput}
          type="text"
          name="newToDo"
          value={newEditedToDo}
          id={s.toDoInput}
          onChange={onToDoChange} //check!
          // onKeyPress={(e) => handleKeyPress(e)}
        />
      ) : (
        <label htmlFor="">{content}</label>
      )}
      {/* <label htmlFor="">{content}</label> */}
      <EditOutlined className={s.deleteTodoItem} onClick={toggleEditMode}>
        <div className={s.editBlock}></div>
      </EditOutlined>
      <DeleteForeverOutlined
        className={s.deleteTodoItem}
        onClick={() => dispatch(deleteToDo(id))}
      >
        <div className={s.imageBlock}></div>
      </DeleteForeverOutlined>
    </div>
  );
};

export default ToDoItem;
