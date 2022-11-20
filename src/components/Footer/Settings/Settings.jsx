import React, { useRef } from "react";
import s from "./settings.module.scss";
import cn from "classnames";
import FunToggle from "./funToggle/FunToggle";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, Route, Routes, Switch } from "react-router-dom";
import GeneralSettings from "./SettingsItem/GeneralSettings";
import PhotoSettings from "./SettingsItem/PhotoSettings";
import ToDoSettings from "./SettingsItem/ToDoSettings";
import WeatherSettings from "./SettingsItem/WeatherSettings";
import AudioSettings from "./SettingsItem/AudioSettings";
import LanguageSettings from "./SettingsItem/LanguageSettings";
import QuotesSettings from "./SettingsItem/QuotesSettings";

const Settings = ({ active, setSettingsActive }) => {
  const ref = useRef(null);
  const [navActive, setNavActive] = useState(false);

  const settingsNavList = [
    { id: 1, name: "general" },
    { id: 2, name: "todo" },
    { id: 3, name: "photos" },
    { id: 4, name: "qoutes" },
    { id: 5, name: "audio" },
    { id: 6, name: "Weather" },
    { id: 7, name: "language" },
  ];

  
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
            
            {/* <Outlet /> */}
          <nav
            ref={ref}
            className={s.settingsNav}
            onClick={(e) => toggleActive(e)}
          >
            
            <h3>Settings</h3>
            <ul>
              <li className={s.navItem}><Link to="settings/general">General</Link></li>
              <li className={s.navItem}><Link to="settings/todo">ToDo</Link></li>
              <li className={s.navItem}><Link to="settings/photos">Photos</Link></li>
              <li className={s.navItem}><Link to="settings/weather">Weather</Link></li>
              <li className={s.navItem}><Link to="settings/qoutes">Qoutes</Link></li>
              <li className={s.navItem}><Link to="settings/audio">Audio</Link></li>
              <li className={s.navItem}><Link to="settings/language">language</Link></li>
            </ul>
          </nav>

          <div className={s.settingsView}>
            <h4>General</h4>
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
