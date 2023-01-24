import classNames from "classnames";
import React, { useEffect } from "react";
import s from "./player.module.scss";
import playList from "./playList";
import sound from "../../../assets/musik/Essenger, PYLOT-Offworld.mp3";
import useSound from "use-sound";
import {
  NavigateBefore,
  NavigateNext,
  Pause,
  PlayArrowRounded,
} from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const [playSound, { pause }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const isPlayerSettingActive = useSelector(state => state.settings.generalSettings[5].checked)

  const PlayListItem = ({ id, songName }) => {
    return (
      <li className={isPlaying ? classNames(s.playListItem, s.active) : s.playListItem} key={id}>
        {songName}
      </li>
    );
  };

  const songs = playList.map((s) => (
    <PlayListItem songName={s.title} key={s.id} id={s.id} />
  ));

  const playSong = () => {
    playSound();
    setIsPlaying(true);
  };

  const stopPlaySong = () => {
    pause();
    setIsPlaying(false);
  };

  return (
    <div className={classNames(s.playerWrapper, isPlayerSettingActive ? '' : s.hidden) }>
      <div className={s.player}>
        <div className={s.playContainer}>
          <NavigateBefore />
          {isPlaying ? (
            <Pause onClick={stopPlaySong} />
          ) : (
            <PlayArrowRounded onClick={playSong} />
          )}
          <NavigateNext />
        </div>
      </div>
      <ul className={s.playList}>{songs}</ul>
    </div>
  );
};

export default Player;
