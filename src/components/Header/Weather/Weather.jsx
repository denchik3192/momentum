import React, { useEffect, useState } from "react";
import s from "./weather.module.scss";
import cn from "classnames";
const axios = require("axios").default;


const Weather = ({active}) => {
  const [weather, setWeather] = useState(0);
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchData() { //ToDo make api file for fetching data
      try {
        const cit = "Mogilev";
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`
        );
        const data = res.data;
        const temperature = `${Math.floor(data.main.temp)}°`;
        const description = data.weather[0].description;
        const humidity = `Humidity: ${data.main.humidity}%`;
        const wind = data.wind.speed;
        const location = data.name;
        setWeather(temperature);
        setDescription(description);
        setHumidity(humidity);
        setWind(wind);
        setLocation(location);
      } catch (err) {
        setDescription(`Error! city not found for'!`);
        setWeather(0);
        setHumidity(0);
        setWind(0);
      }
    }
    fetchData();
  }, []);
  console.log();

  return (
    // <div className={s.weather}>
    //   <input type="text" className={s.city} onChange={(e) => setCity(e.target.value)} value={city}/>
    //   <p>City: {city}</p>
    //   <i></i>
    //   <div className={s.weatherError}></div>
    //   <div className={s.descriptionContainer}>
    //     <span className={s.temperature}>{weather}</span>
    //     <span className={s.weatherDescription}>{description}</span>
    //   </div>
    //   <div className={s.wind}>{wind}m/s</div>
    //   <div className={s.humidity}>{humidity}</div>
    // </div>
   
    <div className={active ? cn(s.weather, s.active) : s.weather}>
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
          <div className={s.additionalDescr}>
          <div className={s.wind}>Wind:{wind}m/s</div>
          <div className={s.humidity}>{humidity}</div>
          </div>
        </div>
        {/* <div className={s.weatherError}></div> */}
      </section>
    </div>
  );
};

export default Weather;
