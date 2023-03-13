import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectsettingsStatus } from "../../../../reduxTK/selectors/weather-settings-selector";
import { changeSettingsStatus } from "../../../../reduxTK/weatherSettingsSlice";

import s from "./weatherSettingItem.module.scss";

function WeatherSettings() {
  const weatherSettings = useSelector(selectsettingsStatus);
  const dispatch = useDispatch();

  console.log(weatherSettings);

  const handleWeatherSettings = (e) => {
      dispatch(changeSettingsStatus (e.target.name));
  };
  
  const weatherSettingsList = weatherSettings.map((el) => {
    return (
      <div className={s.weatherMainSettings} key={el.id}>
        <input
          className={s.item}
          type="checkbox"
          name={el.name}
          key={el.id}
          id={el.id}
          checked={el.checked}
          onChange={handleWeatherSettings}
        />
        <label className={s.labelItem} htmlFor={el.name}>
          {el.name}
        </label>
      </div>
    );
  });

  return (
    <>
      <h3>Weather</h3>
      {weatherSettingsList}
    </>
  );
}

export default WeatherSettings;
