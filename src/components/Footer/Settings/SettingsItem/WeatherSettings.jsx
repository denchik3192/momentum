
import React from "react";
import { useSelector } from "react-redux";
import s from './weatherSettingItem.module.scss'

function WeatherSettings() {
  const weatherData = useSelector((state) => state.weather);

  const weatherSettingsList = Object.keys(weatherData).slice(0, -2).map((el) => {
    return (
      <div div className={s.weatherMainSettings}>
        <input className={s.item} type="checkbox" name={el} id={el} checked={true}/>
        <label className={s.labelItem} htmlFor={el}>{el}</label>
      </div>
    );
  });

  return (
    <>
        <h3>Weather</h3>
        {weatherSettingsList}
        <button className={s.applyButton}type="submit">Apply</button>
    </>
  );
}

export default WeatherSettings;
