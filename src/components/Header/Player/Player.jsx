import cn from "classnames";
import React from "react";
import s from "./player.module.scss";
import playList from "./playList";
import sound from "../../../assets/musik/Essenger, PYLOT-Offworld.mp3";
import useSound from "use-sound";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  NavigateBefore,
  NavigateNext,
  Pause,
  PlayArrow,
} from "@mui/icons-material";

const Player = () => {
  const [play,  { pause }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);

  const isPlayerSettingActive = useSelector(
    (state) => state.settings.generalSettings[5].checked
  );

  const PlayListItem = ({ id, songName }) => {
    return (
      <li
        className={cn(s.playListItem, isPlaying ? s.active : "")}
        key={id}
      >
        {songName}
      </li>
    );
  };

  const songs = playList.map((s) => (
    <PlayListItem songName={s.title} key={s.id} id={s.id} />
  ));

  const handlePlaySong = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={cn(
        s.playerWrapper,
        isPlayerSettingActive ? "" : s.hidden
      )}
    >
      <div className={s.player}>
        <div className={s.playContainer}>
          <NavigateBefore />
          {isPlaying ? (
            <Pause onClick={handlePlaySong} />
          ) : (
            <PlayArrow onClick={handlePlaySong} />
          )}
          <NavigateNext />
        </div>
      </div>
      <ul className={s.playList}>{songs}</ul>
    </div>
  );
};

export default Player;
