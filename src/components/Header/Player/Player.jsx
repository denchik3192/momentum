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

const Player = () => {
  const [playSound, { pause }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className={s.playerWrapper}>
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
