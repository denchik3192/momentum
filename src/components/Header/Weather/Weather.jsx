import React, { useEffect, useState } from "react";
import s from "./weather.module.scss";
import cn from "classnames";
import { WiDaySleet } from "react-icons/wi";
import { fetchWether } from "../../../reduxTK/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined } from "@material-ui/icons";

const Weather = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);

  useEffect(()=> {
    dispatch(fetchWether());
  }, [dispatch])
 

  return (
    <div className={active ? cn(s.weatherWrapper, s.active) : s.weatherWrapper} onClick={() => setActive(false)}>
    <div className={active ? cn(s.weather, s.active) : s.weather}  onClick={e => e.stopPropagation()}>
      {/* <input type="text" className={s.city} onChange={(e) => setCity(e.target.value)} value={city}/> */}
      <section className={s.weatherSection}>
        <div className={s.header}>
          <div className={s.loacationWrapper}>
            <h3 className={s.location}>{weatherData.location}</h3><EditOutlined className={s.editIcon}/>
            <span className={s.weatherDescription}>{weatherData.description}</span>
          </div>
          <div className={s.more}>000</div>
        </div>

        <div className={s.descriptionContainer}>
          <span className={s.temperature}>{Math.round(weatherData.temperature)}</span>
          <div className={s.weatherIcon}>
          <WiDaySleet />
          </div>
          <div className={s.additionalDescr}>
            <div className={s.wind}>Wind: <b>{weatherData.wind}m/s</b></div>
            <div className={s.humidity}>Humidity:  <b>{weatherData.humidity}</b></div>
            <div className={s.humidity}>Pressure:  <b>{weatherData.pressure}</b></div>
          </div>
        </div>
        {/* <div className={s.weatherError}></div> */}
      </section>
    </div>
    </div>
  );
};

export default Weather;
