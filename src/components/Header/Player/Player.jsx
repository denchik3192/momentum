import classNames from "classnames";
import React from "react";
import s from "./player.module.scss";
import { CiVolumeHigh } from 'react-icons/ci';
import { useState } from "react";
import { useEffect } from "react";
import playList  from "../../../data/playList";
import song from '../../../assets/musik/River Flows In You.mp3'

const Player = () => {
  const audio = new Audio(song);
  audio.loop = true;
  const playAudio = () => {
    audio.loop = true;
    audio.play()
  }

  // const [audio] = useState()
  // const [playing, setPlaying] = useState(false);

  // const toggleAudio = () => setPlaying(!playing);

  // useEffect(() => {
  //   playing ? audio.play() : audio.pause();
  // },[audio, playing])
  

  

  const PlayListItem = ({songName}) => {
    return (
      <li className={s.playListItem} key={songName.id}><CiVolumeHigh key={songName.id}/> {songName}</li>
    )
  }

  const songs = playList.map((s) => <PlayListItem songName={s.title} key={s.id}/> )

  return (
    <div>
    <div className={s.player}>
      <button className={s.playPrev}></button>
      <button className={s.play} onClick={()=>playAudio}></button>
      <button className={s.playNext}></button>
    </div>
    <ul className={s.playList}>{songs}</ul>
    </div>
  );
};

export default Player;
