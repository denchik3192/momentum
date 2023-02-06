import { Fullscreen } from "@material-ui/icons";
import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hedaer";
import Main from "../components/Main/Main";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import s from "./momentum.module.scss";

function Momentum() {
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  const screen3 = useFullScreenHandle();
  const screenHandler = () => {
    screen1.enter();
  }
  return (
    <Fragment>
      <Fullscreen onClick={screenHandler} className={s.fullScreenButton} />
      <FullScreen handle={screen1}>
        <Header />
        <Main />
        <Footer />
      </FullScreen>
    </Fragment>
  );
}

export default Momentum;
