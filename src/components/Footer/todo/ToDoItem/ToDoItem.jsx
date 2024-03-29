import { DeleteForever, Edit } from "@mui/icons-material";
import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeToDoStatus,
  deleteToDo,
  updateToDo,
} from "../../../../reduxTK/todoSlice";
import s from "./todoItem.module.scss";

const ToDoItem = ({ content, id, checked, maximizedToDo }) => {
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
    <div className={classNames(s.todoItem, maximizedToDo ? s.maximized: '') }>
      {/* <label htmlFor={id}/> */}
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
      <Edit className={s.deleteTodoItem} onClick={toggleEditMode}>
        <div className={s.editBlock}></div>
      </Edit>
      <DeleteForever
        className={s.deleteTodoItem}
        onClick={() => dispatch(deleteToDo(id))}
      >
        <div className={s.imageBlock}></div>
      </DeleteForever>
    </div>
  );
};

export default ToDoItem;
