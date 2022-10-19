import React from "react";
import s from "./todo.module.scss";

const ToDo = ({active, setActive}) => {
  return <div className={s.todo}>
    <div className={s.todoHedaer}>Today</div>
    <div className="qoute">Spread love everywhere you go. Let no one ever come to you without leaving happier.</div>
    <div className={s.todoFooter}>ToDo</div>
  </div>;
};

export default ToDo;
