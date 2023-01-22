import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSetting } from "../../../../reduxTK/settingsSlice";
import s from "./settingsItem.module.scss";

const SettingsItem = ({name, id, checked, setSettingsItem, key}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
    dispatch(toggleSetting(id));
  }
  console.log('SettingsItem render');
  return (
    
      <div className={s.settingsItem}>
        <span>{name}</span>
        <input type="checkbox" key={key} id={id} checked={isChecked ===checked? checked: !checked} onChange={handleCheckbox}/>
      </div>
  );
};

export default SettingsItem;
