import React, { useState } from "react";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";

const Header = (props) => {
  const [weatherActive, setWeatherActive] = useState(false);

  const toggleWeather = () => {
    weatherActive ? setWeatherActive(false) : setWeatherActive(true);
    console.log(weatherActive);
  }

  return (
    <header className={s.header}>
      <Player />
      <div className={s.weatherIcon} onClick={ toggleWeather }>weather</div>
      <Weather active={weatherActive}/>
    </header>
  );
};

export default Header;
