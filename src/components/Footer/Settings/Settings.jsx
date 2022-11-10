import React from "react";
import s from "./settings.module.scss";
import cn from "classnames";
import SettingsItem from "./SettingsItem/SettingsItem";
import FunToggle from "./funToggle/FunToggle";

const Settings = ({ active, setSettingsActive }) => {
  const settings = [
    { id: 1, name: "time" },
    { id: 2, name: "date" },
    { id: 3, name: "greeting" },
    { id: 4, name: "qoutes" },
    { id: 5, name: "audio" },
    { id: 6, name: "Weather" },
    { id: 7, name: "language" },
  ];

  const settingsElements = settings.map((setting) => (
    <SettingsItem name={setting.name} key={setting.id} id={setting.type} />
  ));

  return (
    <div
      className={active ? cn(s.settingsWrapper, s.active) : s.settingsWrapper}
      onClick={() => setSettingsActive(false)}
    >
      <div
        className={active ? cn(s.settings, s.active) : s.settings}
        onClick={() => setSettingsActive(false)}
      >
        {/* <FunToggle /> */}
        <h3>Settings</h3>
        {settingsElements}
      </div>
    </div>
  );
};

export default Settings;
