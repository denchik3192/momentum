import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { useKeyPress } from "./useKeyPres";
import { useEffect } from "react";
import { useRef } from "react";
import { addToDo } from "../../../reduxTK/todoSlice";

const ToDo = ({ active }) => {
  const ref = useRef(null);
  const [newToDo, setNewToDo] = useState("");
  const todo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const todosElements = todo.map((todo) => (
    <ToDoItem content={todo.content} key={todo.id} />
  ));

  const onToDoChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  useEffect(() => {
    const handleClick = event => {
      if(event.key === 'Enter') {
        console.log(event.key);
        dispatch(addToDo(newToDo))
      }
    };

    const element = ref.current;

    element.addEventListener('keydown', handleClick);
    return () => {
      element.removeEventListener('keydown', handleClick);
    };

  }, []);

  return (
    <div className={active ? cn(s.todo, s.active) : s.todo}>
      <div className={s.todoHedaer}>Today</div>

      {todosElements}
      <div className={s.todoFooter}>
        <input
          type="text"
          name="newToDo"
          value={newToDo}
          id={s.toDoInput}
          placeholder="Add ToDo"
          onChange={onToDoChange}
          ref={ref}
        />
      </div>
    </div>
  );
};

export default ToDo;
