import React, { useEffect, useState } from "react";
import s from "./weather.module.scss";
import cn from "classnames";
import { fetchWether } from "../../../reduxTK/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

import { Edit } from "@mui/icons-material";
import { WiDayCloudy } from "react-icons/wi";

const Weather = ({ active, setActive }) => {
  const [lacationEdit, setLocationEdit] = useState(false);
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const [lacation, setLocation] = useState(weatherData.lacation); //fix

  useEffect(() => {
    dispatch(fetchWether());
  }, [dispatch]);

  const toggleLocationEdit = () => {
    console.log(lacationEdit);
    setLocationEdit(!lacationEdit);
    dispatch(fetchWether(lacation));
  };

  const handleLocationInput = (e) => {
    setLocation(e.currentTarget.value);
  };

  return (
    <div
      className={active ? cn(s.weatherWrapper, s.active) : s.weatherWrapper}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? cn(s.weather, s.active) : s.weather}
        onClick={(e) => e.stopPropagation()}
      >
        <section className={s.weatherSection}>
          <div className={s.header}>
            <div className={s.loacationWrapper}>
              {lacationEdit ? (
                <input
                  type="text"
                  className={s.inputLocation}
                  value={lacation}
                  onChange={handleLocationInput}
                />
              ) : (
                <h3 className={s.location}>{weatherData.location}</h3>
              )}

              <Edit
                className={s.editIcon}
                onClick={toggleLocationEdit}
              />
              <span className={s.weatherDescription}>
                {weatherData.description}
              </span>
            </div>
          </div>

          <div className={s.descriptionContainer}>
            <span className={s.temperature}>{weatherData.temperature}</span>
            <div className={s.weatherIcon}>
              <WiDayCloudy />
            </div>
            <div className={s.additionalDescr}>
              <div className={s.wind}>
                Wind: <b>{weatherData.wind} m/s</b>
              </div>
              <div className={s.humidity}>
                Humidity: <b>{weatherData.humidity} %</b>
              </div>
              <div className={s.humidity}>
                Pressure: <b>{weatherData.pressure}  atm</b>
              </div>
            </div>
          </div>
          {/* <div className={s.weatherError}></div> */}
        </section>
        {weatherData.error}
      </div>
    </div>
  );
};

export default Weather;
