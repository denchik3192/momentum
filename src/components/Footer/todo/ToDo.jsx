import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { useKeyPress } from "./useKeyPres";
import { useEffect } from "react";
import { useRef } from "react";
import { addToDo, deleteToDo } from "../../../reduxTK/todoSlice";

const ToDo = ({ active }) => {
  // const ref = useRef('Enter');
  const [newToDo, setNewToDo] = useState("");
  const [editToDo, setEditToDo] = useState(false);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const todosElements = todos.todos.map((todo) => (
    <ToDoItem
      content={todo.content}
      key={todo.id}
      id={todo.id}
      checked={todo.checked}
      // editToDo={editToDo}
      // setEditToDo={setEditToDo}
    />
  ));

  // const doneTodosElements = todos.doneTodos.map((todo) => (
  //   <ToDoItem content={todo.content} key={todo.id} />
  // ));

  const onToDoChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newToDo) {
      //ask
      dispatch(addToDo(newToDo));
      setNewToDo("");
    }
  };

  return (
    <div className={active ? cn(s.todo, s.active) : s.todo}>
      <div className={s.todoHedaer}>ToDo</div>

      {todosElements}
      {/* <div className={s.doneTodos}>{doneTodosElements}</div> */}

      <div className={s.todoFooter}>
        <input
          type="text"
          name="newToDo"
          value={newToDo}
          id={s.toDoInput}
          placeholder="New"
          onChange={onToDoChange} //check!
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
    </div>
  );
};

export default ToDo;
