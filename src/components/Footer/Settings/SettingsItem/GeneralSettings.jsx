import React from "react";
import { ThemeContext, themes } from "../../../../context/ThemeContext";
import FunToggle from "../funToggle/FunToggle";
import SettingsItem from "./SettingsItem";
import { useSelector } from "react-redux";

function GeneralSettings() {
  const settingsElements = useSelector((state) => state.settings);
  const settingsItemElements = settingsElements.generalSettings.map(
    (setting) => (
      <SettingsItem
        name={setting.name}
        key={setting.id}
        id={setting.id}
        checked={setting.checked}
      />
    )
  );

  return (
    <div>
      <h4>Appearance</h4>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <FunToggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
            name={"theme"}
          />
        )}
      </ThemeContext.Consumer>
      <h4>SHOW</h4>
      {settingsItemElements}
    </div>
  );
}

export default GeneralSettings;
