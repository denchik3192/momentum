import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";
import { WiDaySleet } from "react-icons/wi/";
import playList from "../../data/playList";

const Header = (props) => {
  const [weatherActive, setWeatherActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(playList[0]);
  const [songs, setSongs] = useState(playList);
  
  const audioElem = useRef();

  const toggleWeather = () => {
    weatherActive ? setWeatherActive(false) : setWeatherActive(true);
  }
 
  return (
    <header className={s.header}>
      <audio src="../../assets/musik/River Flows In You.mp3"/>
      <Player audioElem={audioElem} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      {/* {audioElem} */}
      {/* <Link to="/todopage"> ToDoPage </Link>
      <Link to="/login"> Login </Link> */}
      <div className={s.weatherIcon} onClick={ toggleWeather }> <WiDaySleet /></div>
      <Weather active={weatherActive}/>
    </header>
  );
};

export default Header;
