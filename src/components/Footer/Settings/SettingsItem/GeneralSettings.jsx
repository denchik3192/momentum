import React from "react";
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
      <SettingsItem name={"theme"}/>
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
