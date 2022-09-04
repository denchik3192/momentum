import React from "react";
import s from "./header.module.scss";
import Player from "./Player/Player";
import Weather from "./Weather/Weather";

const Header = (props) => {
  return <header className={s.header}>
      <Player />
      <Weather />
    </header>;
};

export default Header;
