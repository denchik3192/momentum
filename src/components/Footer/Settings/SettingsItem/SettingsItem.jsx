import React from "react";
import s from "./settingsItem.module.scss";

const SettingsItem = ({name}) => {
  return (
      <div className={s.settingsItem}>
        <span>{name}</span>
        <input type="checkbox" name={name} id={name} />
      </div>
  );
};

export default SettingsItem;
