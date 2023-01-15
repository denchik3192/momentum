import React, { useRef } from "react";
import s from "./settings.module.scss";
import cn from "classnames";
import FunToggle from "./funToggle/FunToggle";
import { useState } from "react";
import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";
import GeneralSettings from "./SettingsItem/GeneralSettings";
import PhotoSettings from "./SettingsItem/PhotoSettings";
import ToDoSettings from "./SettingsItem/ToDoSettings";
import WeatherSettings from "./SettingsItem/WeatherSettings";
import AudioSettings from "./SettingsItem/AudioSettings";
import LanguageSettings from "./SettingsItem/LanguageSettings";
import QuotesSettings from "./SettingsItem/QuotesSettings";
import { AccountCircle } from "@material-ui/icons";

const Settings = ({ active, setSettingsActive }) => {
  const navItemsRef = useRef();

  const toggleNavActive = (e) => {
    //todo fix
    const target = e.target.classList;
    target.add(cn(s.active));
    const arr = document.querySelectorAll(`.${s.navLink}`);
    arr.forEach((el) => {
      if (e.target !== el) el.classList.remove(cn(s.active));
    });
  };

  // const settingsNavList = [
  //   { id: 1, name: "general" },
  //   { id: 2, name: "todo" },
  //   { id: 3, name: "photos" },
  //   { id: 4, name: "qoutes" },
  //   { id: 5, name: "audio" },
  //   { id: 6, name: "Weather" },
  //   { id: 7, name: "language" },
  // ];

  useEffect(() => {
    navItemsRef.current.addEventListener("click", toggleNavActive);
  }, []);

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
            <ul ref={navItemsRef}>
              <li className={s.navItem}>
                <Link
                  className={cn(s.navLink, s.active)}
                  // onClick={toggleNavActive}
                  to="settings/general"
                >
                  General
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/todo">
                  ToDo
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/photos">
                  Photos
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/weather">
                  Weather
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/qoutes">
                  Qoutes
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/audio">
                  Audio
                </Link>
              </li>
              <li className={s.navItem}>
                <Link className={s.navLink} to="settings/language">
                  language
                </Link>
              </li>
            </ul>
            <AccountCircle />
          </nav>

          <div className={s.settingsView}>
            {/* <h4>General</h4> */}
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
