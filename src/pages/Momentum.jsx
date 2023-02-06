import { Fullscreen } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hedaer";
import Main from "../components/Main/Main";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import s from "./momentum.module.scss";

function Momentum() {
  const screen1 = useFullScreenHandle();
  const [isFullSreenActive, setSsFullSreenActive] = useState(false)
  const screenHandler = () => {
    isFullSreenActive ? screen1.enter() : screen1.exit();
    setSsFullSreenActive(!isFullSreenActive)
  }
  return (
    <Fragment>
      <FullScreen handle={screen1}>
      <Fullscreen onClick={screenHandler} className={s.fullScreenButton} />
        <Header />
        <Main />
        <Footer />
      </FullScreen>
    </Fragment>
  );
}

export default Momentum;
