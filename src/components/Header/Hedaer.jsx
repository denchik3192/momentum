import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";
import { WiDaySleet } from "react-icons/wi/";
import playList from "../../data/playList";
import Currency from "./Currency/Currency";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [weatherActive, setWeatherActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(playList[0]);
  const [songs, setSongs] = useState(playList);
  const weatherData = useSelector((state) => state.weather);
  const audioElem = useRef();


  const toggleWeather = () => {
    weatherActive ? setWeatherActive(false) : setWeatherActive(true);
  }
 
  return (
    <header className={s.header}>
      <Player audioElem={audioElem} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      {/* <Link to="/todopage"> ToDoPage </Link>
      <Link to="/login"> Login </Link> */}
      <Currency/>
      <div className={s.weatherIcon} onClick={ toggleWeather }> {weatherData.temperature}<WiDaySleet /></div>
      <Weather active={weatherActive} setActive={setWeatherActive}/>
    </header>
  );
};

export default Header;
