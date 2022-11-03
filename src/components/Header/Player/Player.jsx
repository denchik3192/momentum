import classNames from "classnames";
import React from "react";
import s from "./player.module.scss";
import playList from "./playList";
import { CiVolumeHigh } from 'react-icons/';

const Player = (props) => {

  const PlayListItem = ({songName}) => {
    return (
      <li className={s.playListItem}><CiVolumeHigh/> {songName}</li>
    )
  }

  const songs = playList.map((s) => <PlayListItem songName={s.title} key={s.id}/> )

  return (
    <div>
    <div className={s.player}>
      <button className={s.playPrev}></button>
      <button className={s.play}></button>
      <button className={s.playNext}></button>
    </div>
    <ul className={s.playList}>{songs}</ul>
    </div>
  );
};

export default Player;
