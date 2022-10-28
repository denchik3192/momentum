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
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const todosElements = todos.todos.map((todo) => (
    <ToDoItem content={todo.content} key={todo.id} />
  ));

  const doneTodosElements = todos.doneTodos.map((todo) => (
    <ToDoItem content={todo.content} key={todo.id} />
  ));

  const onToDoChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  // useEffect(() => {
  //   const handleClick = event => {
  //     if(event.key === 'Enter')dispatch(addToDo(newToDo))

  //   };

  //   const element = ref.current;

  //   element.addEventListener('keydown', handleClick);
  //   return () => {
  //     element.removeEventListener('keydown', handleClick);
  //   };

  // }, []);

  return (
    <div className={active ? cn(s.todo, s.active) : s.todo}>
      <div className={s.todoHedaer}>ToDo</div>

      {todosElements}
      <div className={s.doneTodos}>{doneTodosElements}</div>

      <div className={s.todoFooter}>
        <input
          type="text"
          name="newToDo"
          value={newToDo}
          id={s.toDoInput}
          placeholder="Add ToDo"
          onChange={onToDoChange}
          // ref={ref}
        />

        <button
          className={s.toDoButton}
          onClick={() => {
            dispatch(addToDo(newToDo));
            setNewToDo("");
          }}
        >
          add todo
        </button>
        <button className={s.toDoButton} onClick={() => dispatch(deleteToDo())}>
          remove todo
        </button>
      </div>
    </div>
  );
};

export default ToDo;
