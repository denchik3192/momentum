import React, { Fragment, useRef } from "react";
import s from "./settings.module.scss";
import cn from "classnames";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import GeneralSettings from "./SettingsItem/GeneralSettings";
import PhotoSettings from "./SettingsItem/PhotoSettings";
import ToDoSettings from "./SettingsItem/ToDoSettings";
import WeatherSettings from "./SettingsItem/WeatherSettings";
import AudioSettings from "./SettingsItem/AudioSettings";
import LanguageSettings from "./SettingsItem/LanguageSettings";
import QuotesSettings from "./SettingsItem/QuotesSettings";
import { AccountCircle } from "@material-ui/icons";
import { useEffect } from "react";

const Settings = ({ active, setSettingsActive }) => {
  const [liActiveId, setLiActiveId] = useState(1);

  const settingsNavList = [
    { id: 1, name: "general" },
    { id: 2, name: "toDo" },
    { id: 3, name: "photos" },
    { id: 4, name: "weather" },
    { id: 5, name: "qoutes" },
    { id: 6, name: "audio" },
    { id: 7, name: "language" },
  ];

  const onActiveLinkHandler = (id) => {
    setLiActiveId(id);
  };
  useEffect(() => {
    setLiActiveId(1);
  }, [active]);

  const navList = settingsNavList.map((link) => {
    return (
      <li className={s.navItem} key={link.id}>
        <Link
          className={cn(s.navLink, liActiveId === link.id ? s.active : "")}
          key={link.id}
          to={`settings/${link.name}`}
          onClick={() => onActiveLinkHandler(link.id)}
        >
          {link.name}
        </Link>
      </li>
    );
  });
  console.log("r");
  return (
    <div
      className={active ? cn(s.settingsWrapper, s.active) : s.settingsWrapper}
      onClick={() => setSettingsActive(false)}
    >
      <div
        className={active ? cn(s.settings, s.active) : s.settings}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.settingsContent}>
          {/* <Outlet /> */}
          <nav className={s.settingsNav}>
            <h3>Settings</h3>
            <ul>{navList}</ul>
            {/* <div className={s.skull}></div> */}
            <AccountCircle />
          </nav>

          <div className={s.settingsView}>
            <Routes>
              <Route path="settings/general" element={<GeneralSettings />} />
              <Route path="settings/todo" element={<ToDoSettings />} />
              <Route path="settings/weather" element={<WeatherSettings />} />
              <Route path="settings/qoutes" element={<QuotesSettings />} />
              <Route path="settings/audio" element={<AudioSettings />} />
              <Route path="settings/photos" element={<PhotoSettings />} />
              <Route path="settings/language" element={<LanguageSettings />} />
              <Route path="settings/*" element={<GeneralSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
