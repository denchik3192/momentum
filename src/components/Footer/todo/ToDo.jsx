import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";

const ToDo = ({ active, setActive }) => {
  return (
    <div className={active ? cn(s.todo, s.active) : s.todo}>
      <div className={s.todoHedaer}>Today</div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
      </div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
      </div>
      <div className={s.todoItem}>
        <input type="checkbox" name="" id="" />
      </div>

      <div className={s.todoFooter}>ToDo</div>
    </div>
  );
};

export default ToDo;
