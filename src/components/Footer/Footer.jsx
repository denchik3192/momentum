import React from "react";
import { useState } from "react";
import s from "./footer.module.scss";
import Settings from "./Settings/Settings";
import ToDo from "./todo/ToDo";

const Footer = (props) => {
  const [todoActive, setTodoActive] = useState(false);
  const [settingsActive, setsettingsActive] = useState(false);

  const toggleToDo = () => {
    todoActive ? setTodoActive(false) : setTodoActive(true)
  }

  const toggleSettings = () => {
    settingsActive ? setsettingsActive(false) : setsettingsActive(true)
    console.log(settingsActive);
  }

  return <footer className={s.footer}>
    <div className={s.settingsButton} onClick={toggleSettings}></div>
    <Settings active={settingsActive} />
    <div className="qoute">Spread love everywhere you go. Let no one ever come to you without leaving happier.</div>
    <div className={s.todo} onClick={toggleToDo}>ToDo</div>
    <ToDo active={todoActive} />
  </footer>;
};

export default Footer;
