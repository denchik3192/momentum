import React from "react";
import { Date } from "./Date/Date";
import Focus from "./Focus/Focus";
import Greeting from "./Gretting/Greeting";
import s from "./main.module.scss";
import Time from "./Time/Time";

class Main extends React.Component {
  
  render() {
    return (
      <main className={s.main}>
        <Time />
        {/* <Date /> */}
        <Greeting />
        <Focus />
      </main>
    );
  }
}

export default Main;
