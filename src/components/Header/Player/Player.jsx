import classNames from "classnames";
import React from "react";
import s from "./player.module.scss";
import { CiVolumeHigh } from "react-icons/ci";
import playList from "../../../data/playList";
import sound from "./knopka.wav";
import useSound from "use-sound";

const Player = () => {
  const [playSound] = useSound(sound);

  const PlayListItem = ({ id, songName }) => {
    return (
      <li className={s.playListItem} key={id}>
        {songName}
      </li>
    );
  };

  const songs = playList.map((s) => (
    <PlayListItem songName={s.title} key={s.id} id={s.id} />
  ));

  return (
    <div>
      <div className={s.player}>
        <button className={s.playPrev}></button>
        <button className={s.play} onClick={() => playSound()}></button>
        <button className={s.playNext}></button>
      </div>
      <ul className={s.playList}>{songs}</ul>
    </div>
  );
};

export default Player;
