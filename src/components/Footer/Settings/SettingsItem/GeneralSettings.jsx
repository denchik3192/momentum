import React from "react";
import { ThemeContext, themes } from "../../../../context/ThemeContext";
import FunToggle from "../funToggle/FunToggle";
import SettingsItem from "./SettingsItem";

function GeneralSettings() {
  const settings = [
    { id: 1, name: "time" },
    { id: 2, name: "date" },
    { id: 3, name: "greeting" },
    { id: 4, name: "qoutes" },
    { id: 5, name: "audio" },
    { id: 6, name: "Weather" },
  ];
  const settingsElements = settings.map((setting) => (
    <SettingsItem name={setting.name} key={setting.id} id={setting.type} />
  ));
  return (
    <div>
      <h4>SHOW</h4>
      {settingsElements}
      <h4>Appearance</h4>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <FunToggle onChange={() => {
            if (theme === themes.light) setTheme(themes.dark)
            if (theme === themes.dark) setTheme(themes.light)
          }}  value={theme === themes.dark} name={"theme"}/>
        )}
      
      </ThemeContext.Consumer>
      
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
      <SettingsItem name={"font"}/>
    </div>
  );
}

export default GeneralSettings;
