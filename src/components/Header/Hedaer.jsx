import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";
import { WiDayCloudy, WiDaySleet } from "react-icons/wi/";
import playList from "../../data/playList";
import Currency from "./Currency/Currency";
import { useSelector } from "react-redux";
import cn from "classnames";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Cloud } from "@mui/icons-material";

const Header = (props) => {
  const handle = useFullScreenHandle();
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [weatherActive, setWeatherActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(playList[0]);
  const [songs, setSongs] = useState(playList);
  const weatherData = useSelector((state) => state.weather);
  const isWeatherSettingActive = useSelector(
    (state) => state.settings.generalSettings[6].checked
  );
  const audioElem = useRef();

  const toggleWeather = () => {
    
    weatherActive ? setWeatherActive(false) : setWeatherActive(true);
  };

  return (
      <header className={s.header}>
      <Player
        audioElem={audioElem}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <div
        className={cn(s.weatherIcon, isWeatherSettingActive ? "" : s.hidden)}
        onClick={toggleWeather}
      >
        <div className={s.location}>
          {weatherData.location} {weatherData.temperature}
        </div>
        <Cloud />
      </div>
      <Weather
        active={weatherActive}
        setActive={setWeatherActive}
      />
    </header>
  );
};

export default Header;
