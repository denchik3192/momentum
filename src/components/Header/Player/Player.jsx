import React from "react";
import s from "./player.module.scss";

const Player = (props) => {
  return (
    <div className={s.player}>
      <button className={s.playPrev}></button>
      <button className={s.play}></button>
      <button className={s.playNext}></button>
    </div>
  );
};

export default Player;
