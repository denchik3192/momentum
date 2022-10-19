import React from "react";
import { useState } from "react";
import s from "./footer.module.scss";
import ToDo from "./todo/ToDo";

const Footer = (props) => {
  const [todoActive, setTodoActive] = useState(true);
  return <footer className={s.footer}>
    <div className="settings">settings</div>
    <div className="qoute">Spread love everywhere you go. Let no one ever come to you without leaving happier.</div>
    <div className={s.todo} onClick={()=> setTodoActive(true)}>ToDo</div>
    <ToDo active={todoActive} setActive={setTodoActive} />
  </footer>;
};

export default Footer;
