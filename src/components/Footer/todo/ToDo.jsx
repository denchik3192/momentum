import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";

const ToDo = ({ active, setActive }) => {
  return (
    <div className={active ? cn(s.todo, s.active) : s.todo}>
      <div className={s.todoHedaer}>Today</div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">123</label>
      </div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">22222</label>
      </div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">33333333</label>
      </div>

      <div className={s.todoFooter}>
        <input type="text" name="" id={s.toDoInput} placeholder="Add ToDo" />
      </div>
    </div>
  );
};

export default ToDo;
