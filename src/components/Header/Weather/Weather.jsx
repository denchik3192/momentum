import React, { useEffect, useState } from "react";
import s from "./weather.module.scss";
import cn from "classnames";
import { WiDaySleet } from "react-icons/wi";
const axios = require("axios").default;

const Weather = ({ active, setActive }) => {
  const [weather, setWeather] = useState(0);
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchData() {
      //ToDo make api file for fetching data
      try {
        const cit = "Mogilev";
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`
        );
        const data = res.data;
        const temperature = `${Math.floor(data.main.temp)}°`;
        const description = data.weather[0].description;
        const humidity = `${data.main.humidity}%`;
        const pressure = data.main.pressure;
        const wind = data.wind.speed;
        const location = data.name;
        setWeather(temperature);
        setDescription(description);
        setHumidity(humidity);
        setWind(wind);
        setLocation(location);
        setPressure(pressure)
      } catch (err) {
        setDescription(`Error! city not found for'!`);
        setWeather(0);
        setHumidity(0);
        setWind(0);
        setPressure(0)
      }
    }
    fetchData();
  }, []);
  console.log();

 

  return (
    <div className={active ? cn(s.weatherWrapper, s.active) : s.weatherWrapper} onClick={() => setActive(false)}>
    <div className={active ? cn(s.weather, s.active) : s.weather}  onClick={e => e.stopPropagation()}>
      {/* <input type="text" className={s.city} onChange={(e) => setCity(e.target.value)} value={city}/> */}
      <section className={s.weatherSection}>
        <div className={s.header}>
          <div className={s.loacationWrapper}>
            <h3 className={s.location}>{location}</h3>
            <span className={s.weatherDescription}>{description}</span>
          </div>
          <div className={s.more}>000</div>
        </div>

        <div className={s.descriptionContainer}>
          <span className={s.temperature}>{weather}</span>
          <div className={s.weatherIcon}>
          <WiDaySleet />
          </div>
          <div className={s.additionalDescr}>
            <div className={s.wind}>Wind: <b>{wind}m/s</b></div>
            <div className={s.humidity}>Humidity:  <b>{humidity}</b></div>
            <div className={s.humidity}>Pressure:  <b>{pressure}</b></div>
          </div>
        </div>
        {/* <div className={s.weatherError}></div> */}
      </section>
    </div>
    </div>
  );
};

export default Weather;
