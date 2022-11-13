import React, { useRef } from "react";
import s from "./settings.module.scss";
import cn from "classnames";
import SettingsItem from "./SettingsItem/SettingsItem";
import FunToggle from "./funToggle/FunToggle";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";

const Settings = ({ active, setSettingsActive }) => {
  const ref = useRef(null);
  const [navActive, setNavActive] = useState(false);
  const settings = [
    { id: 1, name: "time" },
    { id: 2, name: "date" },
    { id: 3, name: "greeting" },
    { id: 4, name: "qoutes" },
    { id: 5, name: "audio" },
    { id: 6, name: "Weather" },
    { id: 7, name: "language" },
  ];
  const settingsNavList = [
    { id: 1, name: "General" },
    { id: 2, name: "ToDo" },
    { id: 3, name: "Photos" },
    { id: 4, name: "qoutes" },
    { id: 5, name: "audio" },
    { id: 6, name: "Weather" },
    { id: 7, name: "language" },
  ];

  const settingsElements = settings.map((setting) => (
    <SettingsItem name={setting.name} key={setting.id} id={setting.type} />
  ));

  const settingsNavElements = settingsNavList.map((setting) => (
    <Route
      path={`${setting}`}
      element={
        <div
          className={s.navItem}
          key={setting.id}
          onClick={() => setNavActive(true)}
        >
          {setting.name}
        </div>
      }
    />
    //     <div

    //   className={s.navItem}
    //   key={setting.id}
    //   onClick={() => setNavActive(true)}
    // >
    //   {setting.name}
    // </div>
  ));

  // console.log(settingsNavElements);

  const res = useEffect(() => {
    const elements = document.querySelectorAll(`.${s.navItem}`);
    console.log(elements);
  }, []);
  const toggleActive = (e) => {
    //todo fix
    const target = e.target.classList;
    target.contains(s.act) ? target.remove(s.act) : target.add(s.act);
    console.log(res);
  };

  return (
    <div
      className={active ? cn(s.settingsWrapper, s.active) : s.settingsWrapper}
      onClick={() => setSettingsActive(false)}
    >
      <div
        className={active ? cn(s.settings, s.active) : s.settings}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <FunToggle /> */}

        <div className={s.settingsContent}>
          <nav
            ref={ref}
            className={s.settingsNav}
            onClick={(e) => toggleActive(e)}
          >
            <h3>Settings</h3>
            <Routes>{settingsNavElements}</Routes>
          </nav>
          <div className={s.settingsView}>
            <h4>General</h4>
            {settingsElements}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
