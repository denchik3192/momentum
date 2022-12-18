import { SettingsApplications, SettingsApplicationsOutlined, SettingsApplicationsSharp, SettingsBrightness, SettingsPhone, SettingsSystemDaydream } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { Link } from "react-router-dom";
import s from "./footer.module.scss";
import Settings from "./Settings/Settings";
import ToDo from "./todo/ToDo";

const Footer = (props) => {
  const [todoActive, setTodoActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);

  const toggleToDo = () => {
    todoActive ? setTodoActive(false) : setTodoActive(true);
  };

  const toggleSettings = () => {
    settingsActive ? setSettingsActive(false) : setSettingsActive(true);
  };

  return (
    <footer className={s.footer}>
      <Link
        to="settings"
        className={s.settingsButton}
        onClick={toggleSettings}
      ></Link>

      
      <Settings active={settingsActive} setSettingsActive={setSettingsActive}/>
      <div className={s.qoute}>
        "Spread love everywhere you go. Let no one ever come to you without
        leaving happier.""
      </div>
      <div className={s.todo} onClick={toggleToDo}>
        ToDo
        {/* <ToDo active={todoActive} onClick={toggleToDo}/> */}
      </div>
      <ToDo active={todoActive} onClick={toggleToDo} />
    </footer>
  );
};

export default Footer;
