import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";

const Header = (props) => {
  const [weatherActive, setWeatherActive] = useState(false);

  const toggleWeather = () => {
    weatherActive ? setWeatherActive(false) : setWeatherActive(true);
  }

  return (
    <header className={s.header}>
      <Player />
      <Link to="/todopage"> ToDoPage </Link>
      <Link to="/login"> Login </Link>
      <div className={s.weatherIcon} onClick={ toggleWeather }>weather</div>
      <Weather active={weatherActive}/>
    </header>
  );
};

export default Header;
